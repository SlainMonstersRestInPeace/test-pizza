import about1Url from "@/assets/images/about-1.jpg";
import about2Url from "@/assets/images/about-2.jpg";
import about3Url from "@/assets/images/about-3.jpg";

export type IAboutItem = {
  title: string;
  description: string;
  imageUrl: string;
};

export const aboutItems: IAboutItem[] = [
  {
    title: "Изготавливаем пиццу по своим рецептам в лучших традициях",
    description:
      "Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам",
    imageUrl: about1Url,
  },
  {
    title: "Используем только свежие ингридиенты",
    description:
      "Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения",
    imageUrl: about2Url,
  },
  {
    title: "Доставка в течение 60 минут или заказ за нас счёт",
    description:
      "Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях",
    imageUrl: about3Url,
  },
];
