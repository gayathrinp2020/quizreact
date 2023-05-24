import React, { useState } from "react";
import "./quizstyle.css"; // Import the CSS file for styling

const QuizContent2 = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean in the world?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
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
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!userAnswer}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default QuizContent2;
