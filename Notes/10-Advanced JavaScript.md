## Asynchronous JavaScript

- Synchronous code is executed line by line.
- But there are some operations that require waiting ie pause for example network requests, reading files, etc.
- Asynchronous code allows the program to handle these operations without blocking the main thread.

- Example:

  ```javascript
  setTimeout(() => {
    // setTimeout is an asynchronous function that takes a callback function and a delay in milliseconds as arguments
    console.log("Hello");
  }, 1000);
  console.log("World");
  ```

  - In the above example, the `setTimeout` function is an asynchronous function.
  - It will not block the main thread and will execute the code after 1 second.
  - The `console.log("World")` will execute immediately.

  - Because the code is not being executed line by line, we call it asynchronous.

  ## Closures

  - A closure is a function that retains access to its parent scope variables even after the parent function has completed execution.

  - Example:

  ```javascript
  function outer() {
    // Defines an outer function that creates a closure
    let counter = 4; // Initializes a local variable 'counter' with value 4
    return function () {
      // Returns an inner function that has access to the outer function's variables
      counter++; // Increments the counter variable from the parent scope
      return counter; // Returns the updated counter value
    };
  }

  const increment = outer(); // Calls outer() which returns the inner function and assigns it to 'increment'
  console.log(increment()); // Calls the inner function which increments counter to 5 and returns it
  console.log(increment()); // Calls the inner function again, increments counter to 6 and returns it
  console.log(increment()); // Calls the inner function again, increments counter to 7 and returns it
  ```

## Promises and Promise Chaining

- Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

- Example:

```javascript
const promise = new Promise((resolve, reject) => {
  // Takes 2 parameters: resolve and reject which are functions as arguments
  // Creates a new Promise object that takes resolve and reject functions as parameters
  setTimeout(() => {
    // Sets a timer to execute code after a delay
    let success = true; // Flag to simulate if operation was successful
    if (success) {
      // If operation was successful
      resolve("Data fetched successfully"); // Resolves the promise with success message
    } else {
      // If operation failed
      reject("Error fetching data"); // Rejects the promise with error message
    }
  }, 3000); // Delay of 3000 milliseconds (3 seconds)
}); // End of Promise constructor
```

- This is how we make a promise. Now we will see how to consume the promise.
- Every promise has states associated with it ie:

  - pending: initial state, neither fulfilled nor rejected
  - fulfilled: operation was successful
  - rejected: operation failed

- We can consume the promise using the `then` method.

```javascript
promise
  .then((data) => {
    // take care of the success case
    console.log(data);
  })
  .catch((error) => {
    // take care of the error case
    console.log(error);
  });
```

- We can also chain more number of `then` methods.

```javascript
promise
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## As
