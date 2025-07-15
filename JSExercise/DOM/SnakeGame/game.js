const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const rows = canvas.height / box;
const cols = canvas.width / box;

let snake = [
  { x: 9 * box, y: 10 * box }
];

let direction = "RIGHT"; // Default direction
let food = spawnFood();
let score = 0;

// Remove key listener (no manual input)
// document.addEventListener("keydown", changeDirection);

function spawnFood() {
  return {
    x: Math.floor(Math.random() * cols) * box,
    y: Math.floor(Math.random() * rows) * box
  };
}

function followFood() {
  const head = snake[0];

  if (food.x < head.x && direction !== "RIGHT") direction = "LEFT";
  else if (food.x > head.x && direction !== "LEFT") direction = "RIGHT";
  else if (food.y < head.y && direction !== "DOWN") direction = "UP";
  else if (food.y > head.y && direction !== "UP") direction = "DOWN";
}

function draw() {
  // Clear canvas
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "#0f0" : "#0b0";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Draw food
  ctx.fillStyle = "#f00";
  ctx.fillRect(food.x, food.y, box, box);

  // Follow food
  followFood();

  // Move snake head
  let head = { x: snake[0].x, y: snake[0].y };
  if (direction === "UP") head.y -= box;
  else if (direction === "DOWN") head.y += box;
  else if (direction === "LEFT") head.x -= box;
  else if (direction === "RIGHT") head.x += box;

  // Wall collision
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height
  ) {
    gameOver();
    return;
  }

  // Self collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver();
      return;
    }
  }

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").innerText = score;
    food = spawnFood();
  } else {
    snake.pop(); // move forward
  }

  snake.unshift(head); // add new head
}

function gameOver() {
  clearInterval(gameLoop);
  alert("Game Over! Your Score: " + score);
  location.reload(); // restart
}

let gameLoop = setInterval(draw, 150);
