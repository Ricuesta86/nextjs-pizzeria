"use client";

import { Pizza } from "@/app/api/api";
import useFromStore from "@/app/hook/useFromStore";
import { useCartStore } from "@/app/store/useCartStore";
import Image from "next/image";

export default function Drawer() {
  const openCart = useFromStore(useCartStore, (state) => state.openCart);
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const removeFromCart = useCartStore(state=>state.removeFromCart);

  const changeOpenCart = useCartStore((state) => state.changeOpenCart);

  const total = cart?.reduce((cal,item)=>{return cal+item.price},0)||0

  function parseCurrency(value: number): string {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10  ">
      <div className="bg-white w-[250px] h-full absolute right-0 overflow-y-scroll">
        <h1 className="bg-red-500 py-2 text-center text-white">Compra</h1>
        <div className="flex flex-col items-center px-2">
          {cart?.map((item:Pizza) => (
            <div
              key={item.id}
              className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center"
            >
              <button onClick={()=>removeFromCart(item)}>X</button>
              <Image src={item.image} alt={item.name} width={100} height={100} />
              <h3 className="text-xl">{item.name} <span className="text-red-600">{parseCurrency(item.price)}</span></h3>
              {item.aggregates?.map((agg)=>(<p key={agg.id}>{agg.name}</p>))}
              
            </div>
          ))}
        </div>
        <h1 className="bg-red-500 py-2 text-center text-white">Tota: {parseCurrency(total)}</h1>
        <button onClick={() => changeOpenCart()}> Cerrar</button>
      </div>
    </div>
    // <div
    //   className={
    //     " fixed  z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
    //     (openCart
    //       ? " transition-opacity opacity-100 duration-500 translate-x-0  "
    //       : " transition-all delay-500 opacity-0 translate-x-full  ")
    //   }
    // >
    //   <div
    //     className={
    //       " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
    //       (openCart ? " translate-x-0 " : " translate-x-full ")
    //     }
    //   >
    //     <article className="relative w-screen max-w-lg flex flex-col space-y-6 h-full">
    //       <header className="p-4 font-bold text-lg">Header</header>
    //       {cart?.map((item) => (
    //         <div key={item.id} className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    //           <div className="animate-pulse flex space-x-4">
    //             <div className="rounded-full bg-gray-400 h-12 w-12"></div>
    //             <div className="flex-1 space-y-4 py-1">
    //               <div className="h-4 bg-gray-400 rounded w-3/4"></div>
    //               <div className="space-y-2">
    //                 <div className="h-4 bg-gray-400 rounded"></div>
    //                 <div className="h-4 bg-gray-400 rounded w-5/6"></div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //       <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    //         <div className="animate-pulse flex space-x-4">
    //           <div className="rounded-full bg-gray-400 h-12 w-12"></div>
    //           <div className="flex-1 space-y-4 py-1">
    //             <div className="h-4 bg-gray-400 rounded w-3/4"></div>
    //             <div className="space-y-2">
    //               <div className="h-4 bg-gray-400 rounded"></div>
    //               <div className="h-4 bg-gray-400 rounded w-5/6"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <button onClick={() => changeOpenCart()}> Cerrar</button>
    //     </article>
    //   </div>
    // </div>
  );
}
