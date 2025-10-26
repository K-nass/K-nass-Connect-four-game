import type { Player } from "../Cell/Cell";

const columns = 7;
const rows = 6;

export interface CellInterface {
  x: number;
  y: number;
  player: Player;
  isDropping: boolean;
}

export const cells: CellInterface[] = Array.from({
  length: rows * columns,
}).map((_, i) => {
  return {
    x: i % columns,
    y: Math.floor(i / columns),
    player: null,
    isDropping: false,
  };
});
