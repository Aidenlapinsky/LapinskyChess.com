const bananaFacts = [
    "Bananas are curved because they grow towards the sun.",
    "Bananas are technically berries!",
    "A cluster of bananas is called a hand, and a single banana is a finger.",
    "There are over 1000 different types of bananas in the world.",
    "Bananas are a good source of potassium and vitamin C."
];

const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', () => {
    const query = searchBox.value.toLowerCase();
    if (isBananaRelated(query)) {
        displayBananaFacts();
    } else {
        resultsDiv.textContent = 'Hmmm, try a banana-related word.';
    }
});

function isBananaRelated(query) {
    const bananaWords = ["banana", "plantain", "ripe", "yellow"]; 
    return bananaWords.some(word => query.includes(word));
}

function displayBananaFacts() {
    resultsDiv.innerHTML = ''; // Clear previous content
    const randomFact = bananaFacts[Math.floor(Math.random() * bananaFacts.length)];
    resultsDiv.textContent = randomFact;
}
