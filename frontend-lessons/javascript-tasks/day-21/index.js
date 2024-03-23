// JavaScript Fundamentals - Day 21: Assignment

const myLink = document.getElementById('myLink');
myLink.setAttribute('target', '_blank');
console.log(myLink);

const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');

const highlightedDiv = document.getElementById('highlightedDiv');
highlightedDiv.classList.remove('highlight');

const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'This paragraph has new text content.';
myParagraph.style.color = 'red';
myParagraph.style.backgroundColor = 'lightgray';
myParagraph.style.fontSize = '18px';
