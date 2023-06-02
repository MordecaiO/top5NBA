import PlayerCard from "../PlayerCard/PlayerCard";
import { MainRow } from "../MainRow/MainRow";
import "./App.css";

const teamPrimaryColor = {
  Atlanta: "red",
  Boston: "green",
  Warriors: "yellow",
  Lakers: "purple",
  Pheonix: "orange",
};

function App() {
  return (
    <div className="App">
      <MainRow className="main-row">
        <PlayerCard bgcolor={teamPrimaryColor.Boston} />
        <PlayerCard bgcolor={teamPrimaryColor.Warriors} />
        <PlayerCard bgcolor={teamPrimaryColor.Atlanta} />
        <PlayerCard bgcolor={teamPrimaryColor.Lakers} />
        <PlayerCard bgcolor={teamPrimaryColor.Pheonix} />
      </MainRow>
    </div>
  );
}

export default App;
