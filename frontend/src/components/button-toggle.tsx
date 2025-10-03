import React, { type ReactNode } from 'react';
import styles from "./button.module.css"

interface ButtonToggleProps {
  label?: string,
  variant?: string,
  leftIcon?: ReactNode,
  rightIcon?: ReactNode,
  title?: string,
  active?: boolean,
  onToggle?: () => void,
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ 
  label, 
  variant = "default",
  leftIcon, 
  rightIcon, 
  title,
  active,
  onToggle,
}) => {

  const handleToggle = () => onToggle?.();

  return (
    <button 
      title={title ? title : label} 
      className={`${styles["btn-toggle"]} ${styles[`btn-toggle-${variant}`]} ${active ? styles.active : ""}`}
      style={{padding: `${!label ? "7.5px" : "0px 5px"}`}}
      onClick={() => handleToggle()}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  )
}

export default ButtonToggle;