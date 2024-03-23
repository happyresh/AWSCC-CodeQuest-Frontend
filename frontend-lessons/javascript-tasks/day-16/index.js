// JavaScript Fundamentals - Day 16: Assignment

// Create a function named `greet` that prints a greeting message to the console.
function greet() {
    console.log("Hello! Welcome to JavaScript Fundamentals.");
  }
  
  // Call the `greet` function to display the greeting.
  greet();
  
  // Modify the `greet` function to take a parameter `name` and greet the person by name.
  function greet(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript Fundamentals.`);
  }
  
  // Call the `greet` function with a name parameter to display a personalized greeting.
  greet('Mx. Recio');
  
  // Create a function named `addNumbers` that takes two parameters and returns their sum.
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Call the `addNumbers` function with different values and print the results.
  console.log("\nAdding numbers:");
  console.log("Sum of 5 and 7:", addNumbers(5, 7));
  console.log("Sum of -3 and 10:", addNumbers(-3, 10));
  
  // Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
  function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum / numbers.length;
  }
  
  // Use the `calculateAverage` function with an array of numbers and print the result.
  console.log("\nCalculating average:");
  let numbersArray = [10, 20, 30, 40, 50];
  console.log("Average of numbers:", calculateAverage(numbersArray));
  