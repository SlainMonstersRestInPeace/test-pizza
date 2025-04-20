import { InternalSVG } from "@/types";

import IconOrder from "@/assets/icons/icon-order.svg";
import IconDelivery from "@/assets/icons/icon-delivery.svg";
import IconPay from "@/assets/icons/icon-pay.svg";

export interface IOrderCardItem {
  title: string;
  description: string;
  Icon: InternalSVG;
}

export const orderCardItems: IOrderCardItem[] = [
  {
    title: "Заказ",
    description:
      "После оформления заказа мы свяжемся с вами для уточнения деталей.",
    Icon: IconOrder,
  },
  {
    title: "Доставка курьером",
    description:
      "Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.",
    Icon: IconDelivery,
  },
  {
    title: "Оплата",
    description:
      "Оплатить можно наличными или картой курьеру. И золотом тоже можно.",
    Icon: IconPay,
  },
];
