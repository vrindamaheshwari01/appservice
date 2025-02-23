const express = require("express");

const app = express();

const data = process.env.NODE_ENV || "this is manual"

app.get("/", (req, res) => {
    res.json({ "msg": `emssage from the server ${data} ` });
});

// Use process.env.PORT or default to 8001 (for local testing)
const PORT = process.env.PORT || 8001; 


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `);
});
