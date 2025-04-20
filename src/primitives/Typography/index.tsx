import React from "react";
import { TypographyVariants } from "./types";
import cn from "clsx";

interface IProps {
  variant?: TypographyVariants;
  children?: React.ReactNode;
  fontStyle?: "normal" | "italic";
  as?: string;
  // TODO вынести цвета в тему
  color?: string;
  className?: string;
  onClick?: () => void;
}

const typographyVariantMap: Record<TypographyVariants, string> = {
  "Heading-1": "typography--heading-extra",
  "Heading-2": "typography--heading-large",
  "Heading-3": "typography--heading-medium",
  "Heading-4": "typography--heading-small",
  "Heading-5": "typography--heading-tiny",
  "Body-1": "typography--body-large",
  "Body-2": "typography--body-medium",
  "Body-3": "typography--body-small",
};

export default function Typography({
  children,
  variant = "Body-2",
  fontStyle = "normal",
  as = "span",
  color,
  className,
  onClick,
}: IProps) {
  return React.createElement(as, {
    className: cn(
      variant && typographyVariantMap[variant],
      `typography--${fontStyle}`,
      className,
    ),
    children,
    style: { color },
    onClick,
  });
}
