import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";

import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  Menu,
  ShoppingBag,
} from "lucide-react";

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full h-full ">
        <h1 className="h2 text-left">Gibbarosa</h1>
        <div className="flex flex-col justify-between">
          {/* ACCORDION */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>Home items</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shop</AccordionTrigger>
              <AccordionContent>Shop items</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Product</AccordionTrigger>
              <AccordionContent>Product items</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Pages</AccordionTrigger>
              <AccordionContent>Pages items</AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* KEY MENU ITEMS */}
          <div className="mt-20 mb-20 flex flex-col gap-4 pb-8 border-b-2">
            <div className="flex items-center justify-between">
              <h1>Cart</h1>
              <div className="flex items-center space-x-2">
                <ShoppingBag size={20} />
                <Badge variant="cart">2</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h1>Whishlist</h1>
              <div className="flex items-center space-x-2">
                <Heart size={20} />
                <Badge variant="cart">6</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pb-8 border-b-2">
            <div className="flex items-center justify-between">
              <h1>Currency</h1>
              <div className="flex items-center space-x-2">
                <h1>USD</h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h1>Language</h1>
              <div className="flex items-center space-x-2">
                <h1>English</h1>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="bg-black text-white">
                Sign in
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
        {/* SOCIAL BAR */}
        <div className="flex items-center space-x-6 mt-4 mb-4">
          <Facebook size={20} />
          <Instagram size={20} />
          <Mail size={20} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
