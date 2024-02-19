"use client";
import Slider from "react-slick";
import Carousel from "./carousel";

export default function Testimonial() {

  return (
    <>
      <div className="py-10 dark:bg-gray-700">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonios de Nuestros Clientes
            </h1>
            <h2 className="text-4xl font-bold">Testimonio</h2>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              fugiat saepe iste inventore suscipit deserunt.
            </p>
          </div>
          {/* Seccion del Carousel */}
            <Carousel />
        </div>
      </div>
    </>
  );
}
