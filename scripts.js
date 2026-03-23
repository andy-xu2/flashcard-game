const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');

    if (showingTerm) {
        cardContent.textContent = flashcards[currentIndex].term;
    } else {
        cardContent.textContent = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');

nextButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    showingTerm = true;
    displayCard();
});

prevButton.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }
    showingTerm = true;
    displayCard();
});

// This line will display the card when the page is refreshed
window.onload = displayCard;