"use client";

import useFromStore from "@/app/hook/useFromStore";
import { useCartStore } from "@/app/store/useCartStore";
import Drawer from "../cart/drawer";
import { FaCartShopping } from "react-icons/fa6";

export default function ButtonCart() {
  const openCart = useFromStore(useCartStore, (state) => state.openCart);
  const changeOpenCart = useCartStore((state) => state.changeOpenCart);
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);
  return (
    <>
      {openCart && <Drawer />}
      {changeOpenCart && (
        <button onClick={() => changeOpenCart()}  className="relative bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
          {" "}
          Orden
          <FaCartShopping className="h-5 w-5" />
          <span className="absolute right-2 top-1 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm/4  leading-tight text-center">
            {totalItems}
          </span>
        </button>
      )}
    </>
  );
}
