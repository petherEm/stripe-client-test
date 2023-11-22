"use client";

import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";
import { fullProduct } from "@/interface";

import useCart from "@/hooks/use-cart";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";

import { ProductCart } from "./AddToCart";

const CheckOutNow = ({
  name,
  currency,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  // const cart = useCart();

  // const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.stopPropagation();

  //   cart.addItem(data);
  //   console.log(data);
  // };

  return (
    <div>
      <Button
        onClick={() => buyNow(product.price_id)}
        className="bg-black text-white w-full"
      >
        Zapłać teraz
      </Button>
    </div>
  );
};

export default CheckOutNow;
