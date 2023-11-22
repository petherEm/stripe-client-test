import { Facebook, Heart, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="mt-10 md:inline-block w-full bg-black/90 text-white">
      <div className="pt-10 pb-20 flex flex-col md:flex-row items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="h2">Gibbarosa</h1>
          <h3>Otaczaj się pięknymi, ponadczasowymi produktami.</h3>
          <div className="flex items-center space-x-10">
            <Instagram size={16} />
            <Facebook size={16} />
          </div>
        </div>

        <div className="hidden flex-1 md:grid grid-cols-3 text-[#c8c8df] text-[14px]">
          <div className="flex flex-col gap-4">
            <h1>Shop</h1>
            <h4>My account</h4>
            <h4>Login</h4>
            <h4>Wishlist</h4>
            <h4>Cart</h4>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Information</h1>
            <h4>Shopping Policy</h4>
            <h4>Returns & Refunds</h4>
            <h4>Cookies Policy</h4>
            <h4>Frequently Asked</h4>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Company</h1>
            <h4>About us</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms & Conditions</h4>
            <h4>Contact us</h4>
          </div>
        </div>

        {/* MOBILE FOOTER */}
        <div className="md:hidden w-full mt-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Shop</AccordionTrigger>
              <AccordionContent>
                Cippa. Pippa. Zippa. Coming soon
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Information</AccordionTrigger>
              <AccordionContent>
                Cippa. Pippa. Zippa. Coming soon
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Company</AccordionTrigger>
              <AccordionContent>
                Cippa. Pippa. Zippa. Coming soon
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="pb-20 flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="w-full flex flex-col">
          {" "}
          <hr className="h-[1.5px]" />
          <div className="flex justify-between items-center">
            <h1 className="mt-4 text-[14px]">&copy; 2023 Gibbarosa</h1>
            <div className="mt-4 text-[14px]">
              Developed with love by vabank.dev
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
