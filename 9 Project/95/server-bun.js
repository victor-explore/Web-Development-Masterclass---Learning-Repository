import { serve } from "bun"; // Importing the serve function from the bun module

serve({
  fetch(request) {
    // Parse the URL to get the pathname
    const url = new URL(request.url); // Create a URL object to parse the request URL
    const path = url.pathname; // Extract just the path portion of the URL

    if (path === "/ice-tea" && request.method === "GET") {
      // Check if the path matches "/ice-tea"
      return new Response("Hello ice tea from bun"); // Return a response for ice-tea requests
    }

    if (path === "/coffee" && request.method === "GET") {
      // Check if the path matches "/coffee"
      return new Response("Hello coffee from bun"); // Return a response for coffee requests
    }

    return new Response("404 Not Found"); // Return a 404 response for any other requests
  },
  port: 3001, // Set the server port to 3001 (changed from 3000 to avoid conflicts)
  hostname: "127.0.0.1", // Set the hostname to localhost
});
