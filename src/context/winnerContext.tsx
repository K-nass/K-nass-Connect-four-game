import { createContext, useState } from "react";

interface WinnerContextType {
  playerOneScore: number;
  playerTwoScore: number;
  addWin: (player: "playerOne" | "playerTwo") => void;
}

export const WinnerContext = createContext<WinnerContextType | undefined>(
  undefined
);

export function WinnerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  function addWin(player: "playerOne" | "playerTwo") {
    if (player === "playerOne") setPlayerOneScore((prev) => prev + 1);
    else setPlayerTwoScore((prev) => prev + 1);
  }

  return (
    <WinnerContext.Provider value={{ playerOneScore, playerTwoScore, addWin }}>
      {children}
    </WinnerContext.Provider>
  );
}
