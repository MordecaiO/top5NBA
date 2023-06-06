import PlayerCard from "../PlayerCard/PlayerCard";
import { MainRow } from "../MainRow/MainRow";
import "./App.css";
import { teamPrimaryColor, teamSecondaryColor } from "../colors";

function App() {
  return (
    <div className="App">
      <MainRow className="main-row">
        <PlayerCard
          bgcolor={teamPrimaryColor.Boston}
          trimcolor={teamSecondaryColor.Boston}
        />
        <PlayerCard
          bgcolor={teamPrimaryColor.Warriors}
          trimcolor={teamSecondaryColor.Warriors}
        />
        <PlayerCard
          bgcolor={teamPrimaryColor.Atlanta}
          trimcolor={teamSecondaryColor.Atlanta}
        />
        <PlayerCard
          bgcolor={teamPrimaryColor.Lakers}
          trimcolor={teamSecondaryColor.Lakers}
        />
        <PlayerCard
          bgcolor={teamPrimaryColor.Pheonix}
          trimcolor={teamSecondaryColor.Pheonix}
        />
      </MainRow>
    </div>
  );
}

export default App;
