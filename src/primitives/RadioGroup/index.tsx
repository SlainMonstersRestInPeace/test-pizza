import RadioButton from "@/primitives/RadioButton";
import { IRadioGroupItem } from "./types";
import cn from "clsx";

interface IRadioGroupProps {
  label: string;
  value: string;
  items: IRadioGroupItem[];
  onChange: (value: string) => void;
  className?: string;
}

export default function RadioGroup({
  value,
  items,
  label,
  onChange,
  className,
}: IRadioGroupProps) {
  return (
    <div className={cn("radio-group", className)}>
      <label className="radio-group__label">{label}</label>
      <div className="radio-group__items">
        {items.map((item) => (
          <RadioButton
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            checked={value === item.value}
            onChange={() => onChange(item.value)}
          />
        ))}
      </div>
    </div>
  );
}
