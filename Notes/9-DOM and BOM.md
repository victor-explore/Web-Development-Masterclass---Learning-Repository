## Web element manipulation

- The browser window that you see for the page is literally called the window object. We can access this window object using the `window` keyword.
- Window object can be broken down into:
  - DOM (Document Object Model): contains all the elements on the page. Elements are the HTML tags that make up the page.
  - BOM (Browser Object Model): contains all the objects that are built into the browser. For example, screen(size of the screen etc), location(url of the page), navigator(browser type), etc.
  - JavaScript Engine (V8): contains the JavaScript code that is executed.

## DOM

- Every HTML tag is just like a tree.
- The root of the tree is the `html` tag.
- Here also we have to do similar thing like hunting that we did in CSS.

## DOM Manipulation

- We will be doing only 2 things:

  - event listening - which could be moving, clicking, key pressed etc.
  - get the element - do something with the element

- For example, if we want to change the text of the element, by clicking on the button, then we will do the following:

  - get the element of the button
  - add event listener to the button say onClick
  - when the button is clicked, we will change the text of the element

- Example:
  ```javascript
  document
    .getElementById("changeTextButton") // This gets a button element by its ID
    .addEventListener("click", function () {
      // This adds a click event listener to the button. We also pass a function along with its definition  to the event listener explaining what to do when the button is clicked.
      console.log(this); // When clicked, this will log the button element to the console (this refers to the element that triggered the event)
    });
  ```
- In the above example, we:

  1. Get the button element with ID "changeTextButton" using document.getElementById()
  2. Add a 'click' event listener to that button
  3. Define what happens when the button is clicked (logging the button element to the console)

- Traversing the DOM:

  - We can traverse the DOM using the `parentElement` property.
  - We can traverse the DOM using the `children` property.
  - We can traverse the DOM using the `nextElementSibling` property.
  - We can traverse the DOM using the `previousElementSibling` property.
  - We can traverse the DOM using the `parentElement` property.

- Note that DOM is not HTML. The browser processes the HTML and creates the DOM.
