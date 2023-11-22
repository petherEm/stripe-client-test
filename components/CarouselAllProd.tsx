import Image from "next/image";

const allProd = [
  {
    id: 1,
    brand: "Gucci",
    name: "GG Marmont",

    price: 58.0,
    imageUrl: "/images/allProd/1.png",
  },
  {
    id: 2,
    brand: "Chanel",
    name: "Puppa",
    price: 420.0,
    imageUrl: "/images/allProd/2.png",
  },
  {
    id: 3,
    brand: "Burberry",
    name: "Pippa",
    price: 320.0,
    imageUrl: "/images/allProd/3.png",
  },
  {
    id: 4,
    brand: "Cult Gaia",
    name: "Cippa",
    price: 300.0,
    imageUrl: "/images/allProd/4.png",
  },
];

const CarouselAllProd = () => {
  return (
    <section className="mt-20 mb-20 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 flex flex-col">
      <div className="mt-2 mb-2 w-full flex justify-center">
        <h2 className="h3 underline">Zobacz wszystkie produkty</h2>
      </div>

      <div className="flex items-center space-x-6 overflow-x-auto thin-scrollbar scroll-smooth">
        {allProd.map((prod, index) => (
          <div key={index} className="min-w-[280px] shadow-lg">
            <Image
              src={prod.imageUrl}
              width={280}
              height={414}
              alt={prod.name}
              className="object-cover object-center"
            />
            <div className="p-4">
              <p className="text-lg">{prod.brand}</p>
              <h3 className="font-bold text-xl">{prod.name}</h3>
              <p className="font-semibold">${prod.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselAllProd;
