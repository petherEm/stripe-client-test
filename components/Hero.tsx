import React from "react";

import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

async function getData() {
  const query = `*[_type == 'heroImage']`;

  const data = await client.fetch(query);

  return data;
}

const Hero = async () => {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-col-reverse flex-wrap justify-between md:flex-row md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-24 lg:pt-48">
          <h4 className="h4 mb-2">Luksus pre-owned</h4>
          <h1 className="h1 mb-4 text-black sm:text-5xl md:mb-8 md:text-6xl">
            Ikoniczne torebki
          </h1>
          <p className="h3">
            Odkryj ponadczasowe modele z drugiej ręki <br />
            warte inwestycji.
          </p>
          <Button className="mt-8 text-white bg-black w-fit">
            Zobacz selekcję
          </Button>
        </div>

        <div className="bg-rose-300 mb-12 flex w-full md:mb-16 lg:w-1/2">
          <div className="w-full h-full">
            <Image
              src={urlFor(data[0].image1).url()}
              alt="Hero image"
              width={600}
              height={600}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
