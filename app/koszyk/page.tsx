"use client";

import { useState, useEffect } from "react";

import useCart from "@/hooks/use-cart";
import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";

const Koszyk = () => {
  const [mounted, setMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="mt-20 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <h1 className="h1">Koszyk</h1>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg:col-span-7">
          {cart.items.length === 0 && <p>No items mate</p>}

          <ul>
            {cart.items.map((item) => (
              <CartItem key={item._id} data={item} />
            ))}
          </ul>
        </div>
        <Summary />
      </div>
    </section>
  );
};

export default Koszyk;
