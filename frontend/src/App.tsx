import "./index.css";
import "./App.css";
import Button from "./components/button";
import { CgAdidas, CgAdd } from "react-icons/cg";

function App() {
  return (
    <>
      <main style={{margin: "30px", fontSize: "36px"}}>
        <Button 
          variant="primary" 
          label="Button" 
          leftIcon={<CgAdidas />}
          rightIcon={<CgAdd />}
        />
        <Button 
          variant="primaryOutline" 
          label="Button" 
          leftIcon={<CgAdidas />}
          rightIcon={<CgAdd />}
        />
      </main>
    </>
  );
}

export default App;
