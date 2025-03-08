import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import express from "express"; // Import the express module
const app = express(); // Create an instance of the express application
const port = process.env.PORT || 3000; // Define the port number from the .env file with fallback to 3000

app.use(express.json()); // Parse JSON bodies in the request

let tea = []; // Define an array to store tea objects
let nextId = 1; // Define a variable to store the next available ID

// Create a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body; // Extract the name and price from the request body
  const newTea = {
    id: nextId++, // Increment the ID for the new tea
    name, // Assign the name from the request bodyw
    price, // Assign the price from the request body
  };
  tea.push(newTea); // Add the new tea to the array
  res.status(201).send(newTea); // Send a 201 Created status with the new tea object
});

// Get all teas
app.get("/teas", (req, res) => {
  res.status(200).send(tea); // Send a 200 OK status with the tea array
});

// Get a tea by ID
app.get("/teas/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convert the ID parameter to an integer
  const foundTea = tea.find((t) => t.id === id); // Find the tea object with the matching ID
  if (!foundTea) {
    return res.status(404).send({ message: "Tea not found" }); // Send a 404 Not Found status if the tea is not found
  }
  res.status(200).send(foundTea); // Send a 200 OK status with the found tea object
});

// Update a tea by ID
app.put("/teas/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convert the ID parameter to an integer
  const { name, price } = req.body; // Extract the name and price from the request body
  const foundTea = tea.find((t) => t.id === id); // Find the tea object with the matching ID
  if (!foundTea) {
    return res.status(404).send({ message: "Tea not found" }); // Send a 404 Not Found status if the tea is not found
  }
  foundTea.name = name; // Update the name of the tea
  foundTea.price = price; // Update the price of the tea
  res.status(200).send(foundTea); // Send a 200 OK status with the updated tea object
});

// Delete a tea by ID
app.delete("/teas/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convert the ID parameter to an integer
  const index = tea.findIndex((t) => t.id === id); // Find the index of the tea object with the matching ID
  if (index === -1) {
    return res.status(404).send({ message: "Tea not found" }); // Send a 404 Not Found status if the tea is not found
  }
  tea.splice(index, 1); // Remove the tea object from the array
  res.status(204).send({ message: "Tea deleted successfully" }); // Send a 204 No Content status
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
