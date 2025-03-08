import express from "express"; // Import express
import cors from "cors"; // Import cors
import cookieParser from "cookie-parser"; // Import cookie-parser

const app = express(); // Create express app

app.use(cookieParser()); // Use cookie-parser middleware

// Middleware
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow all methods
    credentials: true, // Allow credentials
  })
);
app.use(express.json({ limit: "10kb" })); // Parse JSON bodies in the request
app.use(express.urlencoded({ extended: true, limit: "10kb" })); // Parse URL-encoded bodies in the request
app.use(express.static("public")); // Serve static files from the public folder

// Import routes
import healthcheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";

// Use routes
app.use("/api/v1", healthcheckRouter);
app.use("/api/v1/users", userRouter);

export { app };
