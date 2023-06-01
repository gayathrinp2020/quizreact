const python = require("./data/pythonq");

const handler = async (req, res) => {
  const [data1, data2] = await Promise.all([
    fetchQuiznames(),
    fetchQuestions(),
  ]);
  res.json({ data1, data2 });
};

module.exports = handler;
