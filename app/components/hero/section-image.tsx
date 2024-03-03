"use client";
import Image from "next/image";
import { useState } from "react";

export default function SectionImage() {
  const [imageId, setImageId] = useState("/pizza1.png");
  const imageList = [
    { id: 1, image: "/pizza1.png" },
    { id: 2, image: "/pizza2.png" },
    { id: 3, image: "/pizza3.png" },
  ];
  const changeImage = (image: string) => {
    setImageId(image);
  };
  return (
    <>
      <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
        <Image
          data-aos="zoom-in"
          data-aos-duraction="300"
          data-aos-once="true"
          src={imageId}
          alt="Image section"
          width={450}
          height={450}
          className="w-[330px] sm:w-[450px] mx-auto spin"
        />
      </div>
      <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
        {imageList.map((item) => (
          <Image
            data-aos="zoom-in"
            data-aos-duraction="400"
            data-aos-once="true"
            key={item.id}
            src={item.image}
            width={450}
            height={450}
            alt="Section imagen"
            className="max-w-[65px] h-[65px] object-contain inline-block hover:scale-105 duration-200"
            onClick={() => changeImage(item.image)}
          />
        ))}
      </div>
    </>
  );
}
