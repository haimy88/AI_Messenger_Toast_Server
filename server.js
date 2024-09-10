const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a port
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Toast Server!");
});

// Simple toast message route
app.post("/toast", (req, res) => {
  const { message } = req.body;
  if (message) {
    return res.status(200).json({ toast: `Your toast message is: ${message}` });
  } else {
    return res.status(400).json({ error: "No message provided!" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Toast Server is running on http://localhost:${PORT}`);
});
