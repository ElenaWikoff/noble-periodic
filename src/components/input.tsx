import React, { type ReactNode } from 'react';
import styles from "@/components/input.module.css"

export type InputType = "text" | "number" | "email" | "password";
export type IconSide = "left" | "right";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  type?: InputType,
  value?: string,
  icon?: ReactNode,
  iconSide?: IconSide,
}

const Input: React.FC<InputProps> = ({ 
  type, 
  value, 
  icon, 
  iconSide, 
  onInput, 
  onChange,
  onSubmit,
  ...inputProps
}) => {

  // Handle functions
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => onInput?.(e);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e);
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => onSubmit?.(e);

  return (
    <div className={`${styles["input-wrapper"]} ${iconSide ? styles[`icon-${iconSide}`] : ""}`}>
      <input 
        type={type}
        value={value} 
        onInput={(e) => handleInput(e)}
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => handleSubmit(e)}
        className={`${styles.input}`}
        {...inputProps}
      >
      </input>
      <div className={styles["icon-wrapper"]}>
        {icon}
      </div>
    </div>
  )
}

export default Input;