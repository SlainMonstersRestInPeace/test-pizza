import React from "react";
import { ButtonSizes } from "./types";
import cn from "clsx";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSizes;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const buttonSizeMap: Record<ButtonSizes, string> = {
  large: "button--large",
  medium: "button--medium",
  small: "button--small",
  tiny: "button--tiny",
};

export default function Button({
  children,
  size = "medium",
  onClick,
  className,
  type,
  disabled,
}: IProps) {
  return (
    <button
      className={cn("button", buttonSizeMap[size], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className="button__overlay" />
      <span className="button__label">{children}</span>
    </button>
  );
}
