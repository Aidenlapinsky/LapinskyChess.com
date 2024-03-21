const facts = {
    "banana": [ 
        "Bananas are technically berries!",
        "A cluster of bananas is called a hand, and a single banana is a finger.",
        "Bananas are a good source of potassium and vitamin C."
    ],
    "apple": [
        "An apple a day keeps the doctor away.",
        "Apples come in many varieties – red, green, yellow, and more!",
        "The heaviest apple ever weighed over 3 pounds."
    ],
    "dog": [
        "Dogs have a great sense of smell.",
        "There are hundreds of dog breeds in the world.",
        "A dog's tail wag can express different emotions." 
    ]
};

const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', () => {
    const query = searchBox.value.toLowerCase();
    const matchingTopic = findMatchingTopic(query);

    if (matchingTopic) {
        displayFacts(matchingTopic);
    } else {
        resultsDiv.textContent = 'Sorry, I don\'t know any facts about that yet.';
    }
});

function findMatchingTopic(query) {
    return Object.keys(facts).find(topic => query.includes(topic));
}

function displayFacts(topic) {
    resultsDiv.innerHTML = ''; // Clear previous results

    const heading = document.createElement('h2');
    heading.textContent = `Fun Facts about ${topic}:`;
    resultsDiv.appendChild(heading);

    const factList = document.createElement('ul');
    facts[topic].forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factList.appendChild(listItem);
    });
    resultsDiv.appendChild(factList);
}
