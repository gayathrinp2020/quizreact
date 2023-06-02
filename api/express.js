const express = require("express");
const cors = require("cors");

const python = require("./data/pythonq.js");
const javascript = require("./data/javascriptq.js");
const reactjs = require("./data/reactq.js");

const app = express();
app.use(cors());

app.get("/python", (req, res) => {
  res.json(python);
});

app.get("/javascript", (req, res) => {
  res.json(javascript);
});

app.get("/reactjs", (req, res) => {
  res.json(reactjs);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
