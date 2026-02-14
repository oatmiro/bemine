// yes button
const button = document.getElementById('yesButton');
const textDisplay = document.getElementById('displayText');

// event listener
button.addEventListener('click', function() {
    // Set the text content of the paragraph element
    textDisplay.textContent = "Yipee! I love you so much :] Let's have a fun day together";
});


// no button
const button2 = document.getElementById('noButton');
const textDisplays = document.getElementById('displayTexts');

// event listener
button2.addEventListener('click', function() {
    // Set the text content of the paragraph element
    textDisplays.textContent = "Error... 404.. try again :P";
});