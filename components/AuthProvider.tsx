"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getUser,
  handleAuthCallback,
  login,
  logout,
  requestPasswordRecovery,
  updateUser,
} from "@netlify/identity";

export type Address = {
  line1: string;
  line2: string;
  city: string;
  postcode: string;
};

export type TradeAccountData = {
  billingAddress?: Address;
  deliveryAddress?: Address;
};

type AuthContextValue = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  changePassword: (password: string) => Promise<void>;
  saveTradeAccountData: (data: TradeAccountData) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function getFreshUser() {
  const currentUser = await getUser();
  if (!currentUser) return null;
  return currentUser;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function initialise() {
      try {
        await handleAuthCallback();
      } catch {
        // Continue checking the existing session.
      }

      try {
        const currentUser = await getFreshUser();
        if (active) setUser(currentUser);
      } finally {
        if (active) setLoading(false);
      }
    }

    initialise();
    return () => {
      active = false;
    };
  }, []);

  async function signIn(email: string, password: string) {
    const loggedInUser = await login(email, password);
    setUser(loggedInUser);
  }

  async function signOut() {
    await logout();
    setUser(null);
  }

  async function resetPassword(email: string) {
    await requestPasswordRecovery(email);
  }

  async function changePassword(password: string) {
    await updateUser({ password });
    const refreshedUser = await getFreshUser();
    setUser(refreshedUser);
  }

  async function saveTradeAccountData(data: TradeAccountData) {
    const currentUser = await getFreshUser();
    if (!currentUser) {
      throw new Error("Your account session has expired. Please sign in again.");
    }

    // The installed Netlify Identity SDK exposes metadata as userMetadata.
    const existingMetadata = currentUser.userMetadata || {};
    const existingTradeData = existingMetadata.tradeAccount || {};
    const nextMetadata = {
      ...existingMetadata,
      tradeAccount: {
        ...existingTradeData,
        ...data,
      },
    };

    if (typeof currentUser.jwt !== "function") {
      throw new Error("Your account session cannot be updated. Please sign in again.");
    }

    const token = await currentUser.jwt(true);
    const response = await fetch("/.netlify/identity/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: nextMetadata }),
    });

    if (!response.ok) {
      let detail = "Unable to save your account details.";
      try {
        const body = await response.json();
        detail = body?.msg || body?.message || detail;
      } catch {
        // Keep the friendly fallback message.
      }
      throw new Error(detail);
    }

    const savedUser = await response.json();
    const savedMetadata = savedUser?.user_metadata || savedUser?.userMetadata;
    if (!savedMetadata?.tradeAccount) {
      throw new Error("The address could not be confirmed as saved.");
    }

    const refreshedUser = await getFreshUser();
    setUser(refreshedUser || savedUser);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        resetPassword,
        changePassword,
        saveTradeAccountData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}

export function isPandSTankers(user: any | null) {
  return user?.email?.toLowerCase() === "sales@pandstankers.co.uk";
}

export function tradePrice(price: number, user: any | null) {
  return isPandSTankers(user) ? Math.round(price * 0.7 * 100) / 100 : price;
}

export function getTradeAccountData(user: any | null): TradeAccountData {
  return user?.user_metadata?.tradeAccount || user?.userMetadata?.tradeAccount || {};
}
