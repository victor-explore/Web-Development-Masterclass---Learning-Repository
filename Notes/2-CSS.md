# CSS - Cascading Style Sheets(Cascading means that the styles are applied to parent elements are also applied to child elements)

- CSS is just 2 things:

  - Selecting an element
  - Styling and element

- Types of styling:

  - Inline styling: Means that the style is applied to the element directly in the HTML file. Tailwind is an example of inline styling.
  - Internal styling: This method involves placing CSS rules within a `<style>` tag in the `<head>` section of the HTML document. This allows for styling multiple elements without repeating the styles in each element.
  - External styling: This approach uses a separate CSS file linked to the HTML document via a `<link>` tag in the `<head>` section. This is the most efficient way to manage styles, as it allows for the reuse of the same CSS file across multiple HTML documents.

- CSS Selectors:

  - Element selector: Selects all elements of a specific type. Example: `h1`
  - ID selector: Selects a single element with a specific ID. Example: `<h1 id="uniqueId">`. Ideally, ID of element should be unique.
  - Class selector: Selects all elements with a specific class. Example: `<h1 class="className">`. Classes can be reused on multiple elements.

Note that defining names in the elements in HTML do not do anything. They are used to identify the elements in CSS.

- DOM(Document Object Model): It is a tree-like structure of HTML elements. It is used to represent the structure of the HTML document. Following are the terms related to DOM:

  - Parent: It is the element that contains the other element.
  - Child: It is the element that is contained by the other element.
  - Sibling: It is the element that is at the same level as the other element.

- How to select elements in DOM:

  - Universal selector: `*` : Selects all elements in the document. Generally we use this to remove default styles of browser. Hence it is used in the beginning of the CSS file.
  - Type selector: example: `h1` : I will tell you what is the type of the element i am selecting.
  - Class selector: example: `.className` : I will tell you what is the class of the element i am selecting.
  - ID selector: example: `#idName` : I will tell you what is the id of the element i am selecting. Ideally, id of element should be unique.
  - Attribute selector: example: `input[type="text"]` : I will tell you the name of the element and the attribute of the element i am selecting.
  - Pseudo-classes: example: `a:hover` : Selects elements in a specific state (like when hovering over a link). Other examples include :active, :focus, :visited, :first-child.
  - Grouping selector: example: `h1, h2, h3` : Selects all h1, h2, and h3 elements.

- Advanced selectors(not a must, but good to know):

  - Descendant selector: example: `div span` : I will tell you the element along with its parent that i want to select. Always read CSS from right to left. Read this example as "I want to select all span elements that are inside a div element".
  - Child selector: example: `div > span` : All the span elements that are directly inside a div element will be selected.
  - Adjacent sibling selector: example: `h1 + p` : Selects a paragraph element that directly follows an h1 element (must be at same level).
  - General sibling selector: example: `h1 ~ p` : Selects all paragraph elements that follow an h1 element (must be at same level).

- Box model:

  - Content: The content of the element, such as text, images, or other media.
  - Padding: The space between the content and the border of the element.
  - Border: The border of the element, which surrounds the padding and content.
  - Margin: The space outside the border of the element, which creates space between the element and other elements.
