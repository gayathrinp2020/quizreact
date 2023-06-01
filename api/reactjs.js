const reactjs = require("./data/reactq");

const handler = async (req, res) => {
  res.json(reactjs);
};

module.exports = handler;
