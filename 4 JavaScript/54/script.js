// DOM Manipulation Learning App - Main JavaScript File

// Wait for the DOM to be fully loaded before executing code
document.addEventListener("DOMContentLoaded", function () {
  // This ensures our code runs after the HTML is fully loaded

  // Get references to DOM elements we'll be working with
  const playground = document.getElementById("playground"); // Get the playground area where elements will be manipulated
  const codeDisplay = document.getElementById("code-display"); // Get the code display area to show JavaScript code

  // Get references to all the control buttons
  const createElementBtn = document.getElementById("create-element"); // Button to create new elements
  const modifyElementBtn = document.getElementById("modify-element"); // Button to modify existing elements
  const deleteElementBtn = document.getElementById("delete-element"); // Button to delete elements
  const changeStyleBtn = document.getElementById("change-style"); // Button to change element styles
  const addEventBtn = document.getElementById("add-event"); // Button to add event listeners
  const resetPlaygroundBtn = document.getElementById("reset-playground"); // Button to reset the playground

  // Counter to keep track of new elements created
  let elementCounter = 4; // Start from 4 since we already have elements 1-3 in the HTML

  // Function to display code in the code display area
  function displayCode(code) {
    // This function shows the JavaScript code in the code display area
    codeDisplay.textContent = code; // Set the text content of the code display to the provided code
    console.log("Code executed:", code); // Also log the code to the console for reference
  }

  // Function to show a message in the playground
  function showMessage(message, isError = false) {
    // Function to display success or error messages
    const messageElement = document.createElement("div"); // Create a new div element for the message
    messageElement.textContent = message; // Set the text content of the message
    messageElement.className = isError ? "error-message" : "success-message"; // Apply appropriate styling based on message type

    // Add the message to the playground
    playground.appendChild(messageElement); // Add the message to the playground area

    // Remove the message after 3 seconds
    setTimeout(() => {
      playground.removeChild(messageElement); // Remove the message element after the timeout
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  // Function to reset the playground to its initial state
  function resetPlayground() {
    // This function resets the playground to its original state
    // Code to reset the playground
    const resetCode = `// Reset playground to initial state
playground.innerHTML = '';

// Recreate the original three elements
for (let i = 1; i <= 3; i++) {
    const box = document.createElement('div');
    box.className = 'element-box';
    box.id = 'box' + i;
    box.textContent = 'Element ' + i;
    playground.appendChild(box);
}`;

    // Execute the reset code
    playground.innerHTML = ""; // Clear the playground

    // Recreate the original three elements
    for (let i = 1; i <= 3; i++) {
      // Loop from 1 to 3
      const box = document.createElement("div"); // Create a new div element
      box.className = "element-box"; // Add the element-box class
      box.id = "box" + i; // Set the id to box1, box2, or box3
      box.textContent = "Element " + i; // Set the text content
      playground.appendChild(box); // Add the element to the playground
    }

    // Reset the element counter
    elementCounter = 4; // Reset the counter for new elements

    // Display the code
    displayCode(resetCode); // Show the reset code in the code display
    showMessage("Playground reset to initial state"); // Show a success message
  }

  // Event listener for Create Element button
  createElementBtn.addEventListener("click", function () {
    // When the Create Element button is clicked
    // Code to create a new element
    const createCode = `// Create a new element
const newElement = document.createElement('div');
newElement.className = 'element-box';
newElement.id = 'box${elementCounter}';
newElement.textContent = 'Element ${elementCounter}';
playground.appendChild(newElement);`;

    // Execute the create element code
    const newElement = document.createElement("div"); // Create a new div element
    newElement.className = "element-box"; // Add the element-box class
    newElement.id = "box" + elementCounter; // Set a unique id using the counter
    newElement.textContent = "Element " + elementCounter; // Set the text content
    playground.appendChild(newElement); // Add the new element to the playground

    // Increment the element counter
    elementCounter++; // Increase the counter for the next element

    // Display the code
    displayCode(createCode); // Show the creation code in the code display
    showMessage("New element created"); // Show a success message
  });

  // Event listener for Modify Element button
  modifyElementBtn.addEventListener("click", function () {
    // When the Modify Element button is clicked
    // Get all elements in the playground
    const elements = playground.querySelectorAll(".element-box"); // Select all element boxes

    if (elements.length === 0) {
      // Check if there are any elements to modify
      showMessage("No elements to modify", true); // Show an error message
      return; // Exit the function
    }

    // Select a random element to modify
    const randomIndex = Math.floor(Math.random() * elements.length); // Generate a random index
    const elementToModify = elements[randomIndex]; // Get the element at the random index

    // Code to modify the element
    const modifyCode = `// Modify an element's text content
const elementToModify = document.getElementById('${elementToModify.id}');
elementToModify.textContent = 'Modified ${elementToModify.id}';
elementToModify.dataset.modified = 'true';`;

    // Execute the modify element code
    elementToModify.textContent = "Modified " + elementToModify.id; // Change the text content
    elementToModify.dataset.modified = "true"; // Add a data attribute to mark it as modified

    // Display the code
    displayCode(modifyCode); // Show the modification code in the code display
    showMessage(`Element ${elementToModify.id} modified`); // Show a success message
  });

  // Event listener for Delete Element button
  deleteElementBtn.addEventListener("click", function () {
    // When the Delete Element button is clicked
    // Get all elements in the playground
    const elements = playground.querySelectorAll(".element-box"); // Select all element boxes

    if (elements.length === 0) {
      // Check if there are any elements to delete
      showMessage("No elements to delete", true); // Show an error message
      return; // Exit the function
    }

    // Select a random element to delete
    const randomIndex = Math.floor(Math.random() * elements.length); // Generate a random index
    const elementToDelete = elements[randomIndex]; // Get the element at the random index

    // Code to delete the element
    const deleteCode = `// Remove an element from the DOM
const elementToDelete = document.getElementById('${elementToDelete.id}');
elementToDelete.parentNode.removeChild(elementToDelete);

// Alternative modern way:
// elementToDelete.remove();`;

    // Store the element ID before deleting it
    const deletedId = elementToDelete.id; // Save the id for the message

    // Execute the delete element code
    elementToDelete.parentNode.removeChild(elementToDelete); // Remove the element from its parent

    // Display the code
    displayCode(deleteCode); // Show the deletion code in the code display
    showMessage(`Element ${deletedId} deleted`); // Show a success message
  });

  // Event listener for Change Style button
  changeStyleBtn.addEventListener("click", function () {
    // When the Change Style button is clicked
    // Get all elements in the playground
    const elements = playground.querySelectorAll(".element-box"); // Select all element boxes

    if (elements.length === 0) {
      // Check if there are any elements to style
      showMessage("No elements to style", true); // Show an error message
      return; // Exit the function
    }

    // Select a random element to style
    const randomIndex = Math.floor(Math.random() * elements.length); // Generate a random index
    const elementToStyle = elements[randomIndex]; // Get the element at the random index

    // Generate random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color

    // Code to change the element's style
    const styleCode = `// Change an element's style
const elementToStyle = document.getElementById('${elementToStyle.id}');
elementToStyle.style.backgroundColor = '${randomColor}';
elementToStyle.style.color = 'white';
elementToStyle.style.transform = 'scale(1.1)';
elementToStyle.style.transition = 'all 0.3s ease';`;

    // Execute the style change code
    elementToStyle.style.backgroundColor = randomColor; // Change the background color
    elementToStyle.style.color = "white"; // Change the text color
    elementToStyle.style.transform = "scale(1.1)"; // Scale the element up slightly
    elementToStyle.style.transition = "all 0.3s ease"; // Add a smooth transition

    // Display the code
    displayCode(styleCode); // Show the styling code in the code display
    showMessage(`Style changed for ${elementToStyle.id}`); // Show a success message
  });

  // Event listener for Add Event button
  addEventBtn.addEventListener("click", function () {
    // When the Add Event button is clicked
    // Get all elements in the playground
    const elements = playground.querySelectorAll(".element-box"); // Select all element boxes

    if (elements.length === 0) {
      // Check if there are any elements to add events to
      showMessage("No elements to add events to", true); // Show an error message
      return; // Exit the function
    }

    // Select a random element to add an event to
    const randomIndex = Math.floor(Math.random() * elements.length); // Generate a random index
    const elementToAddEvent = elements[randomIndex]; // Get the element at the random index

    // Remove any existing click events (to avoid stacking)
    const newElement = elementToAddEvent.cloneNode(true); // Clone the element to remove event listeners
    elementToAddEvent.parentNode.replaceChild(newElement, elementToAddEvent); // Replace with the clone

    // Code to add an event listener
    const eventCode = `// Add a click event listener to an element
const element = document.getElementById('${newElement.id}');
element.addEventListener('click', function() {
    alert('You clicked on ${newElement.id}!');
    this.textContent = 'Clicked!';
});

// Note: The 'this' keyword refers to the element that was clicked`;

    // Execute the add event code
    newElement.addEventListener("click", function () {
      // Add a click event listener
      alert("You clicked on " + newElement.id + "!"); // Show an alert when clicked
      this.textContent = "Clicked!"; // Change the text when clicked
    });

    // Add a visual indicator that the element has an event
    newElement.style.cursor = "pointer"; // Change cursor to pointer
    newElement.title = "Click me!"; // Add a tooltip

    // Display the code
    displayCode(eventCode); // Show the event listener code in the code display
    showMessage(`Event added to ${newElement.id} (try clicking it)`); // Show a success message
  });

  // Event listener for Reset Playground button
  resetPlaygroundBtn.addEventListener("click", resetPlayground); // When the Reset button is clicked, call the resetPlayground function

  // Initialize with a welcome message
  displayCode(`// Welcome to the DOM Manipulation Learning App!
// Click the buttons above to see different DOM operations in action.
// The JavaScript code for each operation will appear here.

// DOM = Document Object Model
// The DOM represents the HTML document as a tree of objects
// JavaScript can manipulate this tree to change the page content`);

  console.log("DOM Manipulation Learning App initialized"); // Log initialization message to console
});
