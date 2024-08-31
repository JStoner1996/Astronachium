import "./App.css";
import Character from "./Characters/Character";
import { BloodMage } from "./Utils/CharacterList";

function App() {
  return (
    <>
      <Character character={BloodMage}></Character>
    </>
  );
}

export default App;
