import Image from "next/image";
import IconFastFood from "../icon/fast-food";
import IconFoodTruck from "../icon/food-truck";
import IconGrSecure from "../icon/gr-secure";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div>
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/** image Section */}
              <div>
                <Image
                  src={"/pizza1.png"}
                  alt="Image Pizza"
                  width={430}
                  height={430}
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px 10px 12px rgba(0,0,0,0.1)]"
                />
              </div>
              {/* text section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className=" text-center text-3xl sm:text-left sm:text-4xl font-bold">
                  Pizzaiola tu mejor opción
                </h1>
                <p className="text-center sm:text-left text-sm text-gray-500 tracking-wide leading-5">
                  ¡Saborea la verdadera tradición en nuestra pizzería!
                  Te ofrecemos una gran variedad de deliciosas pizzas hechas con
                  ingredientes frescos y de la mejor calidad. Con los sabores
                  más innovadores, tenemos algo para todos los gustos.
                </p>
                <p className="text-center sm:text-left text-sm text-gray-500 tracking-wide leading-5">
                  Además, contamos con servicio a domicilio para que puedas
                  disfrutar de nuestras exquisitas pizzas en la comodidad de tu
                  hogar. Y si prefieres disfrutar de un ambiente acogedor,
                  también puedes visitarnos en nuestra cafeteria y disfrutar
                  de un excelente servicio.
                </p>
                <p className="text-center sm:text-left text-sm text-gray-500 tracking-wide leading-5">
                  No te pierdas la oportunidad de probar nuestras pizzas, ¡te
                  garantizamos que no podrás resistirte a repetir! Ven y
                  descubre por qué somos la mejor pizzería de la zona. ¡Te
                  esperamos!
                </p>
                <div className="flex gap-6 justify-center sm:justify-start">
                  <div className="text-4xl h-18 w-18 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-300">
                    <IconGrSecure />
                  </div>
                  <div className="text-4xl h-18 w-18 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-300">
                    <IconFastFood />
                  </div>
                  <div className="text-4xl h-18 w-18 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-300">
                    <IconFoodTruck />
                  </div>
                </div>
                <div className="flex justify-center sm:justify-normal pb-10">

                  <Link href={"/orden"} className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300">
                    Ordene ahora
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
