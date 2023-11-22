"use client";

import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";
import { fullProduct } from "@/interface";

import useCart from "@/hooks/use-cart";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

const AddToCart = ({
  name,
  currency,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

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
        onClick={() => {
          addItem(product), handleCartClick();
        }}
        className="bg-black text-white w-full"
      >
        Dodaj do koszyka
      </Button>
    </div>
  );
};

export default AddToCart;
