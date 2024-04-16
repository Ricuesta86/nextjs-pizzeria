"use client";

import useFromStore from "@/app/hook/useFromStore";
import { useCartStore } from "@/app/store/useCartStore";
import Drawer from "../cart/drawer";

export default function ButtonCart() {
  const openCart = useFromStore(useCartStore, (state) => state.openCart);
  const changeOpenCart = useCartStore(state => state.changeOpenCart);
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);
  return (
    <>
    {openCart && <Drawer />}
      {changeOpenCart && <button onClick={()=>changeOpenCart()}>{totalItems}</button>}
    </>
  );
}
