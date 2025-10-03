import "./index.css";
import "./App.css";
import { FaMoon } from "react-icons/fa";
import ButtonToggle from "./components/button-toggle";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <main style={{margin: "30px", fontSize: "36px"}}>
        <ButtonToggle 
          leftIcon={<FaMoon />}
          title="Dark Mode"
          active={active}
          onToggle={() => setActive(!active)}
        />
      </main>
    </>
  );
}

export default App;
