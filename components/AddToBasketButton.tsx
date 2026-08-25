"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";

type Props = {
  product: {
    name: string;
    price: number;
    image: string;
    inStock?: boolean;
  };
};

export default function AddToBasketButton({ product }: Props) {
  const addItem = useCart((state) => state.addItem);
  const [added, setAdded] = useState(false);
  const inStock = product.inStock !== false;

  const handleAddToBasket = () => {
    if (!inStock) return;

    addItem({
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <button
      type="button"
      onClick={handleAddToBasket}
      disabled={!inStock}
      className={`mt-8 flex w-full items-center justify-center gap-3 rounded-xl py-4 text-lg font-semibold transition-all duration-300 ${
        !inStock
          ? "cursor-not-allowed bg-slate-200 text-slate-500"
          : added
            ? "scale-[1.02] bg-green-500 text-white shadow-lg shadow-green-500/30"
            : "cursor-pointer bg-cyan-500 text-black hover:scale-[1.01] hover:bg-cyan-400"
      }`}
    >
      {!inStock ? (
        <span>Out of Stock</span>
      ) : added ? (
        <>
          <Check size={24} strokeWidth={3} className="animate-bounce" />
          <span>Added to Basket!</span>
        </>
      ) : (
        <>
          <ShoppingCart size={22} />
          <span>Add to Basket</span>
        </>
      )}
    </button>
  );
}
