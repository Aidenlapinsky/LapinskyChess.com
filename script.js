const correctSequence = ["circle", "square", "triangle", "circle"];
let currentStep = 0;
const message = document.getElementById("message");
const shapesContainer = document.getElementById("shapes"); // Get the container

function shapeClicked(shapeClass) {
    // ... (The rest of your shapeClicked function remains the same) ...
}

// Function to create shape buttons on page load
function createShapeButtons() {
    correctSequence.forEach(shape => {
        const button = document.createElement("button");
        button.classList.add("shape", shape);
        shapesContainer.appendChild(button);
    });
}

// Call the function when the page loads
createShapeButtons();

const shapeButtons = document.querySelectorAll(".shape");  
shapeButtons.forEach(button => {
    // ... (Your event listener code remains the same) ...
});
