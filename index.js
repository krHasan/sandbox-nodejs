const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { generateResponse, history } = require("./controllers/index.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

//middleware to parse the body content to JSON
app.use(express.json());

app.post("/generate", generateResponse);

app.get("/generate", (req, res) => {
    res.send(history);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
