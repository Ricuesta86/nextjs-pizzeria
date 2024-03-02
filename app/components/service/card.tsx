import Image from "next/image";

export default function Card() {
  const serviceDatas = [
    {
      id: 1,
      image: "/pizza1.png",
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora doloribus quidem molestias?",
    },
    {
      id: 2,
      image: "/biryani3.png",
      name: "Chicken kari",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora doloribus quidem molestias?",
    },
    {
      id: 3,
      image: "/biryani5.png",
      name: "Cold coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora doloribus quidem molestias?",
    },
  ];

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {serviceDatas.map(({ id, image, name, description }) => (
            <div
            data-aos="zoom-in"
            data-aos-duraction="300"
            key={id} className="max-w-[300px] group rounded-2xl  dark:bg-gray-600  dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 p-4 shadow-xl">
              <div className="h-[100px]">
                <Image
                  src={image}
                  alt={name}
                  width={400}
                  height={400}
                  className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
