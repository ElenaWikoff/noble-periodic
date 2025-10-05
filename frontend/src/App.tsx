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
import PeriodTable from "./components/periodic-table";

const phaseButtons = [
  {
    variant: "solid",
    label: "Solids",
    leftIcon: <SolidIcon />,
    title: "Show solids",
    value: "solid",
  },
  {
    variant: "liquid",
    label: "Liquids",
    leftIcon: <LiquidIcon />,
    title: "Show liquids",
    value: "liquid",
  },
  {
    variant: "gas",
    label: "Gases",
    leftIcon: <GasIcon />,
    title: "Show gases",
    value: "gas",
  },
]

function App() {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("");
  const [query, setQuery] = useState<string>("")
  const debouncedQuery = useDebounce<string>(query, 500);

  // useEffect(() => {
  //   if (debouncedQuery) {

  //   }
  // }, [debouncedQuery])

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  }

  const handleActive = (value: string) => {
    setPhase(phase === value ? "" : value);
  }

  return (
    <>
      <main style={{margin: "30px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
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
        <PeriodTable 
          query={query}
          phase={phase}
        />
      </main>
    </>
  );
}

export default App;
