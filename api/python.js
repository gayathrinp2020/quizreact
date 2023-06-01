const python = require("./data/python");

const handler = async (req, res) => {
  res.json(python);
};

module.exports = handler;
