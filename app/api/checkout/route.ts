import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getUser } from "@netlify/identity";
import { products } from "@/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { items } = await req.json();
    const user = await getUser();
    const isPandSTankers = user?.email?.toLowerCase() === "sales@pandstankers.co.uk";
    const discount = isPandSTankers ? 0.7 : 1;

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("Basket is empty");
    }

    const taxRateId = process.env.STRIPE_VAT_RATE_ID;
    if (!taxRateId) {
      throw new Error("STRIPE_VAT_RATE_ID is not configured");
    }

    const line_items = items.map((item: any) => {
      const product = products.find((entry) => entry.name === item.name);
      if (!product) throw new Error(`Unknown product: ${item.name}`);

      const unitAmount = Math.round(product.price * discount * 100);

      return {
        price_data: {
          currency: "gbp",
          product_data: { name: product.name },
          unit_amount: unitAmount,
        },
        quantity: Math.max(1, Number(item.quantity) || 1),
        tax_rates: [taxRateId],
      };
    });

    // Fixed £20 delivery charge, subject to the same VAT rate as the products.
    line_items.push({
      price_data: {
        currency: "gbp",
        product_data: { name: "Delivery" },
        unit_amount: 2000,
      },
      quantity: 1,
      tax_rates: [taxRateId],
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: "https://fogrod.co.uk/succes",
      cancel_url: "https://fogrod.co.uk/basket",
      customer_email: user?.email || undefined,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Stripe checkout failed." }, { status: 500 });
  }
}
