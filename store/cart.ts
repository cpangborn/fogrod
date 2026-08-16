"use client";

import { create } from "zustand";

export type CartItem = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: Omit<CartItem, "quantity">) => void;

  removeItem: (name: string) => void;

  increaseQuantity: (name: string) => void;

  decreaseQuantity: (name: string) => void;

  clearCart: () => void;
};

export const useCart = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === item.name
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }),

  removeItem: (name) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== name),
    })),

  increaseQuantity: (name) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.name === name
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
    })),

  decreaseQuantity: (name) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.name === name
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),
}));