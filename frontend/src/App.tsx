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
          title="Press Button"
        />
        <Button 
          variant="primaryOutline" 
          label="Button" 
          leftIcon={<CgAdidas />}
          rightIcon={<CgAdd />}
          title="Press Button"
        />
      </main>
    </>
  );
}

export default App;
