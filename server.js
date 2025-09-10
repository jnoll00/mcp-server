// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple test route
app.get("/", (req, res) => {
  res.send("MCP server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
