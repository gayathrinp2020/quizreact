import React, { useState } from "react";
import "./quizstyle.css"; // Import the CSS file for styling

const QuizContent22 = () => {
  const questions = [
      {
        question: "What is the data type used to represent whole numbers in Java?",
        options: ["int", "float", "boolean", "String"],
        answer: "int",
      },
      {
        question: "Which data type is used to represent a single character in Java?",
        options: ["char", "byte", "long", "double"],
        answer: "char",
      },
      {
        question: "Which data type is used to represent true or false values in Java?",
        options: ["boolean", "String", "int", "double"],
        answer: "boolean",
      },
      {
        question: "What is the data type used to represent decimal numbers with single precision in Java?",
        options: ["float", "double", "char", "long"],
        answer: "float",
      },
      {
        question: "Which data type is used to represent text in Java?",
        options: ["String", "int", "boolean", "byte"],
        answer: "String",
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

export default QuizContent22;
