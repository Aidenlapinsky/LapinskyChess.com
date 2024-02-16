const gameboard = document.getElementById('gameboard');
const turnDisplay = document.getElementById('turn');

let board = [
    ["W", "W", "W"],
    [null, null, null],
    ["B", "B", "B"]
];

let currentPlayer = "W";
let selectedPiece = null;

function renderBoard() {
    gameboard.innerHTML = ''; // Clear any existing cells

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // Alternate background colors
            if ((row + col) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }

            // Place pawns
            if (board[row][col] === "W") {
                cell.classList.add('white-pawn');
                cell.textContent = "♙"; 
            } else if (board[row][col] === "B") {
                cell.classList.add('black-pawn');
                cell.textContent = "♟︎"; 
            }

            cell.addEventListener('click', () => handleClick(row, col));
            gameboard.appendChild(cell);
        }
    }
}

function handleClick(row, col) {
    // Your existing handleClick logic would go here
}

function switchTurn() {
    // Your existing switchTurn logic would go here
}

// Initialize the game
renderBoard();
