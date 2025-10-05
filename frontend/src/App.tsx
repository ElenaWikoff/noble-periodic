import "@/index.css";
import "@/App.css";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { 
  GiMetalPlate as SolidIcon, 
  GiWaterSplash as LiquidIcon, 
  GiSteam as GasIcon,
} from "react-icons/gi";
import { IoSearchSharp as SearchIcon } from "react-icons/io5";
import ButtonToggle from "@/components/button-toggle";
import Input from "@/components/input";
import { useDebounce } from "./hooks/useDebounce";
import ElementCard from "./components/element-card";

const phaseButtons = [
  {
    variant: "solid",
    label: "Solids",
    leftIcon: <SolidIcon />,
    title: "Show solids",
    value: 1,
  },
  {
    variant: "liquid",
    label: "Liquids",
    leftIcon: <LiquidIcon />,
    title: "Show liquids",
    value: 2,
  },
  {
    variant: "gas",
    label: "Gases",
    leftIcon: <GasIcon />,
    title: "Show gases",
    value: 3,
  },
]

function App() {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState(0);
  const [query, setQuery] = useState<string>("")
  const debouncedQuery = useDebounce<string>(query, 500);

  // useEffect(() => {
  //   if (debouncedQuery) {

  //   }
  // }, [debouncedQuery])

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  }

  const handleActive = (value: number) => {
    setPhase(phase === value ? 0 : value);
  }

  return (
    <>
      <main style={{margin: "30px", fontSize: "36px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
        <img src="./src/assets/images/logo-light.png" />
        <ButtonToggle 
          leftIcon={<FaMoon />}
          title="Dark Mode"
          active={active}
          onToggle={() => setActive(!active)}
        />
        {phaseButtons.map((button) => {
          const {value,...props} = button;

          return <ButtonToggle 
                  key={`phase-${value}`}
                  active={phase === value}
                  onToggle={() => handleActive(value)}
                  {...props}
                />;
        })}
        <Input 
          onInput={handleInput}
          icon={<SearchIcon />}
          iconSide="right"
          placeholder="Search"
        />
        <p>Query: {query}</p>
        <p>Debounced: {debouncedQuery}</p>
        <ElementCard 
          name={"Helium"} 
          number={2} 
          mass={4.0026022} 
          symbol={"He"}        
        />
      </main>
    </>
  );
}

export default App;
