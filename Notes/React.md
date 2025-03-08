- No need to use react if you are just making a simple website using html, css and javascript
- react build command generates a build folder that has just HTML, CSS and JS files that can be hosted on any web server

## Folder Structure

- build folder - contains the build folder that has just HTML, CSS and JS files that can be hosted on any web server
- node_modules folder - contains the node_modules folder that has all the dependencies, no need to touch this
- public folder - contains the public folder that has the index.html file where everything is injected. Because there is only one html file, we call react a single page application.
- src folder - most of the time we will be spending our time in the src folder

## Overview

- React is nothing just making components. Components are nothing but functions that take props ie parameters as input and return a react element ie html code.
- These components are called from the App.jsx file along with the props.
- The special feature of these called components objects is that they have a state and when the state changes, the component re-renders.
- That is all there is to react.

## React with tailwind css

- Just write tailwind css in the component file: return function of the component.

## Hooks

- This is a function that uses say API calls to get data and then returns the data.
- This function is defined in the src/hooks folder.
- This function is used in return function of the component to render the HTML based on the data returned by the hook.
