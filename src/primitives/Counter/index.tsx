import Typography from "@/primitives/Typography";
import cn from "clsx";

interface IProps {
  counter: number;
  className?: string;
}

export default function Counter({ counter, className }: IProps) {
  return (
    <div className={cn("counter", className)}>
      <Typography color="#FFFFFF">{counter}</Typography>
    </div>
  );
}
