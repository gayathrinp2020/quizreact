const python = require("./data/pythonq");
const cors = require("cors");

app.use(cors());
const handler = async (req, res) => {
  res.json(python);
};

module.exports = handler;
