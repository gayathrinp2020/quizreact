import React, { useState } from "react";
import "./quizstyle.css"; // Import the CSS file for styling

const QuizContent2 = () => {
  const questions = [
      {
        question: "Which of the following is a Python data type for representing whole numbers?",
        options: ["String", "Integer", "Float", "Boolean"],
        answer: "Integer",
      },
      {
        question: "Which Python data type is used to represent a sequence of characters?",
        options: ["String", "Integer", "Float", "Boolean"],
        answer: "String",
      },
      {
        question: "What is the Python data type used to represent a true or false value?",
        options: ["String", "Integer", "Float", "Boolean"],
        answer: "Boolean",
      },
      {
        question: "Which Python data type is used to represent decimal numbers?",
        options: ["String", "Integer", "Float", "Boolean"],
        answer: "Float",
      },
      {
        question: "Which Python data type is used to represent a collection of elements, where each element can be accessed by its index?",
        options: ["String", "Integer", "List", "Boolean"],
        answer: "List",
      },
      {
        question: "What is the Python data type used to represent an unordered collection of unique elements?",
        options: ["String", "Integer", "Set", "Boolean"],
        answer: "Set",
      },
      {
        question: "Which Python data type is used to represent a key-value pair?",
        options: ["String", "Integer", "Dictionary", "Boolean"],
        answer: "Dictionary",
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

export default QuizContent2;
