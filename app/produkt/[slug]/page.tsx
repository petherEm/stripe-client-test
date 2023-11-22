import Image from "next/image";
import { client } from "@/lib/sanity";
import { fullProduct } from "@/interface";
import ImageGallery from "@/components/ImageGallery";
import ImageGallery2 from "@/components/ImageGallery2";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import AddToCart from "@/components/AddToCart";

import MidBanner from "@/components/MidBanner";
import Newsletter from "@/components/Newsletter";
import YouMayLike from "@/components/YouMayLike";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          name,
          brand,
          price,
          condition,
          size,
          description,
          tags,
          "slug": slug.current,
          "categoryName": category -> name,
          price_id,
          
      } `;

  const data = await client.fetch(query);

  return data;
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);
  //   console.log(data);

  return (
    <section className="mt-20 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery2 images={data.images} />

        <div className="flex flex-col">
          {/* KEY INFO */}
          <div>
            <h1 className="h4">{data.brand}</h1>
            <h1 className="h2">{data.name}</h1>
            <p className="mt-4">{data.description}</p>
            <h1 className="mt-6 text-3xl font-bold">{data.price} PLN</h1>
          </div>

          {/* SIZES */}
          <div className="mt-4 mb-4">Size:</div>

          {/* OTHER */}

          <div className="mt-6 flex space-x-8">
            <div className="flex-col">
              <div className="mb-2 text-sm uppercase text-gray-400">Stan</div>
              <div className="mb-2 text-sm uppercase text-gray-400">
                Wymiary
              </div>
              <div className="mb-2 text-sm uppercase text-gray-400">
                Akcesoria
              </div>
            </div>
            <div className="flex-col">
              <div className="mb-2 text-sm capitalize">{data.condition}</div>
              <div className="mb-2 text-sm">16 x 16 x 8cm</div>
              <div className="mb-2 text-sm">
                Woreczek przeciwkurzowy, Karta Autentyczności
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <AddToCart
            key={data._id}
            currency="PLN"
            description={data.description}
            image={data.images[0]}
            name={data.name}
            price={data.price}
            price_id={data.price_id}
          />

          {/* PRODUCT ACCORDION */}
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Informacje</AccordionTrigger>
              <AccordionContent>{data.description}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wysyłka i zwroty</AccordionTrigger>
              <AccordionContent>Do dodania</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Autentyczność</AccordionTrigger>
              <AccordionContent>Do dodania</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Ocena stanu</AccordionTrigger>
              <AccordionContent>Do dodania</AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CHECKOUT GUARANTEE */}
          <div className="mt-6 text-gray-500">
            <p className="text-sm">Gwarancja bezpiecznych zakupów</p>
            <Image
              src="/images/paylogos.png"
              width={400}
              height={100}
              alt="Payment logos"
              className="mt-4 mb-4 object-cover object-center"
            />
          </div>
        </div>
      </div>

      <YouMayLike />
      <MidBanner />
      <Newsletter />
    </section>
  );
};

export default ProductPage;
