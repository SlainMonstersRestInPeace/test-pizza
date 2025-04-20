export type InternalSVG = React.FC<React.SVGProps<SVGElement>>;

export type PizzaType = "spice" | "meat" | "cheese" | "vegan";

export interface IPizzaVariant {
  title: string;
  description: string;
  sizeVariants: PizzaSize[];
  price: number;
  imageUrl: string;
  types: PizzaType[];
}

export interface IPizzaMenuFilterItem {
  title: string;
  value: string;
  icon: InternalSVG;
}

export type PizzaSize = "40" | "30" | "20";
