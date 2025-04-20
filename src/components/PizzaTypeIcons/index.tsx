import CarrotIcon from "@/assets/icons/carrot.svg";
import CheeseIcon from "@/assets/icons/cheese.svg";
import PepperIcon from "@/assets/icons/pepper.svg";
import MeatIcon from "@/assets/icons/meat.svg";
import { InternalSVG, PizzaType } from "@/types";

const pizzaTypesIconMap: Record<PizzaType, InternalSVG> = {
  spice: PepperIcon,
  cheese: CheeseIcon,
  meat: MeatIcon,
  vegan: CarrotIcon,
};

interface IProps {
  types: PizzaType[];
  className?: string;
  iconClassName?: string;
}

export default function PizzaCardTypeIcons({
  types,
  className,
  iconClassName,
}: IProps) {
  return (
    <div className={className}>
      {types.map((type) => {
        const Icon = pizzaTypesIconMap[type];
        return <Icon fill="#c5cbd1" className={iconClassName} />;
      })}
    </div>
  );
}
