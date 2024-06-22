export interface Aggregate {
  id: string;
  name: string;
  price: number;
  select?: boolean;
}

export interface Pizza {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  aggregates?: Aggregate[];
  toStringAgg?: string;
}
// https://docs.google.com/spreadsheets/d/e/2PACX-1vS1rJvcNHk6Bg5yNQofGk0wQz4YSDbaN3_DZwyDZIizgSEAyQ3rVoAS3apzaksM-Dt35HiE0l-iTSZ6/pub?output=csv
const api = {
  list: async (): Promise<Pizza[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS1rJvcNHk6Bg5yNQofGk0wQz4YSDbaN3_DZwyDZIizgSEAyQ3rVoAS3apzaksM-Dt35HiE0l-iTSZ6/pub?output=csv",
      { cache: "no-store" }
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    // Convertimos cada línea en un objeto Pizza, asegúrate de que los campos no posean `,`
    const pizzas: Pizza[] = data.map((row) => {
      const [id, name, image, price, description] = row.split(",");
      return {
        id,
        name,
        image,
        price: Number(price),
        description,
      };
    });

    // Lo retornamos
    return pizzas;
  },

  // [
  //   {
  //     id: "1",
  //     image: "/pizza1.png",
  //     name: "Pizza redonda",
  //     price: 450,
  //     description:
  //       "Reserve con dos horas antelación su pizza familiar. Difrutela!!!",
  //     aggregates: [

  //     ],
  //   },
  //   {
  //     id: "2",
  //     image: "/pizza2.png",
  //     name: "Pizza Familiar",
  //     price: 900,
  //     description: "Variedades de pizzas y servicios gastronómicos",
  //     aggregates: [
  //       {
  //         id:"1",
  //         name: "Doble queso",
  //         price: 150,
  //       },
  //       {
  //         id:"2",
  //         name: "Salchicha",
  //         price: 150,
  //       },
  //       {
  //         id:"3",
  //         name: "Chorizo",
  //         price: 150,
  //       },
  //       {
  //         id:"4",
  //         name: "Aceituna",
  //         price: 150,
  //       },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     image: "/pizza3.png",
  //     name: "Pizza Mega Familiar",
  //     price: 1700,
  //     description:
  //       "Ofertas de refrescos de pomos, galletas, chocolates y caramelos",
  //       aggregates: [
  //         {
  //           id:"1",
  //           name: "Doble queso",
  //           price: 250,
  //         },
  //         {
  //           id:"2",
  //           name: "Salchicha",
  //           price: 250,
  //         },
  //         {
  //           id:"3",
  //           name: "Chorizo",
  //           price: 250,
  //         },
  //         {
  //           id:"4",
  //           name: "Aceituna",
  //           price: 250,
  //         },
  //       ],
  //   },
  // ],
};

export default api;
