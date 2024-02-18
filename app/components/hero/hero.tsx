
import SectionImage from "./section-image";

export default function Hero() {
  const bgImage = {
    backgroundImage: `url("/vector3.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Bienvenido a Pizzalola
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis a iure ratione recusandae! Quidem ullam
                exercitationem quae adipisci libero distinctio.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300">
                  Ordene ahora
                </button>
              </div>
            </div>

            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                <SectionImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
