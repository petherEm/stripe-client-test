import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: Request,
  { params }: { params: { storedId: string } }
) {
  const { priceIds } = await req.json();

  //   console.log("Received priceIds:", priceIds);

  if (!priceIds || priceIds.length === 0) {
    return new NextResponse("Missing productIds", { status: 400 });
  }

  const lineItems = priceIds.map((priceId: any) => ({
    price: "price_1ODs8kL7DkuDcKacWiQ2hQZS",
    quantity: 1,
  }));

  console.log(lineItems);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: "http://localhost:3000/nowosci",
    cancel_url: "http://localhost:3000",
    payment_method_types: ["p24", "blik"],
  });

  return NextResponse.json({ url: session.url }, { headers: corsHeaders });
}
