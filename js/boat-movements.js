function canTravelTo(gameMatrix, fromRow, fromColumn, toRow, toColumn) {
  // Write your code here
  let rows = gameMatrix.length, cols = gameMatrix[0].length;

  // out of bounds
  if (toRow < 0 || toColumn < 0 || toRow >= rows || toColumn >= cols) return false;
  // destination = land
  if (!gameMatrix[toRow][toColumn]) return false;

  // out of reach
  let [travelX, travelY] = [toColumn - fromColumn, toRow - fromRow];
  let total = Math.abs(travelX) + Math.abs(travelY);

  if (total > 2) return false;
  if (total == 1) return true;

  return toColumn - fromColumn == 2 && gameMatrix[fromRow][fromColumn + 1];
}

const gameMatrix = [
  [false, true,  true,  false, false, false],
  [true,  true,  true,  false, false, false],
  [true,  true,  true,  true,  true,  true],
  [false, true,  true,  false, true,  true],
  [false, true,  true,  true,  false, true],
  [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds