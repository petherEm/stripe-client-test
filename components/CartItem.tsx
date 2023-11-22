"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { urlFor } from "@/lib/sanity";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fullProduct } from "@/interface";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: fullProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data._id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={urlFor(data.images[0]).url()}
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <Button onClick={onRemove} className="bg-white text-black">
            <X size={15} />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p>{data.brand}</p>
          </div>
          <div className="mt-6 flex text-sm">
            <p className="h3">{data.price} PLN</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
