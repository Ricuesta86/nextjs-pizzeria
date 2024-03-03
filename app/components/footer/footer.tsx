import Link from "next/link";
import { FaFacebook, FaInstagram, FaMobileAlt } from "react-icons/fa";
import { FaLocationArrow, FaTwitter, FaWhatsapp } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl text-justify sm:text-left font-bold">
                Pizzaiola
              </h1>
            </div>
            <div className="py-8 px-4">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Reina, Ave. 40 % 5 y 7 #515</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+53 55418925</p>
              </div>
            </div>
            <div className="py-8 px-4">
              <div className="flex items-center  md:justify-end gap-3">
                <Link href={"#"} className="text-3xl">
                  <FaFacebook />
                </Link>
                <Link href={"#"} className="text-3xl">
                  <FaInstagram />
                </Link>
                <Link href={"#"} className="text-3xl">
                  <FaTwitter />
                </Link>{" "}
                <Link href={"#"} className="text-3xl">
                  <FaWhatsapp/>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            <p>Hecho por RicuestaDev</p>
          </div>
        </div>
      </footer>
    </>
  );
}
