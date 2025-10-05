import React, { useEffect, useState } from 'react';
import styles from "@/components/periodic-table.module.css"
import ElementCard from './element-card';

interface PeriodicTableProps {
  query: string,
  phase: string, 
  isWide?: boolean,
}

interface Element {
  name: string,
  atomic_number: number,
  atomic_mass: number,
  symbol: string,
  category: string,
  phase: string,
  block: string,
  period: number,
  group: number,
  xpos: number,
  ypos: number,
  wxpos: number,
  wypos: number,
}

const PeriodTable: React.FC<PeriodicTableProps> = ({ 
  query,
  phase,
  isWide,
}) => {
    const [elements, setElements] = useState<Element[]>();

    useEffect(() => {
        fetch("src/utils/data/elements_essentials.json")
        .then((response) => response.json())
        .then((data) => setElements(data))
    }, [])

  return (
    <section 
      className={styles["container"]}
    >
      <div className={!isWide ? styles["grid"] : styles["grid-wide"]}>
        {elements && elements.map((elem, index) => {
          const {name, atomic_number, symbol, xpos, ypos, ...rest} = elem;
          return <ElementCard 
            key={`elem-${index}`}
            name={name}
            atomic_number={atomic_number}
            symbol={symbol}
            selected={query === symbol}
            color={phase ? phase : "category"}
            xpos={xpos}
            ypos={ypos}
            {...rest}
          />;
        })}
      </div>
    </section>
  )
}

export default PeriodTable;