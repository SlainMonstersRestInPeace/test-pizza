import Typography from "@/primitives/Typography";
import cn from "clsx";
import { useSegmentedControlIndicator } from "./useSegmentedControlIndicator";
import SegmentedControlItem from "./SegmentedControlItem";

interface IProps {
  value: string;
  valueVariants: string[];
  title: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SegmentedControl({
  value,
  valueVariants,
  title,
  onChange,
  className,
}: IProps) {
  const { refContainer, width, left, height } =
    useSegmentedControlIndicator(value);
  return (
    <div className={cn("segmented-control", className)}>
      <Typography as="div">{title}</Typography>
      <div ref={refContainer} className="segmented-control__items">
        {!!width && (
          <span
            className={cn("segmented-control__indicator")}
            style={{ width, left, height }}
          />
        )}
        {valueVariants.map((variant) => (
          <SegmentedControlItem
            key={variant}
            label={variant}
            value={variant}
            checked={value === variant}
            onChange={() => onChange(variant)}
          />
        ))}
      </div>
    </div>
  );
}
