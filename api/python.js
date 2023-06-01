const python = require("./data/pythonq");

const handler = async (req, res) => {
  res.json(python);
};

module.exports = handler;
