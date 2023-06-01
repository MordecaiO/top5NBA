import PlayerCard from "../PlayerCard/PlayerCard";
import { MainRow } from "../MainRow/MainRow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainRow className="main-row">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </MainRow>
    </div>
  );
}

export default App;
