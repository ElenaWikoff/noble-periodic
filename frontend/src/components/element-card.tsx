import React from 'react';
import styles from "@/components/element-card.module.css"
import { isValidHexColor } from '@/utils/functions/conditions';

interface ElementCardProps {
  name: string,
  number: number,
  mass: number,
  symbol: string,
  category?: string,
  phase?: string,
  block?: string,
  color?: string,
  selected?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const ElementCard: React.FC<ElementCardProps> = ({ 
  name, 
  number, 
  mass, 
  symbol, 
  category, 
  phase,
  block,
  color,
  selected,
  onChange,
}) => {

  const getColorClass = () => {
    if (color && isValidHexColor(color)) {
      return color;
    }
    switch (color) {
      case "category": return category ? category?.replaceAll(" ", "-") : "";
      case "phase": return phase ? phase : "";
      case "block": return block ? `block-${block}` : "";
      default: return "";
    }
  }

  return (
    <div 
      className={`${styles["element-card"]} ${styles[getColorClass()]} ${selected ? styles["selected"] : ""}`}
      onChange={onChange}
    >
      <div className={styles.number}>{number}</div>
      <div className={styles.symbol}>{symbol}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.mass}>{mass.toFixed(3)}</div>
    </div>
  )
}

export default ElementCard;