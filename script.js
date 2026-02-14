// Get references to the button and the paragraph element by their IDs
const button = document.getElementById('yesButton');
const textDisplay = document.getElementById('displayText');

// Add a 'click' event listener to the button
button.addEventListener('click', function() {
    // Set the text content of the paragraph element
    textDisplay.textContent = "Hello, world! The button was clicked.";
});