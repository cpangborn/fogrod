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

async function getFreshUser() {
  const currentUser = await getUser();
  if (!currentUser) return null;

  // getUser() may return the cached Identity user. getUserData() refreshes
  // that same user object from the Identity server.
  if (typeof currentUser.getUserData === "function") {
    await currentUser.getUserData();
  }

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
        // Ignore callback errors and continue checking the current session.
      }

      try {
        const currentUser = await getFreshUser();
        if (active) setUser(currentUser);
      } catch {
        if (active) setUser(null);
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
    if (typeof loggedInUser?.getUserData === "function") {
      await loggedInUser.getUserData();
    }
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
    const currentUser = await getFreshUser();
    if (!currentUser) throw new Error("Your account session has expired. Please sign in again.");

    const updatedUser = await currentUser.update({ password });
    setUser(updatedUser || currentUser);
  }

  async function saveTradeAccountData(data: TradeAccountData) {
    const currentUser = await getFreshUser();
    if (!currentUser) throw new Error("Your account session has expired. Please sign in again.");

    const existingMetadata = currentUser.user_metadata || {};
    const existingTradeData = existingMetadata.tradeAccount || {};
    const nextTradeData = {
      ...existingTradeData,
      ...data,
    };

    // Use the authenticated Identity user's canonical update method. This
    // writes user_metadata to Netlify Identity rather than only changing the
    // React/localStorage copy of the user.
    const updatedUser = await currentUser.update({
      data: {
        ...existingMetadata,
        tradeAccount: nextTradeData,
      },
    });

    // Verify the value by fetching the user again from the Identity server.
    const verifiedUser = await getFreshUser();
    const savedTradeData = verifiedUser?.user_metadata?.tradeAccount;
    if (
      !verifiedUser ||
      savedTradeData?.billingAddress?.line1 !== nextTradeData.billingAddress?.line1 ||
      savedTradeData?.billingAddress?.postcode !== nextTradeData.billingAddress?.postcode ||
      savedTradeData?.deliveryAddress?.line1 !== nextTradeData.deliveryAddress?.line1 ||
      savedTradeData?.deliveryAddress?.postcode !== nextTradeData.deliveryAddress?.postcode
    ) {
      throw new Error("The address could not be confirmed as saved. Please try again.");
    }

    setUser(updatedUser || verifiedUser);
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
