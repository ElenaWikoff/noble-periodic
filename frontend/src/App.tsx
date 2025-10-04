import "@/index.css";
import "@/App.css";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { 
  GiMetalPlate as SolidIcon, 
  GiWaterSplash as LiquidIcon, 
  GiSteam as GasIcon,
} from "react-icons/gi";
import ButtonToggle from "@/components/button-toggle";

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

  const handleActive = (value: number) => {
    setPhase(phase === value ? 0 : value);
  }

  return (
    <>
      <main style={{margin: "30px", fontSize: "36px"}}>
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
      </main>
    </>
  );
}

export default App;
