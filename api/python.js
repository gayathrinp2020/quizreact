const python = require("./data/pythonq");

const fetchQuiznames = () => {
  // Assuming pythonq.fetchQuiznames() returns a promise
  return pythonq.fetchQuiznames();
};

const fetchQuestions = () => {
  // Assuming pythonq.fetchQuestions() returns a promise
  return pythonq.fetchQuestions();
};
const handler = async (req, res) => {
  const [data1, data2] = await Promise.all([
    fetchQuiznames(),
    fetchQuestions(),
  ]);
  res.json({ data1, data2 });
};

module.exports = handler;
