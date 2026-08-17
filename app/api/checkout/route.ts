import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const taxRateId = process.env.STRIPE_VAT_RATE_ID;

    if (!taxRateId) {
      throw new Error("STRIPE_VAT_RATE_ID is not configured");
    }

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

        tax_rates: [taxRateId],
      })),

      success_url: "https://fogrod.co.uk/succes",

      cancel_url: "https://fogrod.co.uk/basket",
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