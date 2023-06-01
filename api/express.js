const express = require("express");
const cors = require("cors");

const python = require("./data/python.js");
const javascript = require("./data/javascript.js");

const app = express();
app.use(cors());

app.get("/python", (req, res) => {
  res.json(python);
});

app.get("/javascript", (req, res) => {
  res.json(javascript);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
