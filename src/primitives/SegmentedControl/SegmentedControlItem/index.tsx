import Typography from "@/primitives/Typography";
import cn from "clsx";

interface IProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: () => void;
}

export default function SegmentedControlItem({
  label,
  checked,
  onChange,
  value,
}: IProps) {
  return (
    <div
      className={cn(
        "segmented-control__item",
        checked && "segmented-control__item--selected",
      )}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="segmented-control__input"
      />
      <Typography as="label" className="segmented-control__item-label">
        {label}
      </Typography>
    </div>
  );
}
