import { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleMove = (row: number, col: number) => {
    
    if (board[row][col]) return;

    const updatedBoard = board.map((boardRow, rowIdx) =>
      rowIdx === row
        ? boardRow.map((cell, colIdx) =>
            colIdx === col ? currentPlayer : cell,
          )
        : boardRow,
    );

    setBoard(updatedBoard);
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const checkWinnerOrDraw = () => {
    // horizontal wins
    for (const row of board) {
      if (row[0] && row[0] === row[1] && row[1] === row[2]) {
        return row[0];
      }
    }

    // vertical wins
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]
      ) {
        return board[0][col];
      }
    }

    // diagonal wins
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }

    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }

    // draw
    const isDraw = board.every((row) =>
      row.every((cell) => cell === "X" || cell === "O"),
    );

    return isDraw ? "Draw" : null;
  };

  const gameStatus = checkWinnerOrDraw();

  const resetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
  };

  return (
    <div>
      <h2>
        {gameStatus
          ? gameStatus === "Draw"
            ? "Draw"
            : `${gameStatus} wins`
          : `${currentPlayer}'s turn`}
      </h2>

      <div className="board">
        {board.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              className="cell"
              onClick={() => handleMove(rowIdx, colIdx)}
            >
              {cell}
            </div>
          )),
        )}
      </div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
