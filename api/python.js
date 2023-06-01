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
  res.json({
    names: python.data1,
    questions: python.data2,
  });
};

module.exports = handler;
