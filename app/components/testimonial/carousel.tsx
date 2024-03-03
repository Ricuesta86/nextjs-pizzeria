"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const testimoniosDatos = [
    {
      id: 1,
      nombre: "Juan M",
      texto:
      "La mejor pizza que he probado en mucho tiempo. Ingredientes frescos, masa crujiente, y un servicio impecable. Definitivamente regresaré",
      image: "/101x101.jpg",
    },
    {
      id: 2,
      nombre: "María L.",
      texto:
        "La pizzería tiene un ambiente acogedor y la pizza es deliciosa. Recomiendo probar la pizza de queso y acetuna, es una delicia",
      image: "/102x102.jpg",
    },
    {
      id: 3,
      nombre: "Martín G.",
      texto:
      "¡Increíble! La pizza llegó caliente y en menos de 30 minutos. El sabor era espectacular, sin duda volveré a ordenar",
      image: "/103x103.jpg",
    },
    {
      id: 4,
      nombre: "Laura",
      texto:
      "He estado buscando una buena pizzería por años y finalmente la encontré. La pizza es sabrosa y el personal es amable y atento. ¡Altamente recomendado!",
      image: "/105x105.jpg",
    },
    {
      id: 5,
      nombre: "Maite",
      texto:
      "¡La mejor pizza con servicio domicilio que he probado! La combinación de ingredientes es perfecta, la masa es deliciosa y el precio es muy razonable. Definitivamente mi nueva pizzería favorita",
      image: "/104x104.jpg",
    },
  ];
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duraction="300"
        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
      >
        <Slider {...settings}>
          {testimoniosDatos.map(({ id, nombre, texto, image }) => (
            <div key={id} className="my-6">
              <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                <Image
                  src={image}
                  alt={nombre}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto block"
                />
                <p className="text-sm text-gray-500">{texto}</p>
                <h1 className="text-xl font-bold">{nombre}</h1>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
