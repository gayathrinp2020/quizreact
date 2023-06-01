const javascript = require("./data/javascriptq");

const handler = async (req, res) => {
  res.json(javascript);
};

module.exports = handler;
