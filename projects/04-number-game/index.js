
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const attemptsElement = document.querySelector('.attempts');
const guessInput = document.querySelector('#guess-input');
const checkBtn = document.querySelector('#check-btn');
const resetBtn = document.querySelector('#reset-btn');
const qmarkElement = document.querySelector('.qmark');
const highScoreElement = document.querySelector('.highscore');

// Defining the game variables
let score = 10;
let attempts = 10;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Adding event listeners to the buttons
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // Checking if the guess is within the range
  if (guess < 1 || guess > 50) {
    messageElement.textContent = 'Please enter a number between 1 and 50.';
    return;
  }

  // Checking if the guess is correct
  if (guess === secretNumber) {
    messageElement.textContent = 'You won! Congratulations!';
    document.body.style.backgroundColor = '#008000';
    qmarkElement.textContent = secretNumber;
    highScoreElement.textContent = score;
    return;
  }

  // Checking if the guess is too high or too low
  if (guess > secretNumber) {
    messageElement.textContent = 'Too high! Try again.';
    attempts--;
  } else {
    messageElement.textContent = 'Too low! Try again.';
    attempts--;
  }

  // Updating the score and attempts elements
  scoreElement.textContent = score;
  attemptsElement.textContent = `Attempts left: ${attempts}`;

  // Updating the highscore
  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
  }

  // Checking if the user has run out of attempts
  if (attempts === 0) {
    messageElement.textContent = 'Game over! Try again.';
    document.body.style.backgroundColor = '#FF0000';
    qmarkElement.textContent = secretNumber;
    guessInput.value = '';
  }
});

resetBtn.addEventListener('click', function () {
  // Resetting the game variables
  score = 10;
  attempts = 10;
  secretNumber = Math.floor(Math.random() * 50) + 1;

  // Updating the score and attempts elements
  scoreElement.textContent = score;
  attemptsElement.textContent = `Attempts left: ${attempts}`;

  // Updating the message and qmark elements
  messageElement.textContent = 'Start guessing...';
  guessInput.value = '';
  qmarkElement.textContent = '?';

  // Resetting the background color
  document.body.style.backgroundColor = '#043030';
});