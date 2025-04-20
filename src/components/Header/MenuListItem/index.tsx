import React from "react";

import Typography from "@/primitives/Typography";
import Counter from "@/primitives/Counter";
import { InternalSVG } from "@/types";

import cn from "clsx";

interface IProps {
  Icon: InternalSVG;
  primary: string | React.ReactElement;
  secondary?: string;
  counter?: number;
  onClick?: () => void;
  compact?: boolean;
}

export default function MenuListItem({
  primary,
  secondary,
  counter,
  Icon,
  onClick,
  compact,
}: IProps) {
  return (
    <div
      className={cn("menu-list-item", compact && "menu-list-item__compact")}
      onClick={onClick}
    >
      <div className="menu-list-item__icon-wrapper">
        <Icon className="menu-list-item__icon" />
        {!!counter && (
          <Counter counter={counter} className="menu-list-item__counter" />
        )}
      </div>
      <div className="menu-list-item__content">
        {typeof primary === "string" ? (
          <Typography
            variant="Heading-5"
            as="div"
            className="menu-list-item__title"
          >
            {primary}
          </Typography>
        ) : (
          primary
        )}
        {!!secondary && (
          <Typography variant="Body-3" as="div" color="#848A9A">
            {secondary}
          </Typography>
        )}
      </div>
    </div>
  );
}
