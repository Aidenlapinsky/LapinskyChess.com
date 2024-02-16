const correctSequence = ["circle", "square", "triangle", "circle"];
let currentStep = 0;
let userSequence = [];
const message = document.getElementById("message");
const shapesContainer = document.getElementById("shapes");
const submitButton = document.getElementById("submitButton");

function shapeClicked(shapeClass) {
    userSequence.push(shapeClass); 

    if (shapeClass === correctSequence[currentStep]) {
        message.textContent = "Correct!";
        currentStep++;
    } else {
        message.textContent = "Incorrect! Try again.";
        resetGame();
    }
}

function resetGame() {
    currentStep = 0;
    userSequence = [];
}

function checkSequence() {
    if (arraysMatch(userSequence, correctSequence)) {
        window.location.href = "https://aidenlapinsky.github.io/38dhfh402jfjfj29r84kdk02958jdjfjfksl03847502/#";
    } else {
        message.textContent = "Incorrect sequence! Try again.";
        resetGame();
    }
}

function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function createShapeButtons() {
    correctSequence.forEach(shape => {
        const button = document.createElement("button");
        button.classList.add("shape", shape);
        shapesContainer.appendChild(button);
    });
}

// Create buttons on page load
window.addEventListener('load', createShapeButtons);

// Event listeners 
const shapeButtons = document.querySelectorAll(".shape");  
shapeButtons.forEach(button => {
    button.addEventListener("click", () => shapeClicked(button.classList[1])); 
});

submitButton.addEventListener("click", checkSequence);
