const python = require("./data/pythonq");

const handler = async (req, res) => {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  res.json({ data1, data2 });
};

module.exports = handler;
