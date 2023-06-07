import PlayerCard from "./PlayerCard";
import { MainRow } from "./MainRow";
import "./App.css";
import { players } from "./players";

function App() {
  return (
    <div className="App">
      <MainRow className="main-row">
        {players.map((player) => {
          return (
            <PlayerCard
              bgcolor={player.teamPrimaryColor}
              trimcolor={player.teamSecondaryColor}
              image={player.image}
              name={player.player}
            />
          );
        })}
      </MainRow>
    </div>
  );
}

export default App;
