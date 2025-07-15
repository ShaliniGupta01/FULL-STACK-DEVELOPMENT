document.addEventListener("DOMContentLoaded", () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;
  let scores = {
    player: 0,
    computer: 0,
    ties: 0,
  };

  const boardElement = document.getElementById("board");
  const cell = document.querySelectorAll(".cell");
  const statusElement = document.getElementById("status");
  const restartBtn = document.getElementById("restart-btn");
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  const tiesElement = document.getElementById("ties");

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //Columns
    [0, 4, 8],
    [2, 4, 6],
  ];

  cell.forEach((cell) => {
    cell.addEventListener("click", () => handleCellClick(cell));
  });
  restartBtn.addEventListener("click", restartGame);

  function handleCellClick(cell) {
    const index = cell.getAttribute("data-index");
    if (board[index] !== "" || !gameActive) {
      return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("x");

    if (checkWin()) {
      endGame(false);
      return;
    }

    if (checkDraw()) {
      endGame(true);
      return;
    }

    currentPlayer = "O";
    statusElement.textContent = "Computer's turn (O)";
    setTimeout(computerMove, 500);
  }

  function computerMove() {
    if (!gameActive) return;
    const bestMove = findBestMove();
    board[bestMove] = currentPlayer;
    cell[bestMove].textContent = currentPlayer;
    cell[bestMove].classList.add("o");
    if (checkWin()) {
      endGame(false);
      return;
    }

    if (checkDraw()) {
      endGame(true);
      return;
    }

    currentPlayer = "X";
    statusElement.textContent = "Your  turn (X)";
  }

  function findBestMove() {
    //try to win
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "O";
        if (checkWin()) {
          board[i] = "";
          return i;
        }
        board[i] = "";
      }
    }

    //block player win
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "X";
        if (checkWin()) {
          board[i] = "";
          return i;
        }
        board[i] = "";
      }
    }

    //choose random move
    //try to take center
    if (board[4] === "") {
      return 4;
    }

    //try to take corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter((index) => board[index] === "");
    if (availableCorners.length > 0) {
      return availableCorners[
        Math.floor(Math.random() * availableCorners.length)
      ];
    }

    //take any available edge
    const edges = [1, 3, 5, 7];
    const availableEdges = edges.filter((index) => board[index] === "");
    if (availableEdges.length > 0) {
      return availableEdges[Math.floor(Math.random() * availableEdges.length)];
    }

    //take any available spot
    const availableSpots = board
      .map((cell, index) => (cell === "" ? index : null))
      .filter((cell) => cell !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  function checkWin() {
    return winningCombinations.some((combination) => {
      return combination.every((index) => {
        return board[index] === currentPlayer;
      });
    });
  }
  function checkDraw() {
    return board.every((cell) => cell !== "");
  }

  function endGame(isDraw) {
    gameActive = false;
    restartBtn.classList.remove("hidden");
    if (isDraw) {
      statusElement.textContent = "It's a draw!";
      scores.ties++;
      tiesElement.textContent = scores.ties;
    } else {
      statusElement.textContent = `${currentPlayer} wins!`;
      if (currentPlayer === "X") {
        scores.player++;
        playerScoreElement.textContent = scores.player;
      } else {
        scores.computer++;
        computerScoreElement.textContent = scores.computer;
      }
    }
    updateScores();
  }

  function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    cell.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o");
    });
    statusElement.textContent = "Your turn (X)";
    restartBtn.classList.add("hidden");
  }
});
