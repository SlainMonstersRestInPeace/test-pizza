import IconButton from "@/primitives/IconButton";
import { FormEvent, useMemo, useState } from "react";
import Stepper from "@/primitives/Stepper";

import cn from "clsx";
import RemoveIcon from "@/assets/icons/cross-small.svg";
import TextField from "@/primitives/TextField";
import Button from "@/primitives/Button";
import RadioGroup from "@/primitives/RadioGroup";
import { IRadioGroupItem } from "@/primitives/RadioGroup/types";

import CloseIcon from "@/assets/icons/cross.svg";
import { IOrderItem, PaymentMethod } from "./types";
import PizzaCardTypeIcons from "../PizzaTypeIcons";

interface IOrderForm {
  items: IOrderItem[];
  onClose: () => void;
}

export default function OrderForm({ items, onClose }: IOrderForm) {
  const [internalItems, setInternalItems] = useState(items);

  const [paymentValue, setPaymentValue] = useState<IPaymentValue>({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });

  const total = useMemo(
    () => internalItems.reduce((sum, item) => sum + item.price * item.count, 0),
    [internalItems],
  );

  const onRemove = (id: string) => {
    setInternalItems((items) => items.filter((item) => item.id !== id));
  };

  const onChangeCount = (id: string, value: number) => {
    setInternalItems((items) =>
      items.map((item) => (item.id === id ? { ...item, count: value } : item)),
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log();
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <IconButton onClick={onClose} className="order-form__close">
        <CloseIcon />
      </IconButton>

      <span className="order-form__title">Ваш заказ</span>
      <div className="order-form__items">
        <div className="order-form__separator" />
        {internalItems.map((item) => (
          <OrderItem
            key={item.title}
            item={item}
            onRemove={() => onRemove(item.id)}
            onChangeCount={(value) => onChangeCount(item.id, value)}
            separator
          />
        ))}
      </div>
      <div className="order-form__total-layout">
        <span className={cn("order-form__total", "order-form__field-label")}>
          Сумма заказа:
        </span>
        <span className="order-form__total-sum">{total} руб.</span>
      </div>
      <OrderPaymentForm value={paymentValue} onChange={setPaymentValue} />
      <Button className="order-form__submit" type="submit">
        Оформить заказ
      </Button>
      <p className="order-form__legal">
        Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
        конфиденциальности
      </p>
    </form>
  );
}

interface IOrderItemProps {
  item: IOrderItem;
  onChangeCount: (value: number) => void;
  onRemove: () => void;
  separator?: boolean;
}

function OrderItem({
  item,
  onChangeCount,
  onRemove,
  separator,
}: IOrderItemProps) {
  return (
    <div
      className={cn("order-form__item", separator && "order-form__separator")}
    >
      <IconButton className="order-form__remove-item" onClick={onRemove}>
        {/* TODO */}
        <RemoveIcon fill="#A9A9A9" />
      </IconButton>
      <OrderItemDetail item={item} />
      <div className="order-form__right-layout">
        <Stepper
          value={item.count}
          onChange={onChangeCount}
          min={1}
          max={99}
          className="order-form__item-count"
        />
      </div>
      <span className="order-form__item-price">{item.price} руб</span>
    </div>
  );
}

function OrderItemDetail({ item }: { item: IOrderItem }) {
  return (
    <div className="order-form__item-detail">
      <div className="order-form__image-container">
        <PizzaCardTypeIcons
          types={item.types}
          className="order-form__pizza-types"
          iconClassName="order-form__pizza-type-icon"
        />
        <img src={item.imageUrl} className="order-form__item-image" />
      </div>
      <div className="order-form__item-info">
        <span
          className={cn("order-form__item-title", "order-form__field-label")}
        >
          {item.title}
        </span>
        <span className="order-form__item-size">{item.size} см</span>
      </div>
    </div>
  );
}

interface IPaymentValue {
  name: string;
  phone: string;
  address: string;
  paymentMethod: PaymentMethod | "";
}

interface IOrderPaymentFormProps {
  value: IPaymentValue;
  onChange: (value: IPaymentValue) => void;
}

function OrderPaymentForm({ value, onChange }: IOrderPaymentFormProps) {
  const onChangeName = (name: string) => {
    onChange({ ...value, name });
  };

  const onChangePhone = (phone: string) => {
    onChange({ ...value, phone });
  };

  const onChangeAddress = (address: string) => {
    onChange({ ...value, address });
  };

  const onChangePaymentMethod = (paymentMethod: PaymentMethod) => {
    onChange({ ...value, paymentMethod });
  };

  const paymentMethods: IRadioGroupItem[] = [
    { label: "Оплата наличными или картой курьеру", value: "doordash" },
    { label: "Оплата картой онлайн на сайте", value: "online" },
  ];

  return (
    <div className="order-form__payment">
      <div className="order-form__contact">
        <span
          className={cn("order-form__contact-title", "order-form__field-label")}
        >
          Контакты
        </span>
        <div className="order-form__contact-first-row">
          <TextField
            value={value.name}
            onChange={onChangeName}
            placeholder="Ваше имя"
          />
          <TextField
            value={value.phone}
            onChange={onChangePhone}
            placeholder="Телефон"
          />
        </div>
        <TextField
          value={value.address}
          onChange={onChangeAddress}
          placeholder="Адрес доставки"
        />
      </div>
      <RadioGroup
        value={value.paymentMethod}
        label="Способ оплаты"
        onChange={onChangePaymentMethod as any}
        items={paymentMethods}
        className="order-form__payment-method"
      />
    </div>
  );
}
