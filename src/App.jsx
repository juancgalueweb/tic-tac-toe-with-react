import confetti from 'canvas-confetti';
import { useState } from 'react';
import { BoardGame } from './components/BoardGame.jsx';
import { Square } from './components/Square.jsx';
import { WinnerModal } from './components/WinnderModal.jsx';
import { TURNS } from './constants/constants.js';
import { checkEndGame, checkWinnerFrom } from './logic/board.js';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null es no hay ganador
  const [winner, setWinner] = useState(null);

  function updateBoard(index) {
    //No actualizamos la posición si previamente tiene un valor, o si hay un ganador
    if (board[index] || winner) return;
    //Actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Revisamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti({
        particleCount: 150,
        spread: 180,
      });
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Comenzar de nuevo</button>
      <BoardGame board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
