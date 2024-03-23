// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// a. All paragraphs on the page using `getElementsByTagName`.
let allParagraphs = document.getElementsByTagName('p');
console.log("All paragraphs:", allParagraphs);

// b. All elements with the class "info" using `getElementsByClassName`.
let infoElements = document.getElementsByClassName('info');
console.log("Info elements:", infoElements);

// c. The element with the ID "header" using `getElementById`.
let headerElement = document.getElementById('header');
console.log("Header element:", headerElement);

// d. The first element with the class "highlight" using `querySelector`.
let firstHighlight = document.querySelector('.highlight');
console.log("First highlight element:", firstHighlight);

// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
allParagraphs[1].textContent = "This paragraph is now updated!";

// 4. Change the background color of the div with the ID "header" to a different color of your choice.
headerElement.style.backgroundColor = 'lightblue';

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
let newH3 = document.createElement('h3');
newH3.textContent = "New Section";

// 6. Append the newly created `h3` element to the end of the body of the HTML document.
document.body.appendChild(newH3);

// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.
document.body.removeChild(allParagraphs[0]);

// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.
headerElement.addEventListener('click', () => {
  console.log("Header clicked!");
});

// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.
let colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.
for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.backgroundColor = colors[i % colors.length];
}
