"use client";
import { Pizza } from "@/app/api/api";
import { useCartStore } from "@/app/store/useCartStore";
import Image from "next/image";
import { useState } from "react";

interface OrdenCardProps {
  pizza: Pizza;
}

function parseCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

const OrdenCard: React.FC<OrdenCardProps> = ({ pizza }) => {

  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div
      data-aos="zoom-in"
      data-aos-duraction="300"
      className="max-w-[300px] group rounded-2xl  dark:bg-gray-600  p-4 shadow-xl"
    >
      <div className="h-[100px]">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={400}
          height={400}
          className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">{pizza.name}</h1>
        <p>
          {parseCurrency(pizza.price)}
          {/* <span>$</span> */}
        </p>
      </div>
      <div className="pb-3">
        <h3 className="font-bold text-left">Agregados</h3>
        <ul>
          {pizza.aggregates.map((aggregate) => (
            <li key={aggregate.id} className="my-1">
              <p className="flex justify-between">
                {aggregate.name}
                <span>{parseCurrency(aggregate.price)}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300"
        onClick={() => addToCart(pizza)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default OrdenCard;
