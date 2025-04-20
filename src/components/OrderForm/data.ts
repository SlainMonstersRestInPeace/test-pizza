import pizzaImage from "@/assets/images/pizza/01.png";
import { IOrderItem } from "./types";

export const orderItems: IOrderItem[] = [
  {
    id: "italian",
    title: "Итальянская",
    size: "30",
    types: ["spice"],
    count: 1,
    price: 699,
    imageUrl: pizzaImage,
  },
  {
    id: "margarita",
    title: "Маргарита",
    size: "40",
    types: ["meat"],
    count: 1,
    price: 479,
    imageUrl: pizzaImage,
  },
  {
    id: "bbq",
    title: "Барбекю",
    size: "30",
    types: ["meat"],
    count: 1,
    price: 699,
    imageUrl: pizzaImage,
  },
];
