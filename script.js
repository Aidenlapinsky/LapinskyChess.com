const bananaFacts = [
    "Bananas are curved because they grow towards the sun.",
    "Bananas are technically berries!",
    "A cluster of bananas is called a hand, and a single banana is a finger.",
    "There are over 1000 different types of bananas in the world.",
    "Bananas are a good source of potassium and vitamin C.",
    "Bananas float in water.",
    "The inside of a banana peel can help relieve bug bites.",
    "Monkeys love bananas, but they're not a major part of their natural diet.",
    "In some cultures, banana leaves are used as plates for eating.",
    "Bananas can be ripened quickly by placing them in a paper bag with an apple.",
    "The scientific name for banana is Musa acuminata.",
    "Bananas share about 50% of their DNA with humans.",
    "The world record for most bananas eaten in a minute is 81.",
    "Bananas are radioactive (but don't worry, it's harmless).",
    "The phrase 'going bananas' means going crazy!" 
];

// ... (Rest of the code remains the same)

function displayBananaFacts() {
    resultsDiv.innerHTML = ''; 
    const ul = document.createElement('ul'); // Create a list

    bananaFacts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        ul.appendChild(li);
    });

    resultsDiv.appendChild(ul); 
}
