const express = require("express");
const app = express();
const port = 3000;
app.get("/api/pythonques", (req, res) => {
  const Questionset = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      question: "Who invented the telephone?",
      answer: "Alexander Graham Bell",
    },
    // Add more questions to the questionSet array
  ];
  res.json(Questionset);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
