import pizza1Url from "@/assets/images/pizza/01.png";
import pizza2Url from "@/assets/images/pizza/02.png";
import pizza3Url from "@/assets/images/pizza/03.png";
import pizza4Url from "@/assets/images/pizza/04.png";
import pizza5Url from "@/assets/images/pizza/05.png";
import pizza6Url from "@/assets/images/pizza/06.png";
import pizza7Url from "@/assets/images/pizza/07.png";
import pizza8Url from "@/assets/images/pizza/08.png";
import pizza9Url from "@/assets/images/pizza/09.png";
import pizza10Url from "@/assets/images/pizza/10.png";
import pizza11Url from "@/assets/images/pizza/11.png";
import pizza12Url from "@/assets/images/pizza/12.png";
import { IPizzaVariant } from "@/types";

export const pizzaMenu: IPizzaVariant[] = [
  {
    title: "Итальянская",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizeVariants: ["20", "30", "40"],
    price: 699,
    imageUrl: pizza1Url,
    types: ["spice"],
  },
  {
    title: "Маргарита",
    description: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    sizeVariants: ["20", "30", "40"],
    price: 479,
    imageUrl: pizza2Url,
    types: ["meat"],
  },
  {
    title: "Барбекю",
    description: "Цыплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    sizeVariants: ["20", "30", "40"],
    price: 699,
    imageUrl: pizza3Url,
    types: ["meat"],
  },
  {
    title: "Вегетарианская",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizeVariants: ["20", "30", "40"],
    price: 399,
    imageUrl: pizza4Url,
    types: ["vegan"],
  },
  {
    title: "Мясная",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizeVariants: ["20", "30", "40"],
    price: 699,
    imageUrl: pizza5Url,
    types: ["meat", "spice"],
  },
  {
    title: "Овощная",
    description: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    sizeVariants: ["20", "30", "40"],
    price: 479,
    imageUrl: pizza6Url,
    types: ["vegan"],
  },
  {
    title: "Римская",
    description: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    sizeVariants: ["20", "30", "40"],
    price: 699,
    imageUrl: pizza7Url,
    types: ["spice"],
  },
  {
    title: "С грибами",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizeVariants: ["20", "30", "40"],
    price: 399,
    imageUrl: pizza8Url,
    types: ["cheese"],
  },
  {
    title: "Сырная",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizeVariants: ["20", "30", "40"],
    price: 699,
    imageUrl: pizza9Url,
    types: ["cheese"],
  },
  {
    title: "Четыре сыра",
    description: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    sizeVariants: ["20", "30", "40"],
    price: 479,
    imageUrl: pizza10Url,
    types: ["cheese"],
  },
  {
    title: "Пепперони Фреш с томатами",
    description: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    sizeVariants: ["20", "30", "40"],
    price: 699,
    imageUrl: pizza11Url,
    types: [],
  },
  {
    title: "Ветчина и сыр",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizeVariants: ["20", "30", "40"],
    price: 399,
    imageUrl: pizza12Url,
    types: ["meat"],
  },
];
