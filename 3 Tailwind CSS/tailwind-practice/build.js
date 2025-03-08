// This script builds the CSS using the Tailwind CLI
const { execSync } = require("child_process"); // Import the execSync function from child_process module

try {
  console.log("Building Tailwind CSS..."); // Log a message to indicate the build process has started

  // Execute the Tailwind CLI command to build the CSS
  execSync(
    "node_modules\\.bin\\tailwindcss -i ./src/input.css -o ./dist/output.css",
    { stdio: "inherit" } // Inherit stdio to see the output in the console
  );

  console.log("Build completed successfully!"); // Log a success message
} catch (error) {
  console.error("Build failed:", error); // Log an error message if the build fails
  process.exit(1); // Exit with an error code
}
