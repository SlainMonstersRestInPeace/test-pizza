import OrderCard from "@/components/OrderCard";
import Typography from "@/primitives/Typography";

import cn from "clsx";
import { orderCardItems } from "./data";

export default function Order() {
  return (
    <div className={cn("order", "content-wrapper")}>
      <div className={cn("order__content", "content")}>
        <Typography variant="Heading-2" as="div">
          Доставка и оплата
        </Typography>
        <div className="order__cards-wrapper">
          {orderCardItems.map(({ title, description, Icon }) => (
            <OrderCard
              title={title}
              description={description}
              icon={<Icon className="order-card__icon" />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
