import { WINNER_POSITIONS } from '../constants/constants.js'

export function checkWinnerFrom (boardToCheck) {
  // Revisamos todas las combinaciones ganadoras para ver quién ganó
  for (const position of WINNER_POSITIONS) {
    const [a, b, c] = position
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // No no hay ganador
  return null
}

export function checkEndGame (newBoard) {
  return newBoard.every(square => square !== null)
}
