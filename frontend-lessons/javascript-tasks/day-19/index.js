// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
let product = {
    name: 'Laptop',
    price: 999,
    quantity: 3
  };
  
  // Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
  let productJSON = JSON.stringify(product);
  
  // Print the resulting JSON string to the console.
  console.log("Product JSON:", productJSON);
  
  // Task 2: JSON to JavaScript
  
  // Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
  let bookJSON = '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publishedYear": 1925}';
  
  // Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
  let book = JSON.parse(bookJSON);
  
  // Access and print the `author` property of the resulting JavaScript object.
  console.log("\nBook Author:", book.author);
  
  // Task 3: Advanced JSON Operations
  
  // Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
  let people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
  ];
  
  // Use `JSON.stringify()` to convert the array of objects into a JSON string.
  let peopleJSON = JSON.stringify(people);
  
  // Use `JSON.parse()` to convert the JSON string back into an array of objects.
  let parsedPeople = JSON.parse(peopleJSON);
  
  // Print the `name` and `city` of each person in the array to the console.
  console.log("\nPeople Information:");
  parsedPeople.forEach(person => {
    console.log(`${person.name} - ${person.city}`);
  });
  