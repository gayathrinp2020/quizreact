const javascript = require("./data/javascriptq");
const cors = require("cors");

app.use(cors());
const handler = async (req, res) => {
  res.json(javascript);
};

module.exports = handler;
