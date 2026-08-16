"use client";

import { useCart } from "@/store/cart";

type Props = {
  product: {
    name: string;
    price: number;
    image: string;
  };
};

export default function AddToBasketButton({ product }: Props) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      onClick={() =>
        addItem({
          name: product.name,
          price: product.price,
          image: product.image,
        })
      }
      className="mt-8 w-full cursor-pointer rounded-xl bg-cyan-500 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
    >
      Add to Basket
    </button>
  );
}