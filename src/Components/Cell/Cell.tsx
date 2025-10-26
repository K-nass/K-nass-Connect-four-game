import React from "react";
import type { CellInterface } from "../Board/cell";

interface BackgroundColorPlayers {
  default: string;
  playerOne: string;
  playerTwo: string;
}

const bgColors: BackgroundColorPlayers = {
  default: "bg-[#7945FC]",
  playerOne: "bg-[#FD6585]",
  playerTwo: "bg-[#FFCD68]",
};

interface CellProps {
  cell: CellInterface;
  currentPlayer: Player;
}

export type Player = "playerOne" | "playerTwo" | null;

export default function Cell({ cell }: CellProps) {
  let bgColor = bgColors.default;
  if (cell.player === "playerOne") {
    bgColor = bgColors.playerOne;
  } else if (cell.player === "playerTwo") {
    bgColor = bgColors.playerTwo;
  }
  return (
    <button
      className={`${bgColor} w-[70px] h-[70px] rounded-full border-3 border-t-7 cursor-pointer`}
    ></button>
  );
}
