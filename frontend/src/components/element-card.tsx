import React from 'react';
import styles from "@/components/element-card.module.css"
import { isValidHexColor } from '@/utils/functions/conditions';

interface ElementCardProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string,
  atomic_number: number,
  atomic_mass: number,
  symbol: string,
  category?: string,
  phase?: string,
  block?: string,
  color?: string,
  selected?: boolean,
  xpos?: number,
  ypos?: number,
  size?: number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const ElementCard: React.FC<ElementCardProps> = ({ 
  name, 
  atomic_number, 
  atomic_mass, 
  symbol, 
  category, 
  phase,
  block,
  color,
  selected,
  xpos,
  ypos,
  size,
  ...restProps
}) => {

  const getColorClass = () => {
    
    if (color && isValidHexColor(color)) {
      return color;
    }
    switch (color) {
      case "category": {
        let tmp = category ? category?.replaceAll(" ", "-") : "";
        if (tmp.startsWith("unknown")) {
          tmp = "unknown";
        }
        return tmp;
      };
      case "phase": return phase ? phase : "";
      case "block": return block ? `block-${block}` : "";
      default: return "";
    }
  }

  return (
    <div 
      className={`${styles["element-card"]} ${styles[getColorClass()]} ${selected ? styles["selected"] : ""}`}
      style={ (ypos !== undefined && xpos !== undefined) ? {gridRow: `${ypos + 1} ${size ? `/ span ${size}` : ""}`, gridColumn: `${xpos + 1} ${size ? `/ span ${size}` : ""}`} : {}}
      {...restProps}
    >
      <div className={styles.number}>{atomic_number}</div>
      <div className={styles.symbol}>{symbol}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.mass}>{atomic_mass.toFixed(3)}</div>
    </div>
  )
}

export default ElementCard;