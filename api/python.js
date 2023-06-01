const python = require("./data/pythonq");

const handler = async (req, res) => {
  res.json({
    names: python.data1,
    questions: python.data2,
  });
};

module.exports = handler;
