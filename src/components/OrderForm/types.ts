import { PizzaSize, PizzaType } from "@/types";

export interface IOrderItem {
  id: string;
  title: string;
  types: PizzaType[];
  size: PizzaSize;
  count: number;
  price: number;
  imageUrl: string;
}

export type PaymentMethod = "doordash" | "online";
