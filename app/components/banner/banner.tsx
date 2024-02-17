import { LockClosedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import IconFastFood from "../icon/fast-food";
import IconFoodTruck from "../icon/food-truck";
import IconGrSecure from "../icon/gr-secure";

export default function Banner() {
  return (
    <>
      <div className="min-h-[550px]">
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
                  src={"/biryani2.png"}
                  alt="Image Pizza"
                  width={430}
                  height={430}
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px 10px 12px rgba(0,0,0,0.1)]"
                />
              </div>
              {/* text section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Pizzalola tu mejos opcion
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  numquam exercitationem voluptatem magnam beatae. Esse at odio
                  amet veniam tenetur placeat tempore, architecto laboriosam
                  doloribus consequatur, inventore tempora laborum ea.
                </p>
                <div className="flex gap-6">
                  <div className="text-4xl h-18 w-18 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-800">
                    <IconGrSecure />
                  </div>
                  <div className="text-4xl h-18 w-18 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-800">
                    <IconFastFood />
                  </div>
                  <div className="text-4xl h-18 w-18 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-800">
                    <IconFoodTruck />
                  </div>
                </div>
                <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300">
                  Ordene ahora
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
