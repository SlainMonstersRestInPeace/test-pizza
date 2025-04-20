import { useMemo, useState } from "react";
import { pizzaMenu } from "./data";
import PizzaCard from "@/components/PizzaCard";
import Typography from "@/primitives/Typography";
import { useMediaQuery } from "react-responsive";
import { MEDIA_SCREEN_MOBILE } from "@/theme/adaptive";
import cn from "clsx";

import CarrotIcon from "@/assets/icons/carrot.svg";
import CheeseIcon from "@/assets/icons/cheese.svg";
import PepperIcon from "@/assets/icons/pepper.svg";
import MeatIcon from "@/assets/icons/meat.svg";
import AllIcon from "@/assets/icons/love.svg";
import { InternalSVG, IPizzaMenuFilterItem, PizzaType } from "@/types";

const filterItems: IPizzaMenuFilterItem[] = [
  {
    title: "ВСЕ",
    value: "",
    icon: AllIcon,
  },
  {
    title: "ОСТРЫЕ",
    value: "spice",
    icon: PepperIcon,
  },
  {
    title: "МЯСНЫЕ",
    value: "meat",
    icon: MeatIcon,
  },
  {
    title: "СЫРНЫЕ",
    value: "cheese",
    icon: CheeseIcon,
  },
  {
    title: "ВЕГАНСКИЕ",
    value: "vegan",
    icon: CarrotIcon,
  },
];

export default function Menu() {
  const [pizzaType, setPizzaType] = useState<PizzaType | "">("");

  const variants = useMemo(() => {
    if (!pizzaType) return pizzaMenu;
    return pizzaMenu.filter((pizza) => pizza.types.includes(pizzaType as any));
  }, [pizzaType]);

  return (
    <div className={cn("pizza-menu", "content-wrapper")}>
      <div className={cn("pizza-menu__content", "content")}>
        <PizzaMenuFilter
          value={pizzaType}
          onChange={(value) =>
            setPizzaType(pizzaType === value ? "" : (value as any))
          }
          items={filterItems}
          title="Выберите пиццу"
        />
        <div className="pizza-menu__container">
          {variants.map((variant) => (
            <PizzaCard
              types={variant.types}
              key={variant.title}
              title={variant.title}
              price={variant.price}
              imageUrl={variant.imageUrl}
              sizeVariants={variant.sizeVariants}
              description={variant.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface IPizzaMenuFilterProps {
  value: string;
  onChange: (value: string) => void;
  items: IPizzaMenuFilterItem[];
  title: string;
}

function PizzaMenuFilter({
  value,
  onChange,
  items,
  title,
}: IPizzaMenuFilterProps) {
  const isMobile = useMediaQuery({ query: MEDIA_SCREEN_MOBILE });
  const variant = isMobile ? "compact" : "full";
  return (
    <div className="pizza-menu__filter">
      <Typography variant="Heading-2" as="div">
        {title}
      </Typography>
      <div className="pizza-menu__filter-items">
        {items.map((item) => (
          <PizzaMenuFilterItem
            variant={variant}
            key={item.value}
            item={item}
            selected={item.value === value}
            onClick={() => onChange(item.value)}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

interface IPizzaMenuFilterItemProps {
  item: IPizzaMenuFilterItem;
  selected?: boolean;
  Icon: InternalSVG;
  onClick: () => void;
  variant: "compact" | "full";
}

function PizzaMenuFilterItem({
  item,
  selected,
  Icon,
  onClick,
  variant,
}: IPizzaMenuFilterItemProps) {
  const className = cn(
    "pizza-menu__filter-item",
    selected && "pizza-menu__filter-item--selected",
  );
  if (variant === "full") {
    return (
      <Typography
        as="button"
        className={className}
        // TODO
        color={selected ? "#E52D2D" : ""}
        onClick={onClick}
      >
        {/* TODO */}
        <Icon className="pizza-menu__filter-icon" fill="#c5cbd1" />
        {item.title}
      </Typography>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {/* TODO */}
      <Icon fill={selected ? "#E52D2D" : "#c5cbd1"} />
    </button>
  );
}
