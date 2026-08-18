"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getUser, handleAuthCallback, login, logout } from "@netlify/identity";

type AuthContextValue = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
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

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
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
