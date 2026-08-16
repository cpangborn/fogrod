import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",

      line_items: items.map((item: any) => ({
        price_data: {
          currency: "gbp",

          product_data: {
            name: item.name,
          },

          unit_amount: Math.round(item.price * 100),
        },

        quantity: item.quantity,
      })),

      success_url: "http://localhost:3000/success",

      cancel_url: "http://localhost:3000/basket",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Stripe checkout failed." },
      { status: 500 }
    );
  }
}