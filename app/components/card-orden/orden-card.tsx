"use client";
import { Aggregate, Pizza } from "@/app/api/api";
import { useCartStore } from "@/app/store/useCartStore";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [item, setItem] = useState(pizza);
  const addToCart = useCartStore((state) => state.addToCart);

  const aux: Aggregate[] = [
    {
      id: "1",
      name: "Doble queso",
      price: 150,
    },
    {
      id: "2",
      name: "Salchicha",
      price: 150,
    },
    {
      id: "3",
      name: "Chorizo",
      price: 150,
    },
    {
      id: "4",
      name: "Aceituna",
      price: 150,
    },
  ];

  const [aggs, setAggs] = useState<Aggregate[]>(aux);

  const handleTogget = (id: Aggregate["id"]) => {
    setAggs((aggs) =>
      aggs.map((agg) => (agg.id === id ? { ...agg, select: !agg.select } : agg))
    );
  };

  const totalAggs =
    aggs?.reduce((cal, item) => {
      let result = 0;
      item.select ? (result = cal + item.price) : (result = cal + 0);
      return result;
    }, 0) || 0;

  const textAggs = (item: Aggregate[]) => {
   return item.reduce((message, agg) => agg.select? message.concat(`---- ${agg.name} - ${agg.price} \n `): message, "");
  };

  const handleAdd = (item: Pizza) => {
    let toStringAgg: string = `* ${item.name} - ${item.price}\n`;
    let textAgg=  textAggs(aggs)
    toStringAgg = `${toStringAgg} ${textAgg}`
    
    const newPizza: Pizza = {
      ...item,
      aggregates: aggs,
      price: item.price + totalAggs,
      toStringAgg,
    };
    addToCart(newPizza);
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duraction="300"
      className="max-w-[300px] group rounded-2xl  dark:bg-gray-600  p-4 shadow-xl"
    >
      <div className="h-[100px]">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">{item.name}</h1>
        <p>
          {parseCurrency(item.price)}
          {/* <span>$</span> */}
        </p>
      </div>
      <div className="pb-3">
        <h3 className="font-bold text-left">Agregados</h3>
        <ul>
          {aggs.map((aggregate) => (
            <li
              key={aggregate.id}
              className={
                aggregate.select
                  ? "bg-blue-300 rounded-full my-1 px-2"
                  : "my-1 px-2"
              }
            >
              <p className="flex justify-between items-center">
                {aggregate.name}
                <span className="px-2">{parseCurrency(aggregate.price)}</span>
                {aggregate.select ? (
                  <button
                    onClick={() => handleTogget(aggregate.id)}
                    className="rounded-full bg-red-400 h-6 w-6"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => handleTogget(aggregate.id)}
                    className="rounded-full bg-green-400 h-6 w-6"
                  >
                    +
                  </button>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300"
          onClick={() => handleAdd(item)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default OrdenCard;
