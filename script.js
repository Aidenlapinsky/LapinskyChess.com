const correctSequence = ["circle", "square", "triangle", "circle"];
let currentStep = 0;
const message = document.getElementById("message");

function shapeClicked(shapeClass) {
    if (shapeClass === correctSequence[currentStep]) {
        message.textContent = "Correct!";
        currentStep++;

        if (currentStep === correctSequence.length) {
            // All shapes correct - Redirect
            window.location.href = "https://aidenlapinsky.github.io/38dhfh402jfjfj29r84kdk02958jdjfjfksl03847502/#"; 
        }
    } else {
        message.textContent = "Incorrect! Try again.";
        currentStep = 0; // Reset the sequence
    }
}

const shapeButtons = document.querySelectorAll(".shape");
shapeButtons.forEach(button => {
    button.addEventListener("click", () => shapeClicked(button.classList[1])); 
});
