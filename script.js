// Word List
const wordList = ["apple", "crane", "train", ...]; 

// Date-based word selection
function getDailyWordSeed() {
  // ... (same as before) ...
}

function seededRandom(seed, max) {
  // ... (same as before) ... 
}

function chooseRandomWord(list) {
  // ... (same as before) ...
}

// Game State
let currentRow = 0;
const answer = chooseRandomWord(wordList);

// Grid Building
function buildGrid() {
  // ... (same as before) ...
}

// Fetching the current word
function getCurrentWord() {
  const rowTiles = document.querySelectorAll('.game-board > div')[currentRow].childNodes;
  let word = "";
  rowTiles.forEach(tile => word += tile.textContent);
  return word;
}

// Updating tile colors
function updateTile(tile, letter, status) {
  // ... (same as before) ...
}

// Handling key presses
function handleKeyPress(key) {
  if (key.length === 1 && /^[a-z]$/i.test(key)) { // Process only letters
    // ... Input into the current row ...
  } else if (key === "Enter") {
    const guessedWord = getCurrentWord();
    if (guessedWord.length !== 5) {
      // ... Handle incomplete guess ...
      return; 
    }

    // Color-coding logic
    for (let i = 0; i < guessedWord.length; i++) {
      // ... (same as before) ...
    }

    // ... Handle next row, win/loss ...
  } else if (key === "Backspace") {
    // ... Handle removing letters ...
  }
}

// Event Listener
document.addEventListener('keydown', handleKeyPress);

// Start Game
buildGrid();
