import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string, {
  apiVersion: "2023-10-16",
});

export default async function createPaymentIntent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(req.body.items),
        currency: "pln",
        payment_method_types: ["p24", "blik"],
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

function calculateOrderAmount(items: any[]): number {
  let sum = 0;
  items.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
}
