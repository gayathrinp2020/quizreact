const reactjs = require("./data/reactq");
const cors = require("cors");

app.use(cors());
const handler = async (req, res) => {
  res.json(reactjs);
};

module.exports = handler;
