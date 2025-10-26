import type { CellInterface } from "./cell";

const dirs = [
  [1, 0], 
  [0, 1],
  [1, 1],
  [1, -1],
];

export function checkWin(
  boardCells: CellInterface[],
  clickedCell: CellInterface
) {
  const { x: c, y: r, player } = clickedCell;
  if (!player) return false;

  function countInDir(dr: number, dc: number) {
    let count = 0;
    for (let i = 1; i < 4; i++) {
      const nextR = r + dr * i;
      const nextC = c + dc * i;
      const nextCell = boardCells.find(
        (cell) => cell.x === nextC && cell.y === nextR
      );
      if (nextCell && nextCell.player === player) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }

  for (const [dr, dc] of dirs) {
    const count1 = countInDir(dr, dc);
    const count2 = countInDir(-dr, -dc);
    if (count1 + count2 >= 3) {
      return true;
    }
  }

  return false;
}
