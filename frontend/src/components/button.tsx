import React, { type ReactNode } from 'react';
import styles from "@/components/button.module.css"

interface ButtonProps {
  label?: string,
  variant: string,
  leftIcon?: ReactNode,
  rightIcon?: ReactNode,
  title?: string,
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = "primary", 
  leftIcon, 
  rightIcon, 
  title,
}) => {

  return (
    <button 
      title={title ? title : label} 
      className={`${styles.btn} ${styles[`btn-${variant}`]}`}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  )
}

export default Button;