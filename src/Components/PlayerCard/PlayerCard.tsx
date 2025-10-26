import { useContext } from "react";
import { WinnerContext } from "../../context/winnerContext";

interface PlayerCardProps {
  player: "playerOne" | "playerTwo";
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const winnerContext = useContext(WinnerContext);

  if (!winnerContext) return null;

  const { playerOneScore, playerTwoScore } = winnerContext;
  const score = player === "playerOne" ? playerOneScore : playerTwoScore;

  const playerImg =
    player === "playerOne"
      ? "/images/player-one.svg"
      : "/images/player-two.svg";
  return (
    <div className="bg-white rounded-2xl border-2 shadow-[0_10px_3px_black] text-center p-10 pl-5 pr-5 relative">
      <img
        className="absolute top-[-30px] left-1/2 translate-x-[-50%]"
        src={playerImg}
        alt="player avatar"
      />
      <h3 className="uppercase font-bold text-2xl">
        {player === "playerOne" ? "player 1" : "player 2"}
      </h3>
      <p className="text-3xl font-bold mt-10">{score}</p>
    </div>
  );
}
