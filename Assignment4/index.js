const express = require("express");
const logger = require("./middleware/logger");

const app = express();
const PORT = 3000;

// Register the custom logger middleware
app.use(logger);

// Route 1: Home
app.get("/", (_req, res) => {
  res.send("Welcome to the Home Page!");
});

// Route 2: About
app.get("/about", (_req, res) => {
  res.send("This is the About Page.");
});

// Fallback for unmatched routes
app.use((_req, res) => {
  res.status(404).send("404 - Page not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
