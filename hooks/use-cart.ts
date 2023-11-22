import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { fullProduct } from "@/interface";

import { toast } from "react-hot-toast";

interface CartStore {
  items: fullProduct[];
  addItem: (data: fullProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: fullProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item._id === data._id);

        if (existingItem) {
          return toast("Item already in cart");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item._id !== id)] });
        toast.success("Item removed from cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
