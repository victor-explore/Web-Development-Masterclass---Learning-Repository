import dotenv from "dotenv"; // Import dotenv
import { app } from "./app.js"; // Import the app from the app.js file
import connectDB from "./db/index.js"; // Import the connectDB function from the db/index.js file

dotenv.config({
  path: "./.env",
}); // Load environment variables from .env file

const PORT = process.env.PORT || 8001; // Define the port number

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
