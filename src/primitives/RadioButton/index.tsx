interface IRadioButtonProps {
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: () => void;
}

export default function RadioButton({
  value,
  label,
  checked,
  disabled,
  onChange,
}: IRadioButtonProps) {
  return (
    <div className="radio-button">
      <input
        type="radio"
        className="radio-button__input"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <div className="radio-button__style" />
      <label className="radio-button__label" onClick={onChange}>
        {label}
      </label>
    </div>
  );
}
