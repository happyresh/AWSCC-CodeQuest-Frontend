// JavaScript Fundamentals - Day 22: Assignment

// Task 1: Creating an Element with JavaScript

const dynamicContainer = document.getElementById('dynamicContainer');

// Create a new img element
const newImage = document.createElement('img');

// Set attributes
newImage.src = 'https://picsum.photos/200/300';
newImage.alt = 'Dynamically created image';

// Append the new element to the container
dynamicContainer.appendChild(newImage);

// Task 2: Removing DOM Elements

const myList = document.getElementById('myList');

// a. Select and remove a specific list item
const itemToRemove = myList.children[1]; // Selecting the second item
myList.removeChild(itemToRemove);

// b. Remove the last list item
const lastItem = myList.lastElementChild;
lastItem.remove();

// c. Clear all list items using innerHTML
myList.innerHTML = '';
