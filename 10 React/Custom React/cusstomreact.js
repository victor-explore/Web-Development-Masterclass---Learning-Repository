function customRender(reactElement, container) {
  // Create a new DOM element based on the type specified in reactElement
  const domElement = document.createElement(reactElement.type);

  // Set the inner HTML of the DOM element to the children of reactElement
  domElement.innerHTML = reactElement.children;

  // Loop through all properties in reactElement.props
  for (const prop in reactElement.props) {
    // Skip the 'children' property as it's handled separately
    if (prop === "children") continue;

    // Set each property as an attribute on the DOM element
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the newly created DOM element to the container
  container.appendChild(domElement);
}

// Define a React element object with type, props, and children
const reactElement = {
  type: "a", // The HTML tag type (anchor tag in this case)
  props: {
    href: "https://www.google.com", // Link destination
    target: "_blank", // Open in new tab
  },
  children: "Click me to visit google", // Text content of the element
};

// Get the container element from the DOM where we'll render our React element
const mainContainer = document.getElementById("root");

// Call our custom render function to render the React element into the container
customRender(reactElement, mainContainer);
