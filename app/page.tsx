import Image from "next/image";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import MidBanner from "@/components/MidBanner";
import CarouselBags from "@/components/CarouselBags";
import CarouselBags2 from "@/components/CarouselBags2";

import Categories from "@/components/Categories";
import FeaturedBijou from "@/components/FeaturedBijou";
import Newsletter from "@/components/Newsletter";
import CarouselAllProd from "@/components/CarouselAllProd";

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <FeatureSection />
      <MidBanner />
      <CarouselBags />
      <CarouselBags2 />
      <Categories />
      <FeaturedBijou />
      <CarouselAllProd />
      <Newsletter />
    </main>
  );
}
