import { PropsWithChildren } from "react";
import cn from "clsx";

interface IProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function IconButton({
  onClick,
  children,
  className,
  disabled,
}: PropsWithChildren<IProps>) {
  return (
    <button
      className={cn("icon-button", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
