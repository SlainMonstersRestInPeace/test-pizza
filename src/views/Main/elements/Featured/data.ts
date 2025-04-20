import event1Url from "@/assets/images/event-1.jpg";
import event2Url from "@/assets/images/event-2.jpg";
import event3Url from "@/assets/images/event-3.jpg";

export interface IFeaturedItem {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const featuredItems: IFeaturedItem[] = [
  {
    imageUrl: event1Url,
    title: "Закажи 2 пиццы – 3-я в подарок",
    subtitle: "При заказе 2-х больших пицц – средняя пицца в подарок",
  },
  {
    imageUrl: event2Url,
    title: "Напиток в подарок",
    subtitle: "Скидка на заказ от 3 000 рублей + напиток в подарок",
  },
  {
    imageUrl: event3Url,
    title: "25% при первом заказе",
    subtitle: "Скидка новым клиентам!",
  },
];
