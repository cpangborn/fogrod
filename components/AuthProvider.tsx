"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getUser,
  handleAuthCallback,
  login,
  logout,
  requestPasswordRecovery,
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function initialise() {
      try {
        await handleAuthCallback();
      } catch {
        // Ignore callback errors and continue checking the current session.
      }

      try {
        const currentUser = await getUser();
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
    if (!user?.update) throw new Error("Your account session is unavailable. Please sign in again.");
    const updatedUser = await user.update({ password });
    setUser(updatedUser);
  }

  async function saveTradeAccountData(data: TradeAccountData) {
    if (!user?.update) throw new Error("Your account session is unavailable. Please sign in again.");

    const existingMetadata = user.user_metadata || {};
    const existingTradeData = existingMetadata.tradeAccount || {};

    const updatedUser = await user.update({
      data: {
        ...existingMetadata,
        tradeAccount: {
          ...existingTradeData,
          ...data,
        },
      },
    });

    // Refresh from Netlify so the UI reflects the persisted account record.
    const refreshedUser = (await getUser()) || updatedUser;
    setUser(refreshedUser);
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
  return user?.user_metadata?.tradeAccount || {};
}
