import Image from "next/image";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const bags = [
  {
    id: 1,
    brand: "Gucci",
    name: "GG Marmont",

    price: 2600,
    imageUrl: "/images/bags/bag_1.png",
  },
  {
    id: 2,
    brand: "Chanel",
    name: "Puppa",
    price: 2600,
    imageUrl: "/images/bags/bag_2.png",
  },
  {
    id: 3,
    brand: "Burberry",
    name: "Pippa",
    price: 2600,
    imageUrl: "/images/bags/bag_3.png",
  },
  {
    id: 4,
    brand: "Cult Gaia",
    name: "Cippa",
    price: 2600,
    imageUrl: "/images/bags/bag_4.png",
  },
  {
    id: 5,
    brand: "Gucci",
    name: "GG Marmont",

    price: 2600,
    imageUrl: "/images/bags/bag_1.png",
  },
  {
    id: 6,
    brand: "Chanel",
    name: "Puppa",
    price: 2600,
    imageUrl: "/images/bags/bag_2.png",
  },
];

const YouMayLike = () => {
  return (
    <div className="mt-8">
      <h2 className="mt-2 mb-2 h2">Mogą Ci się również spodobać (static)</h2>
      <div className="flex items-center space-x-6 overflow-x-auto thin-scrollbar scroll-smooth">
        {bags.map((bag, index) => (
          <div key={index} className="min-w-[310px] shadow-lg">
            <Image
              src={bag.imageUrl}
              width={310}
              height={414}
              alt={bag.name}
              className="object-cover object-center"
            />
            <div className="p-4">
              <p className="text-lg">{bag.brand}</p>
              <h3 className="font-bold text-xl">{bag.name}</h3>
              <p className="font-semibold">${bag.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;
