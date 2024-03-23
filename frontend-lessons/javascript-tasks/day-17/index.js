// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

// Create an array named `cities` containing the names of five cities.
let cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];

// Access and print the third city in the `cities` array.
console.log("Third city:", cities[2]);

// Modify the second city in the array to a different city of your choice.
cities[1] = 'Los Angeles';

// Task 2: Array Operations

// Create an array named `fruits` with at least three different fruits.
let fruits = ['Apple', 'Banana', 'Orange'];

// Add a new fruit to the end of the `fruits` array using the `push()` method.
fruits.push('Grapes');

// Remove the last fruit from the array using the `pop()` method.
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);

// Use a loop to iterate through the `fruits` array and print each fruit to the console.
console.log("\nPrinting fruits:");
for (let fruit of fruits) {
  console.log(fruit);
}

// Task 3: Advanced Array Techniques

// Create an array named `numbers` with five numeric values.
let numbers = [1, 3, 5, 7, 9];

// Use the `map()` method to create a new array where each number is multiplied by 2.
let doubledNumbers = numbers.map(num => num * 2);
console.log("\nDoubled numbers:", doubledNumbers);

// Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.
let filteredNumbers = numbers.filter(num => num > 5);
console.log("Numbers greater than 5:", filteredNumbers);

// Task 4: Array Manipulation

// Create an array named `colors` with at least four different colors.
let colors = ['Red', 'Green', 'Blue', 'Yellow'];

// Add a new color to the beginning of the `colors` array using the `unshift()` method.
colors.unshift('Purple');

// Remove the first color from the array using the `shift()` method.
let removedColor = colors.shift();
console.log("\nRemoved color:", removedColor);

// Use the `slice()` method to create a new array containing the second and third colors from the original array.
let slicedColors = colors.slice(1, 3);
console.log("Sliced colors:", slicedColors);

// Task 5: Array Splicing

// Create an array named `characters` with at least six characters (strings).
let characters = ['A', 'B', 'C', 'D', 'E', 'F'];

// Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
characters.splice(2, 0, 'X', 'Y');

// Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.
let removedCharacters = characters.splice(4, 3);
console.log("\nRemoved characters:", removedCharacters);

// Display the updated `characters` array after splicing.
console.log("Updated characters array:", characters);
