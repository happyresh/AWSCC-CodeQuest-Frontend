
// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];
choices[0] = "assets/hand-rock-solid.svg"
choices[1] = "assets/hand-paper-solid.svg"
choices[2] = "assets/hand-scissors-solid.svg"


// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display"); // Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById("player1-score"); // Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById("player2-choice-display");  // Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById("player2-score"); // Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById("game-status"); // Get the element with the id of "game-status"
const resetGameButton = document.getElementById("reset-game-btn"); // Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById("rock-btn"); // Get the element with the id of "rock-btn"
const paperBtn = document.getElementById("paper-btn"); // Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById("scissors-btn"); // Get the element with the id of "scissors-btn"

// Step 3: Add event listeners to the buttons
const makeChoice = (selectedHand) => {
    if (confirm(`Confirm ${selectedHand}`)) {
        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", `assets/hand-${selectedHand.toLowerCase()}-solid.svg`);
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");
        const randomIndex = Math.floor(Math.random() * choices.length);
        opponentHand.setAttribute("src", choices[randomIndex]);

        const outcome = determineOutcome(opponentHand.getAttribute("src"), selectedHand);

        displayOutcome(outcome);
        player2ChoiceDisplay.appendChild(opponentHand);
    } else {
        alert("Show your hand to start the game!");
    }

    removeBtns();
};

const determineOutcome = (opponentHand, selectedHand) => {
    if (opponentHand === `assets/hand-${selectedHand.toLowerCase()}-solid.svg`) {
        return "DRAW";
    } else if (
        (opponentHand === "assets/hand-scissors-solid.svg" && selectedHand === "Rock") ||
        (opponentHand === "assets/hand-paper-solid.svg" && selectedHand === "Scissors") ||
        (opponentHand === "assets/hand-rock-solid.svg" && selectedHand === "Paper")
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }
};

const displayOutcome = (outcome) => {
    gameStatusDisplay.innerHTML = outcome;

    if (outcome === "YOU WIN!") {
        document.body.style.backgroundColor = "#6dd66d";
    } else if (outcome === "YOU LOSE!") {
        document.body.style.backgroundColor = "#ff5e5e";
    } else {
        document.body.style.backgroundColor = "#f0f0f0";
    }

    player1ScoreDisplay.innerHTML = "";
    player2ScoreDisplay.innerHTML = "";
};

rockBtn.addEventListener("click", () => makeChoice("Rock"));
paperBtn.addEventListener("click", () => makeChoice("Paper"));
scissorsBtn.addEventListener("click", () => makeChoice("Scissors"));

resetGameButton.addEventListener("click", () => location.reload());


// Step 4: Define helper functions that will be the actions of the game

function removeBtns() {
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
}
// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!