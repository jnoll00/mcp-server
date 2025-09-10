// server.js
const express = require('express');
const app = express();

// Use PORT from .env, default to 3000
const PORT = process.env.PORT || 3000;

// Use GitHub PAT from .env (just as an example)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Example route showing token length (never log the token in production)
app.get("/", (req, res) => {
  res.send(`MCP server is running! GitHub token length: ${GITHUB_TOKEN ? GITHUB_TOKEN.length : 0}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
