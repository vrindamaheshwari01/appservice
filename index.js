const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ "msg": "Deploying the application" });
});

// Use process.env.PORT or default to 8001 (for local testing)
const PORT = process.env.PORT || 8001; 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
