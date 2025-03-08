# Custom React Implementation

This is a simple implementation of React's rendering functionality to understand how React works under the hood.

## How to Run

1. Simply open the `index.html` file in your web browser.
2. You can do this by:
   - Double-clicking the `index.html` file in your file explorer
   - Right-clicking the file and selecting "Open with" and choosing your browser
   - Dragging the file into an open browser window

No npm or other package manager is needed to run this simple example.

## What This Does

This implementation demonstrates a very basic version of how React renders elements to the DOM:

1. We define a React element with a type, props, and children
2. We create a custom render function that:
   - Creates a DOM element based on the type
   - Sets its content based on the children
   - Adds attributes based on the props
   - Appends it to a container element

## Code Explanation

- `customRender()`: A function that takes a React element object and a container, then renders the element into the container
- `reactElement`: An object representing a React element (in this case, a link to Google)
- The code creates an anchor tag with the specified properties and adds it to the page

This is a simplified version of what React does internally when rendering components.
