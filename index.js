const express = require("express");

const app = express();

// Default route
app.get("/", (req, res) => {
  res.json({ "msg": "Hello, this message is from the server" });
});

// Use process.env.PORT to use the port Azure assigns
const port = process.env.PORT || 8001;  // fallback to 8001 if the environment variable is not set

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
