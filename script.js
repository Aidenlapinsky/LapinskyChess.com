const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Game settings
const gridSize = 20;
const cellSize = canvas.width / gridSize; // Calculate cell size based on canvas width
let snake = [
    { x: gridSize / 2, y: gridSize / 2 },
];
let apple = {
    x: getRandomInt(gridSize),
    y: getRandomInt(gridSize),
};
let speed = 1;
let gameOver = false;
let lastTimestamp = 0;
let direction = { x: 0, y: 1 }; // Initial direction: down

function mainLoop(timestamp) {
    const deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    update(deltaTime);
    draw();

    if (!gameOver) {
        requestAnimationFrame(mainLoop);
    }
}

function update(deltaTime) {
    // Check for collisions
    if (isCollision()) {
        gameOver = true;
        return;
    }

    // Update snake head position
    const newHead = {
        x: snake[0].x + direction.x * speed * deltaTime,
        y: snake[0].y + direction.y * speed * deltaTime,
    };

    // Check for apple collision
    if (newHead.x === apple.x && newHead.y === apple.y) {
        snake.push(snake[snake.length - 1]); // Grow snake
        apple = {
            x: getRandomInt(gridSize),
            y: getRandomInt(gridSize),
        };
    } else {
        // Move snake (tail disappears, head appears)
        snake.shift(); // Remove tail
    }

    snake.unshift(newHead); // Add new head
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid (optional, can be removed)
    /*
    ctx.strokeStyle = 'black';
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
    }
    */

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(cell => {
        ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
    });

    // Draw apple
    ctx.fillStyle = 'red';
    ctx.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize, cellSize);

    // Game Over text
    if (gameOver) {
        ctx.font = '40px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Game Over!', canvas.width / 2 - 100, canvas.height / 2);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function isCollision() {
    const head = snake[0];
    return (
        head.x < 0 ||
        head.x >= gridSize ||
        head.y < 0 ||
        head.y >= gridSize ||
        snake.some((cell, index) => index !== 0 && cell.x === head.x && cell.y === head.y)
    );
}

// Handle
