// JavaScript Fundamentals - Day 13: Assignment

// Task 1: Variable Mastery

let currentLesson = 'JavaScript Fundamentals';

console.log(currentLesson);


// Task 2: Data Types Exploration

let favoriteNumber = 6;

let favoriteWord = 'serendipity';

let isJavaScriptFun = true;

let nothing = null;

let undefinedVar;

// Task 3: Logical Operators in Action

let isMorning = true;
let isRaining = false;

if (isMorning && isRaining) {
  console.log("It's morning and raining.");
} else {
  console.log("It's either not morning or not raining.");
}

if (isMorning || isRaining) {
  console.log("It's either morning or raining.");
} else {
  console.log("It's neither morning nor raining.");
}

isMorning = !isMorning;
console.log("Inverted value of isMorning:", isMorning);
