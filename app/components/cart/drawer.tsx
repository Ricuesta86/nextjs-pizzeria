"use client";

import { Pizza } from "@/app/api/api";
import useFromStore from "@/app/hook/useFromStore";
import { useCartStore } from "@/app/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Drawer() {
  const openCart = useFromStore(useCartStore, (state) => state.openCart);
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const changeOpenCart = useCartStore((state) => state.changeOpenCart);

  const total =
    cart?.reduce((cal, item) => {
      return cal + item.price;
    }, 0) || 0;

  function parseCurrency(value: number): string {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  const text = React.useMemo(
    () =>
      cart
        ?.reduce(
          (message, product) =>
            message.concat(
              ` * ${product.name} - ${parseCurrency(product.price)}\n`
            ),
          ``
        )
        .concat(
          `\n Total: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))} `
        ),
    [cart]
  );

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10  ">
      <div className="bg-white w-[350px] h-full absolute right-0 overflow-y-scroll">
        <h1 className="bg-primary py-2 text-center text-white font-bold">
          Orden
        </h1>
        <div className="flex flex-col items-center px-2">
          {cart?.map((item: Pizza) => (
            <div
              key={item.id}
              className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center"
            >
              <button
                onClick={() => removeFromCart(item)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                X
              </button>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
              <h3 className="text-xl">
                {item.name}{" "}
                <span className="text-red-600">
                  {parseCurrency(item.price)}
                </span>
              </h3>
              {item.aggregates?.map((agg) => <p key={agg.id}>{agg.name}</p>)}
            </div>
          ))}
        </div>
        <h1 className="bg-primary py-2 text-center text-white font-bold">
          Tota: {parseCurrency(total)}
        </h1>
        <div className="flex justify-between p-5">
          <button
            onClick={() => changeOpenCart()}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2"
          >
            Cerrar
          </button>

          {totalItems !== 0 ? (
            <Link
              href={`https://wa.me/5352040404?text=${encodeURIComponent(text || "")}`}
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2"
              onClick={() => clearCart()}
            >
              Comprar
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
