"use client";

import { useState } from "react";

import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface iAppProps {
  images: any;
}

const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center cursor-pointer"
        />
      </div>
      <div className="w-full flex justify-between space-x-4">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
