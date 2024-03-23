// JavaScript Fundamentals - Day 15: Assignment

// Use a `for` loop to count from 1 to 5 and print each number to the console.
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Create an array named `cookies` with different types of cookies (strings).
let cookies = ['Chocolate Chip', 'Oatmeal Raisin', 'Sugar', 'Snickerdoodle'];

// Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.
console.log("\nTypes of cookies:");
for (let i = 0; i < cookies.length; i++) {
  console.log(cookies[i]);
}

// Create a variable named `jarNotEmpty` and set it to `true`.
let jarNotEmpty = true;

// Use a `while` loop to simulate eating cookies while the jar is not empty.
console.log("\nEating cookies from the jar:");
while (jarNotEmpty) {
  if (cookies.length > 0) {
    let eatenCookie = cookies.pop(); // Remove and eat the last cookie from the jar
    console.log(`Ate a ${eatenCookie} cookie.`);
  } else {
    console.log("The cookie jar is empty.");
    jarNotEmpty = false; // Set `jarNotEmpty` to false to exit the loop
  }
}
