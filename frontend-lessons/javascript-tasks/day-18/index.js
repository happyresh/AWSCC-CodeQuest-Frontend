// Working with Objects in JavaScript - Day 18: Assignment

// Task 1: Object Basics

// Create an empty object named `book`.
let book = {};

// Add properties to the `book` object for `title`, `author`, and `year` with appropriate values.
book.title = 'A Song of Ice and Fire';
book.author = 'George Raymond Richard Martin';
book.year = 1996;

// Access and print the `author` property of the `book` object.
console.log("Author:", book.author);

// Task 2: Object Operations

// Create an object named `student` with properties for `name`, `age`, and `grade`.
let student = {
  name: 'Alice',
  age: 20,
  grade: 'A'
};

// Modify the `age` property of the `student` object to a different value.
student.age = 21;

// Add a new property named `subjects` to the `student` object, which should be an array of at least three subjects.
student.subjects = ['Math', 'Science', 'History'];

// Task 3: Object Methods

// Create an object named `rectangle` with properties for `width` and `height`.
let rectangle = {
  width: 10,
  height: 5
};

// Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
rectangle.calculateArea = function() {
  return this.width * this.height;
};

// Invoke the `calculateArea` method and store the result in a variable, then print it to the console.
let area = rectangle.calculateArea();
console.log("Area:", area);

// Task 4: Advanced Object Techniques

// Create an object named `person` with properties for `name`, `age`, and `address`.
let person = {
  name: 'Bob',
  age: 30,
  address: '123 Main St'
};

// Use the `delete` keyword to remove the `address` property from the `person` object.
delete person.address;

// Create another object named `employee` with properties for `name` and `position`.
let employee = {
  name: 'Emily',
  position: 'Manager'
};

// Combine the `person` and `employee` objects into a new object named `employeeDetails`.
let employeeDetails = {
  ...person,
  ...employee
};

console.log("\nEmployee Details:", employeeDetails);

// These tasks will enhance your understanding of working with objects in JavaScript. Objects are versatile and allow you to structure data in a meaningful way. Best of luck! 🌟

