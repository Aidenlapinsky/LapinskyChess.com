const secretWord = "Hello";
let guessesRemaining = 1;

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput");
    const message = document.getElementById("message");

    if (passwordInput.value === secretWord) {
        // Successful login - Redirect to your website
        window.location.href = "https://aidenlapinsky.github.io/38dhfh402jfjfj29r84kdk02958jdjfjfksl03847502/#"; 
    } else {
        guessesRemaining--;
        message.textContent = "Incorrect! You have " + guessesRemaining + " guesses left.";

        if (guessesRemaining === 0) {
            passwordInput.style.display = "none"; // Hide the input
            message.textContent = "Access Denied!";
        }
    }
}
