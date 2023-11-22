import Image from "next/image";

const categoriesdummy = [
  {
    id: 1,
    category: "Torebki",
    length: 43,
    imageUrl: "/images/categories/bags.png",
  },
  {
    id: 2,
    category: "Biżuteria i Zegarki",
    length: 43,
    imageUrl: "/images/categories/bijoux.png",
  },
  {
    id: 3,
    category: "Akcesoria",
    length: 43,
    imageUrl: "/images/categories/accessories.png",
  },
  {
    id: 4,
    category: "Obuwie",
    length: 43,
    imageUrl: "/images/categories/shoes.png",
  },
];

const Categories = () => {
  return (
    <section className="mt-10 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center space-x-6 overflow-x-auto thin-scrollbar scroll-smooth">
        {categoriesdummy.map((category, index) => (
          <div key={category.id} className="min-w-[310px] shadow-lg">
            <div className="h-[414px] relative">
              <Image
                src={category.imageUrl}
                layout="fill"
                alt={category.category}
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-lg">{category.category}</p>
              <p className="font-semibold">{category.length} produktów</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
