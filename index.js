// Write your code here!

// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Set the text content to include your name
newHeader.textContent = "Emmanuel is the champion"; // Replace "Emmanuel" with your actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);

