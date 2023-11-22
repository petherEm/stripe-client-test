"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000"
      cancelUrl="http://localhost:3000/nowosci"
      currency="PLN"
      billingAddressCollection={true}
      shouldPersist={true}
      language="pl-PL"
    >
      {children}
    </USCProvider>
  );
}
