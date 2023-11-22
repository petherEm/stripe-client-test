"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  // connect with Stripe or other payment provider
  const onCheckout = async () => {
    try {
      const response = await axios.post("/api/checkout", {
        items,
        totalPrice,
      });
      toast.success(response.data.message);
      removeAll();
    } catch (error) {
      toast.error("Trochę się zepsuło, spróbuj ponownie");
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <p>{totalPrice}</p>
        </div>
      </div>

      <Button onClick={onCheckout} className="mt-6 bg-black text-white w-full">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
