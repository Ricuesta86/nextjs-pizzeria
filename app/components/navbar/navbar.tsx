import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./darkmode";
import Link from "next/link";
import buttonCart from './button-cart';
import ButtonCart from "./button-cart";

export default function Navbar() {
  return (
    <>
      <div className="shadow-md dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-2">
          <div className="flex justify-between items-center">
            <div className=" flex items-center gap-2 text-2xl sm:text-3xl font-bold">
              <Link href={"/"}>Pizzaiola</Link>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Darkmode />
              </div>
              {/* <ul className="hidden sm:flex gap-4">
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 hover:text-primary"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 hover:text-primary"
                  >
                    Contacto
                  </a>
                </li> 
              </ul>*/}
              <Link href={"/orden"} className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                Ordene
                <FaCartShopping className="h-4 w-4" />
              </Link>
              {/* heroicons shopping-cart */}
              <ButtonCart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
