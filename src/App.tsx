import Board from "./Components/Board/Board";
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import { WinnerContextProvider } from "./context/winnerContext";

export default function App() {
  return (
    <WinnerContextProvider>
      <div className="bg-[#7945FC] min-h-screen flex items-center justify-center gap-20">
        <PlayerCard player="playerOne" />
        <Board />
        <PlayerCard player="playerTwo" />
      </div>
    </WinnerContextProvider>
  );
}
