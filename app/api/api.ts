export interface Aggregate {
  id: number;
  name: string;
  price: number;
}


export interface Pizza {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  aggregates: Aggregate[]
}

const api = {
  list: async (): Promise<Pizza[]> => [
    {
      id: 1,
      image: "/pizza1.png",
      name: "Pizza redonda",
      price: 450,
      description:
        "Reserve con dos horas antelación su pizza familiar. Difrutela!!!",
      aggregates: [
        {
          id:1,
          name: "Doble queso",
          price: 150,
        },
        {
          id:2,
          name: "Salchicha",
          price: 150,
        },
        {
          id:3,
          name: "Chorizo",
          price: 150,
        },
        {
          id:4,
          name: "Aceituna",
          price: 150,
        },
      ],
    },
    {
      id: 2,
      image: "/pizza2.png",
      name: "Pizza Familiar",
      price: 900,
      description: "Variedades de pizzas y servicios gastronómicos",
      aggregates: [
        {
          id:1,
          name: "Doble queso",
          price: 150,
        },
        {
          id:2,
          name: "Salchicha",
          price: 150,
        },
        {
          id:3,
          name: "Chorizo",
          price: 150,
        },
        {
          id:4,
          name: "Aceituna",
          price: 150,
        },
      ],
    },
    {
      id: 3,
      image: "/pizza3.png",
      name: "Pizza Mega Familiar",
      price: 1700,
      description:
        "Ofertas de refrescos de pomos, galletas, chocolates y caramelos",
        aggregates: [
          {
            id:1,
            name: "Doble queso",
            price: 250,
          },
          {
            id:2,
            name: "Salchicha",
            price: 250,
          },
          {
            id:3,
            name: "Chorizo",
            price: 250,
          },
          {
            id:4,
            name: "Aceituna",
            price: 250,
          },
        ],
    },
  ],
};

export default api;
