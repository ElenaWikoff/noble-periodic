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

interface ElementFull {
  name: string,
  symbol: string,
  atomic_number: number,
  atomic_mass: number,
  category: string,
  electron_configuration: string,
  phase: string,
  block: string,
  density: number,
  melting_point: number,
  boiling_point: number,
  discovered_by: string,
  named_by: string,
  appearance: string,
  summary: string,
  source: string,
}

const PeriodTable: React.FC<PeriodicTableProps> = ({ 
  query,
  phase,
  isWide,
}) => {
    const [elements, setElements] = useState<Element[]>();
    const [elementsFull, setElementsFull] = useState<ElementFull[]>();
    const [selected, setSelected] = useState<ElementFull>();

    useEffect(() => {
        fetch("src/utils/data/elements_essentials.json")
        .then((response) => response.json())
        .then((data) => setElements(data));

        fetch("src/utils/data/elements_full.json")
        .then((response) => response.json())
        .then((data) => setElementsFull(data));
    }, [])

    const handleSelected = (value: number) => {
      if (elementsFull) {
        setSelected(elementsFull[value]);
      }
    }

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
            onMouseOver={() => handleSelected(atomic_number - 1)}
            {...rest}
          />;
        })}
        {selected && 
          <article className={styles["element-details"]}>
            <ElementCard 
              name={selected.name}
              atomic_number={selected.atomic_number}
              symbol={selected.symbol}
              atomic_mass={selected.atomic_mass}
              category={selected.category}
              color={phase ? phase : "category"}
              xpos={0}
              ypos={0}
              size={2}
            />
            <div className={styles.info}>
              {selected.source 
                ? <a className={styles.name} target="_blank" href={selected.source}>{selected.name}</a>
                : <p>{selected.name}</p>
              }
              {selected.category ? <p><strong>Category:</strong> {selected.category}</p> : ""}
              {selected.electron_configuration ? <p className={styles.config}><strong>Config:</strong> {selected.electron_configuration}</p> : ""}
              {selected.melting_point ? <p><strong>Melting Point:</strong> {selected.melting_point} K</p> : <p><strong>Melting Point:</strong> Unknown</p>}
              {selected.boiling_point ? <p><strong>Boiling Point:</strong> {selected.boiling_point} K</p> : <p><strong>Boiling Point:</strong> Unknown</p>}
            </div>
          </article>
        }
      </div>
    </section>
  )
}

export default PeriodTable;