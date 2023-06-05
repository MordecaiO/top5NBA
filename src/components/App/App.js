import PlayerCard from "../PlayerCard/PlayerCard";
import { MainRow } from "../MainRow/MainRow";
import "./App.css";

const teamPrimaryColor = {
  Atlanta: "#C8102E",
  Boston: "#007A33",
  Warriors: "#1D428A",
  Lakers: "#552583",
  Pheonix: "#1D1160",
};

const teamSecondaryColor = {
  Atlanta: "##FDB927",
  Boston: "##BA9653",
  Warriors: "#FFC72C",
  Lakers: "#FDB927",
  Pheonix: "#E56020",
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
