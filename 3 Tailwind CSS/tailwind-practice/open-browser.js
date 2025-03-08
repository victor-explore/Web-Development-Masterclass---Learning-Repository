// This script opens an HTML file in the default browser
const { exec } = require("child_process"); // Import the exec function from child_process module
const path = require("path"); // Import the path module for working with file paths
const fs = require("fs"); // Import the fs module for file system operations

// Get the file to open from command line arguments or use index.html as default
const fileToOpen = process.argv[2] || "index.html"; // Get the file name from command line arguments or use default
const htmlFilePath = path.join(__dirname, "src", fileToOpen); // Create the path to the HTML file

// Check if the file exists
if (fs.existsSync(htmlFilePath)) {
  // Check if the HTML file exists
  console.log(`Opening ${fileToOpen} in the default browser...`); // Log a message with the file name

  // Open the file in the default browser based on the platform
  switch (
    process.platform // Check the operating system platform
  ) {
    case "win32": // For Windows
      exec(`start "" "${htmlFilePath}"`); // Use the start command to open the file
      break;
    case "darwin": // For macOS
      exec(`open "${htmlFilePath}"`); // Use the open command to open the file
      break;
    default: // For Linux and other platforms
      exec(`xdg-open "${htmlFilePath}"`); // Use xdg-open to open the file
      break;
  }

  console.log("Browser should be opening now!"); // Log a success message
} else {
  console.error(`Error: File not found at ${htmlFilePath}`); // Log an error if the file doesn't exist
  console.log("Available HTML files in src directory:"); // Log a message about available files

  // List available HTML files
  const srcDir = path.join(__dirname, "src"); // Path to the src directory
  if (fs.existsSync(srcDir)) {
    // Check if the src directory exists
    const files = fs
      .readdirSync(srcDir)
      .filter((file) => file.endsWith(".html")); // Get all HTML files
    files.forEach((file) => console.log(`- ${file}`)); // Log each file name

    console.log("\nUsage: node open-browser.js [filename.html]"); // Log usage instructions
  }
}
