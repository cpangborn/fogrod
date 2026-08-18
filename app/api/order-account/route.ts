import { NextResponse } from "next/server";
import { getUser } from "@netlify/identity";
import { products } from "@/data/products";

const P_AND_S_EMAIL = "sales@pandstankers.co.uk";

export async function POST(req: Request) {
  try {
    const user = await getUser();

    if (user?.email?.toLowerCase() !== P_AND_S_EMAIL) {
      return NextResponse.json({ error: "Trade account ordering is not enabled for this account." }, { status: 403 });
    }

    const { items, deliveryAddress, purchaseOrder } = await req.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Basket is empty." }, { status: 400 });
    }

    if (!deliveryAddress?.trim()) {
      return NextResponse.json({ error: "Delivery address is required." }, { status: 400 });
    }

    const orderItems = items.map((item: any) => {
      const product = products.find((entry) => entry.name === item.name);
      if (!product) throw new Error(`Unknown product: ${item.name}`);

      const quantity = Math.max(1, Number(item.quantity) || 1);
      const unitPrice = Math.round(product.price * 0.7 * 100) / 100;
      return {
        name: product.name,
        quantity,
        unitPrice,
        lineTotal: Math.round(unitPrice * quantity * 100) / 100,
      };
    });

    const subtotal = orderItems.reduce((sum, item) => sum + item.lineTotal, 0);
    const vat = Math.round(subtotal * 0.2 * 100) / 100;
    const total = Math.round((subtotal + vat) * 100) / 100;
    const orderNumber = `TR-${Date.now().toString().slice(-8)}`;

    const formBody = new URLSearchParams();
    formBody.set("form-name", "trade-order");
    formBody.set("order-number", orderNumber);
    formBody.set("customer-email", P_AND_S_EMAIL);
    formBody.set("company", "P&S Tankers Ltd");
    formBody.set("purchase-order", String(purchaseOrder || "Not provided"));
    formBody.set("delivery-address", String(deliveryAddress).trim());
    formBody.set(
      "items",
      orderItems
        .map((item) => `${item.name} × ${item.quantity} @ £${item.unitPrice.toFixed(2)} = £${item.lineTotal.toFixed(2)}`)
        .join("\n")
    );
    formBody.set("subtotal", `£${subtotal.toFixed(2)}`);
    formBody.set("vat", `£${vat.toFixed(2)}`);
    formBody.set("total", `£${total.toFixed(2)}`);
    formBody.set("payment-method", "On account");

    const formUrl = new URL("/__forms.html", req.url);
    const formResponse = await fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
    });

    if (!formResponse.ok) {
      throw new Error("Unable to record the trade order.");
    }

    return NextResponse.json({
      orderNumber,
      subtotal,
      vat,
      total,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Unable to place the trade order." }, { status: 500 });
  }
}
