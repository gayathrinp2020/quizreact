import React, { useState } from "react";
import "./quizstyle.css"; // Import the CSS file for styling

const QuizContent1 = () => {
  const questions = [
    {
      question: "What is Java?",
      options: [
        "A programming language",
        "A type of coffee",
        "A database management system",
        "A software development framework",
      ],
      answer: "A programming language",
    },
    {
      question: "What is the syntax for printing in Java?",
      options: ["console.log()", "System.out.println()", "print()", "cout <<"],
      answer: "System.out.println()",
    },
    {
      question: "What is the result of the expression '3 + 2 * 4' in Java?",
      options: ["9", "20", "11", "7"],
      answer: "11",
    },
    {
      question: "Which of the following is not a Java data type?",
      options: ["String", "Integer", "Boolean", "Float"],
      answer: "Boolean",
    },
    {
      question: "What is the correct way to declare a variable in Java?",
      options: [
        "variable myVariable;",
        "myVariable = 10;",
        "int myVariable = 10;",
        "var myVariable = 10;",
      ],
      answer: "int myVariable = 10;",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setUserAnswer(option);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <div className="score-text">
            You scored {score} out of {questions.length}
          </div>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`answer-button ${
                  userAnswer === option ? "selected" : ""
                }`}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="next">
            <button
              className="next-button"
              onClick={handleNextQuestion}
              disabled={!userAnswer}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizContent1;
