"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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


const testimoniosDatos=[
  {
    id:1,
    nombre: "Roberto",
    texto:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, excepturi unde officia aliquid nulla possimus",
    image:"/101x101.jpg"
  },
  {
    id:2,
    nombre: "Yole",
    texto:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, excepturi unde officia aliquid nulla rerum animi cum enim.",
    image:"/102x102.jpg"
  },
  {
    id:3,
    nombre: "William",
    texto:"Lorem ipsum d earum amet est aspernatur exercitationem consequuntur rerum qui laudantium asperiores fugit, molestias animi cum enim.",
    image:"/103x103.jpg"
  },
  {
    id:4,
    nombre: "Roan",
    texto:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, excepturi unde officia aliquid nulla possimus earum amet est aspernatur",
    image:"/105x105.jpg"
  },
  {
    id:5,
    nombre: "Maite",
    texto:"Lorem ipsum dolor sit, aspernatur exercitationem consequuntur rerum qui laudantium asperiores fugit, molestias animi cum enim.",
    image:"/104x104.jpg"
  },
]
  return (
    <>
      <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
        <Slider {...settings}>
        {testimoniosDatos.map(({id,nombre,texto,image})=>(         
            <div key={id} className="my-6">
              <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                <Image src={image} alt={nombre} width={100} height={100}  className="rounded-full mx-auto block"/>
                <p className="text-sm text-gray-500">{texto}</p>
                <h1 className="text-xl font-bold">{nombre}</h1>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
              </div>
            </div>
         
        ))}
        </Slider>
      </div>
    </>
  );
}
