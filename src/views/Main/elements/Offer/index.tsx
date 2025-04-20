import Button from "@/primitives/Button";
import Typography from "@/primitives/Typography";
import cn from "clsx";

export default function Offer() {
  return (
    <div className={cn("content-wrapper", "offer")}>
      <div className={cn("offer__content", "content")}>
        <div className="offer__splash" />
        <div className="offer__offer">
          <Typography variant="Heading-1">Пицца на заказ</Typography>
          <Typography variant="Body-1" className="offer__description">
            Бесплатная и быстрая доставка за час в любое удобное для вас время
          </Typography>
        </div>
        <Button size="large" className="offer__go">
          ВЫБРАТЬ ПИЦЦУ
        </Button>
      </div>
    </div>
  );
}
