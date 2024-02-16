const secretWord = "Hello";
let guessesRemaining = 1;

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput");
    const message = document.getElementById("message");

    if (passwordInput.value === secretWord) {
        // Successful login - Redirect or reveal content
        window.location.href = "welcome.html"; // Replace with your welcome page
    } else {
        guessesRemaining--;
        message.textContent = "Incorrect! You have " + guessesRemaining + " guesses left.";

        if (guessesRemaining === 0) {
            passwordInput.style.display = "none"; // Hide the input
            message.textContent = "Access Denied!";
        }
    }
}
