import { create } from "zustand";
import { persist } from "zustand/middleware";


import { Pizza } from "../api/api";
import { randomUUID } from "crypto";

interface State {
  cart: Pizza[];
  openCart:boolean,
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Pizza) => void;
  removeFromCart: (Item: Pizza) => void;
  changeOpenCart:()=>void;
  clearCart:()=>void;
}

const INITIAL_STATE: State = {
  cart: [],
  openCart:false,
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      openCart: INITIAL_STATE.openCart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (pizza: Pizza) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === pizza.id);

        const newPizza:Pizza ={...pizza, id: crypto.randomUUID() }

        const updatedCart = [...cart, {...newPizza }];

        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + pizza.price,
        }));
      },
      removeFromCart: (pizza: Pizza) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== pizza.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - pizza.price,
        }));
      },
      changeOpenCart: ()=>{
        set((state)=>({
          ...state,
          openCart: !state.openCart,
        }))
      },
      clearCart:()=>{
        set((state)=>({
          ...state,
          cart: INITIAL_STATE.cart,
          openCart: INITIAL_STATE.openCart,
          totalItems: INITIAL_STATE.totalItems,
          totalPrice: INITIAL_STATE.totalPrice,
        }))
      }
    }),
    {
      name: "cart-storage",
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
      // version: 1, // State version number,
      // migrate: (persistedState: unknown, version: number) => {
      // 	if (version === 0) {
      // 		// if the stored value is in version 0, we rename the field to the new name
      // 		persistedState.totalProducts = persistedState.totalItems
      // 		delete persistedState.totalItems
      // 	}

      // 	return persistedState as State & Actions
      // },
    }
  )
);
