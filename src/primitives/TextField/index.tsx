import cn from "clsx";

interface ITextFieldProps {
  value?: string;
  error?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (value: string) => void;
}

export default function TextField({
  value,
  error,
  placeholder,
  disabled,
  className,
  onChange,
}: ITextFieldProps) {
  return (
    <div className={cn("text-field", className)}>
      <input
        className={cn("text-field__input", !!error && "text-field__error")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        disabled={disabled}
      />
      {!!placeholder && (
        <span
          className={cn(
            "text-field__placeholder",
            !!error && "text-field__error",
          )}
        >
          {placeholder}
        </span>
      )}
      {error && typeof error === "string" && (
        <span className="text-field__error-label">{error}</span>
      )}
    </div>
  );
}
