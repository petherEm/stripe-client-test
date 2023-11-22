import Image from "next/image";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col-reverse flex-wrap justify-between md:items-center md:space-x-6 md:flex-row md:mb-16">
        <div className="flex flex-row gap-3 md:gap-6 md:flex-2/3">
          <div className="flex-grow flex-shrink-0 w-1/2">
            <Image
              src="/images/Featured_1.png"
              alt="Featured image 1"
              width={300}
              height={500}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex-grow flex-shrink-0 w-1/2">
            <Image
              src="/images/Featured_2.png"
              alt="Featured image 2"
              width={300}
              height={500}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-1/3">
          <h4 className="h4">O Gibbarosa</h4>
          <h2 className="h2">Luksus pre-owned</h2>
          <p className="h3">
            Gibbarosa powstała z miłości do historii, dziedzictwa i savoir-faire
            luksusowych domów mody. Dajemy drugie życie ponadczasowym produktom,
            które należy traktować jak prawdziwe inwestycje.
          </p>
          <Button
            variant="link"
            className="text-black underline w-fit p-0 mt-4"
          >
            Poznaj nas <ArrowRight size={16} className="ml-1 inline" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
