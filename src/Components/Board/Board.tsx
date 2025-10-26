import { useContext, useState } from "react";
import type { Player } from "../Cell/Cell";
import Cell from "../Cell/Cell";
import Marker from "../Marker/Marker";
import { cells, type CellInterface } from "./cell";
import { checkWin } from "./checkWin";
import { WinnerContext } from "../../context/winnerContext";

const playerOneMarker = "/src/assets/images/marker-red.svg";
const playerTwoMarker = "/src/assets/images/marker-yellow.svg";
const cellWidth = 87;

export default function Board() {
  const winnerContext = useContext(WinnerContext);

  const [boardCells, setBoardCells] = useState<CellInterface[]>(cells);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("playerOne");
  const [activeColumn, setActiveColumn] = useState<number | null>(null);

  function handleSetCell(clickedCell: CellInterface) {
    const columnCells = boardCells.filter((cell) => cell.x === clickedCell.x);
    const lowestEmptyCell = [...columnCells]
      .reverse()
      .find((cell) => !cell.player);
    if (!lowestEmptyCell) return;

    const updatedCells = boardCells.map((cell) =>
      cell.x === lowestEmptyCell.x && cell.y === lowestEmptyCell.y
        ? { ...cell, player: currentPlayer }
        : cell
    );

    setBoardCells(updatedCells);

    const placedCell = { ...lowestEmptyCell, player: currentPlayer };

    if (checkWin(updatedCells, placedCell)) {
      winnerContext?.addWin(currentPlayer as "playerOne" | "playerTwo");
      setBoardCells([...cells])
      return;
    }

    handleSwitchPlayer();
  }

  function handleSwitchPlayer() {
    setCurrentPlayer((prev) =>
      prev === "playerOne" ? "playerTwo" : "playerOne"
    );
  }

  function handleOnMouseEnter(x: number) {
    setActiveColumn(x);
  }

  const activeMarkerLeft =
    activeColumn !== null ? activeColumn * cellWidth : null;
  const activeSrc =
    currentPlayer === "playerOne" ? playerOneMarker : playerTwoMarker;

  return (
    <main>
      <Marker activeSrc={activeSrc} activeMarkerLeft={activeMarkerLeft} />

      <div className="grid grid-cols-7 gap-4 p-7 bg-white rounded-2xl border-2 shadow-[0_10px_3px_black]">
        {boardCells.map((cell) => (
          <div
            key={`${cell.x}-${cell.y}`}
            className="cursor-pointer"
            onClick={() => handleSetCell(cell)}
            onMouseEnter={() => handleOnMouseEnter(cell.x)}
            onKeyDown={() => setActiveColumn(cell.x)}
          >
            <Cell cell={cell} currentPlayer={currentPlayer} />
          </div>
        ))}
      </div>
    </main>
  );
}
