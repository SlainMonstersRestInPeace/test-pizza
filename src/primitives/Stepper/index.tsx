import IconButton from "@/primitives/IconButton";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";

import cn from "clsx";

interface IProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  initial?: number;
  step?: number;
  className?: string;
}

export default function Stepper({
  value,
  min,
  max,
  step = 1,
  onChange,
  className,
}: IProps) {
  const inc = () => {
    const newValue = value + step < max ? value + step : max;
    onChange(newValue);
  };
  const dec = () => {
    const newValue = value - step > min ? value - step : min;
    onChange(newValue);
  };
  return (
    <div className={cn("stepper", className)}>
      <IconButton
        className="stepper__dec"
        disabled={value <= min}
        onClick={dec}
      >
        <MinusIcon />
      </IconButton>
      <input
        className="stepper__input"
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <IconButton
        className="stepper__inc"
        disabled={value >= max}
        onClick={inc}
      >
        <PlusIcon />
      </IconButton>
    </div>
  );
}
