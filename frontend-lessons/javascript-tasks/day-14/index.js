// JavaScript Fundamentals - Day 14: Assignment

// Create a variable named `temperature` and assign it a value.
let temperature = 32;

// Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
if (temperature > 30) {
  console.log("It's hot outside!");
}

// Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
else {
  console.log("The temperature is comfortable.");
}

// Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
let time = new Date().getHours();

// Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Create a switch statement for the variable `day`. Print a message based on the day of the week.
let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Today is Sunday.");
    break;
  case 1:
    console.log("Today is Monday.");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
    break;
  default:
    console.log("Error: Invalid day.");
    break;
}
