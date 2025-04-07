import { ChangeEvent, Ref } from "react";
import * as styles from "./input.css";

interface InputProps {
  ref?: Ref<HTMLInputElement>;
  type: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  defaultValue?: string | number | undefined;
  fontSize?: string;
}

export default function Input({
  ref,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  defaultValue,
  fontSize,
}: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={styles.input}
      style={{ fontSize: fontSize && fontSize }}
    />
  );
}
