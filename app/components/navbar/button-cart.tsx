"use client";

import useFromStore from "@/app/hook/useFromStore";
import { useCartStore } from "@/app/store/useCartStore";

export default function ButtonCart() {
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);
  return (
    <>
      <button>{totalItems}</button>
    </>
  );
}
