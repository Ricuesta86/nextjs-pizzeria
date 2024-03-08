import api from "@/app/api/api";
import Image from "next/image";
import OrdenCard from "./orden-card";



export default async function CardOrden() {

  const pizzas = await api.list();

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {pizzas.map((pizza) => (
            <OrdenCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </>
  );
}
