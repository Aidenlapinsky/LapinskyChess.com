// Word List
const wordList = ["apple", "crane", "train", ...]; 

// Date-based word selection
function getDailyWordSeed() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const origin = new Date(2022, 0, 0); 
  const msDifference = today.getTime() - origin.getTime(); 
  const dayDifference = Math.floor(msDifference / (1000 * 60 * 60 * 24));
  return dayDifference;
}

function seededRandom(seed, max) {
  const x = Math.sin(seed++) * 10000;
  return Math.floor((x - Math.floor(x)) * max);
}

function chooseRandomWord(list) {
  const seed = getDailyWordSeed(); 
  const index = seededRandom(seed, wordList.length);
  return wordList[index];
}

// Game State
let currentRow = 0;
const answer = chooseRandomWord(wordList);

// Grid Building
function buildGrid() {
  const gameBoard = document.querySelector('.game-board');
  for (let i = 0; i < 6; i++) { 
    let row = document.createElement('div');
    row.classList.add('row'); // Add a class for easier styling
    for (let j = 0; j < 5; j++) { 
      let tile = document.createElement('div');
      tile.classList.add('tile'); 
      row.appendChild(tile);
    }
    gameBoard.appendChild(row);
  }
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
  tile.textContent = letter;
  tile.classList.add(status); 
}

// Handling key presses
function handleKeyPress(key) {
  if (currentRow >= 6) return; // Game over

  if (key.length === 1 && /^[a-z]$/i.test(key)) { 
    // ... Add letters to the current row (update tiles) ...
  } else if (key === "Enter") {
    const guessedWord = getCurrentWord();
    if (guessedWord.length !== 5) {
      // ... Handle incomplete guess ...
      return; 
    }

    // ... Check if word is in the wordList ...

    // Color-coding logic 
    for (let i = 0; i < guessedWord.length; i++) {
      // ... (same as before) ...
    }

    currentRow++; 
    // ... Check for win or game over ... 
  } else if (key === "Backspace") {
    // ... Remove letters from the current row (update tiles) ...
  }
}

// Event Listeners for on-screen keyboard
const keyboardKeys = document.querySelectorAll('.key');
keyboardKeys.forEach(key => {
  key.addEventListener('click', () => {
    handleKeyPress(key.textContent); 
  });
});

// Start Game
buildGrid();
