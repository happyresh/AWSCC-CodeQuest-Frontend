// Event Listeners: Assignment Day 23

// Task 1: Click Event Listener

const button = document.getElementById('myButton');

// Attach a click event listener
button.addEventListener('click', function(event) {
    // Your code to handle the button click goes here
    alert('Button clicked!');
});

// Task 2: Double-Click Event Listener

const doubleClickButton = document.getElementById('doubleClickButton');

// Attach a double-click event listener
doubleClickButton.addEventListener('dblclick', function(event) {
    // Your code to handle the button double-click goes here
    alert('Button double-clicked!');
});

// Task 3: Mouseenter Event Listener

const mouseenterButton = document.getElementById('mouseenterButton');

// Attach a mouseenter event listener
mouseenterButton.addEventListener('mouseenter', function(event) {
    // Your code to handle the mouse entering the button goes here
    mouseenterButton.style.backgroundColor = 'lightblue';
});

// Task 4: Keypress Event Listener

const inputElement = document.getElementById('myInput');

// Attach a keypress event listener
inputElement.addEventListener('keypress', function(event) {
    // Your code to handle the keypress event goes here
    console.log('Keypress event:', event.key);
});
