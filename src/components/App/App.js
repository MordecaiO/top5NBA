import PlayerCard from "../PlayerCard/PlayerCard";
import { MainRow } from "../MainRow/MainRow";
import "./App.css";

const team = { primaryColor: "red" };
function App() {
  return (
    <div className="App">
      <MainRow className="main-row">
        <PlayerCard team={team} />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </MainRow>
    </div>
  );
}

export default App;
