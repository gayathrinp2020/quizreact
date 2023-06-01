const javascript = require("./data/javascriptq");

const handler = async (req, res) => {
  res.json({
    nmaes: javascript.data1,
    questions: javascript.data2,
  });
};

module.exports = handler;
