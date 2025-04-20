import { useMediaQuery } from "react-responsive";
import Button from "@/primitives/Button";
import Typography from "@/primitives/Typography";
import { MEDIA_SCREEN_MOBILE } from "@/theme/adaptive";
import { useEffect, useRef, useState } from "react";
import cn from "clsx";
import CarrotIcon from "@/assets/icons/carrot.svg";
import CheeseIcon from "@/assets/icons/cheese.svg";
import PepperIcon from "@/assets/icons/pepper.svg";
import MeatIcon from "@/assets/icons/meat.svg";
import { InternalSVG, PizzaSize, PizzaType } from "@/types";
import SegmentedControl from "@/primitives/SegmentedControl";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  sizeVariants: PizzaSize[];
  price: number;
  onOrder?: () => void;
  types: PizzaType[];
}

export default function PizzaCard({
  imageUrl,
  title,
  description,
  sizeVariants,
  price,
  onOrder,
  types,
}: IProps) {
  const [size, setSize] = useState<PizzaSize>("20");
  const isMobile = useMediaQuery({ query: MEDIA_SCREEN_MOBILE });
  const Info = <PizzaCardInfo title={title} description={description} />;
  return (
    <div className="pizza-card">
      <PizzaCardTypeIcons types={types} />
      <div className="pizza-card__main">
        <PizzaImage src={imageUrl} size={size} />
        {!isMobile && Info}
      </div>
      <div className="pizza-card__controls">
        {isMobile && Info}
        <SegmentedControl
          onChange={setSize as any}
          title="Размер, см:"
          value={size}
          valueVariants={sizeVariants}
          className="pizza-card__size-select"
        />
        <PizzaCardFooter
          price={price}
          onOrder={onOrder}
          variant={isMobile ? "compact" : "full"}
        />
      </div>
    </div>
  );
}

const pizzaTypesIconMap: Record<PizzaType, InternalSVG> = {
  spice: PepperIcon,
  cheese: CheeseIcon,
  meat: MeatIcon,
  vegan: CarrotIcon,
};

function PizzaCardTypeIcons({ types }: { types: PizzaType[] }) {
  return (
    <div className="pizza-card__type_icons">
      {types.map((type) => {
        const Icon = pizzaTypesIconMap[type];
        return <Icon fill="#c5cbd1" className="pizza-card__type-icon" />;
      })}
    </div>
  );
}

interface IPizzaCardFooterProps {
  price: number;
  onOrder?: () => void;
  variant: "compact" | "full";
}

function PizzaCardFooter({ price, onOrder, variant }: IPizzaCardFooterProps) {
  const priceTitle = `от ${price} руб.`;
  return (
    <div className="pizza-card__footer">
      <Typography className="pizza-card__price">{priceTitle}</Typography>
      <Button onClick={onOrder} className="pizza-card__order-button">
        {variant === "compact" ? priceTitle : "ЗАКАЗАТЬ"}
      </Button>
    </div>
  );
}

interface IPizzaCardInfoProps {
  title: string;
  description: string;
}

function PizzaCardInfo({ title, description }: IPizzaCardInfoProps) {
  return (
    <div className="pizza-card__info">
      <Typography variant="Heading-4" className="pizza-card__pizza-name">
        {title}
      </Typography>
      {/* TODO */}
      <Typography variant="Body-3" color="#848A9A">
        {description}
      </Typography>
    </div>
  );
}

const pizzaStyleSizeMap: Record<PizzaSize, string> = {
  20: "pizza-card__image--small",
  30: "pizza-card__image--medium",
  40: "pizza-card__image--large",
};

const sizesArray: PizzaSize[] = ["20", "30", "40"];

const largeCn = cn("pizza-card__pizza-border", "pizza-card__size--large");
const mediumCn = cn("pizza-card__pizza-container", "pizza-card__size--medium");
const smallCn = cn("pizza-card__pizza-container", "pizza-card__size--small");

function PizzaImage({ src, size }: { src: string; size: PizzaSize }) {
  const ref = useRef<PizzaSize>(size);
  useEffect(() => {
    ref.current = size;
  }, [size]);

  const smaller = Math.min(+size, +ref.current);

  return (
    <div className="pizza-card__image-container">
      <div className={largeCn}>
        <div className={mediumCn} />
        <div className={smallCn} />
        {sizesArray.map((s) => {
          const isSmaller = +s === smaller;
          const isBeforePrevious = s !== size && s !== ref.current;
          const isVisible = s === size || isSmaller;
          return (
            <img
              src={src}
              className={cn(
                "pizza-card__image",
                pizzaStyleSizeMap[s],
                isVisible && "pizza-card__image--visible",
              )}
              style={{
                transition: isSmaller || isBeforePrevious ? "none" : "",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
