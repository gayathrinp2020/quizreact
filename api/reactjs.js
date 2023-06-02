const reactjs = require("./data/reactq");

const handler = async (req, res) => {
  res.json({
    names: reactjs.data1,
    questions: reactjs.data2,
  });
};

module.exports = handler;
