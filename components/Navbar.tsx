"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import NavbarMobile from "./NavbarMobile";

// import useCart from "@/hooks/use-cart";
import { useShoppingCart } from "use-shopping-cart";

import { useRouter } from "next/navigation";

const links = [
  {
    name: "Nowości",
    href: "/nowosci",
  },
  {
    name: "Torebki",
    href: "/about",
  },
  {
    name: "Biżuteria",
    href: "/blog",
  },
  {
    name: "Akcesoria",
    href: "/contact",
  },
  {
    name: "Obuwie",
    href: "/obuwie",
  },
  {
    name: "Marki",
    href: "/marki",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  // const cart = useCart();
  const router = useRouter();

  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="mt-2 mb-2">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-playfair font-bold">
            Gibbarosa
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16 mt-2">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-[14px] text-black underline"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-[14px]  text-gray-600 transition duration-100 underline-effect"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center">
          <Button className="bg-transparent text-black">
            <Search size={18} />
          </Button>
          <Button className="bg-transparent text-black">
            <User size={18} />
          </Button>
          <Button className="bg-transparent text-black">
            <Heart size={18} />
          </Button>
          <Button
            onClick={() => handleCartClick()}
            className="bg-transparent text-black"
          >
            <ShoppingBag size={18} />
            <span>{cartCount}</span>
          </Button>
        </div>

        {/* Mobile Navbar */}
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
