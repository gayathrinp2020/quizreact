import React, { useEffect, useState } from "react";
import "../QuizComponent/quizstyle.css";

const QuizContent1 = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [wrongAttempt, setWrongAttempt] = useState(0);
  const [indexNumber, setIndexNumber] = useState(0);
  const [showScoreModal, setShowScoreModal] = useState(false);

  useEffect(() => {
    handleQuestions(0);
  }, []);

  const questions = [
    // Questions data
    // ...
  ];

  const handleQuestions = () => {
    const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffledQuestions(shuffled);
  };

  const handleNextQuestion = () => {
    checkForAnswer();
    unCheckRadioButtons();
    setTimeout(() => {
      if (indexNumber + 1 < shuffledQuestions.length) {
        setIndexNumber((prevIndex) => prevIndex + 1);
        setQuestionNumber((prevNumber) => prevNumber + 1);
      } else {
        handleEndGame();
      }
      resetOptionBackground();
    }, 1000);
  };

  const checkForAnswer = () => {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
        correctOption = option.labels[0].id;
      }
    });

    if (
      options[0].checked === false &&
      options[1].checked === false &&
      options[2].checked === false &&
      options[3].checked === false
    ) {
      alert("Please select an option");
    }

    options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = "green";
        setPlayerScore((prevScore) => prevScore + 1);
        setIndexNumber((prevIndex) => prevIndex + 1);
        setTimeout(() => {
          setQuestionNumber((prevNumber) => prevNumber + 1);
        }, 1000);
      } else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id;
        document.getElementById(wrongLabelId).style.backgroundColor = "red";
        document.getElementById(correctOption).style.backgroundColor = "green";
        setWrongAttempt((prevAttempt) => prevAttempt + 1);
        setIndexNumber((prevIndex) => prevIndex + 1);
        setTimeout(() => {
          setQuestionNumber((prevNumber) => prevNumber + 1);
        }, 1000);
      }
    });
  };

  const resetOptionBackground = () => {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
  };

  const unCheckRadioButtons = () => {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  };

  const handleEndGame = () => {
    setShowScoreModal(true);
  };

  return (
    <div className="quiz-container">
      {shuffledQuestions.length > 0 && (
        <div className="quiz-content">
          <div className="question-container">
            <div className="question-count">
              <span>Question {questionNumber}</span>/{shuffledQuestions.length}
            </div>
            <div className="question-text">
              {shuffledQuestions[indexNumber].questionText}
            </div>
          </div>
          <div className="option-container">
            <div className="option">
              <label id="option1" className="option-label" htmlFor="option1">
                {shuffledQuestions[indexNumber].options[0]}
              </label>
              <input
                type="radio"
                name="option"
                id="option1"
                value={shuffledQuestions[indexNumber].options[0]}
              />
            </div>
            <div className="option">
              <label id="option2" className="option-label" htmlFor="option2">
                {shuffledQuestions[indexNumber].options[1]}
              </label>
              <input
                type="radio"
                name="option"
                id="option2"
                value={shuffledQuestions[indexNumber].options[1]}
              />
            </div>
            <div className="option">
              <label id="option3" className="option-label" htmlFor="option3">
                {shuffledQuestions[indexNumber].options[2]}
              </label>
              <input
                type="radio"
                name="option"
                id="option3"
                value={shuffledQuestions[indexNumber].options[2]}
              />
            </div>
            <div className="option">
              <label id="option4" className="option-label" htmlFor="option4">
                {shuffledQuestions[indexNumber].options[3]}
              </label>
              <input
                type="radio"
                name="option"
                id="option4"
                value={shuffledQuestions[indexNumber].options[3]}
              />
            </div>
          </div>
          <button className="next-button" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      )}
      {showScoreModal && (
        <div className="score-modal">
          <div className="score-modal-content">
            <h2>Quiz Ended</h2>
            <p>Your Score: {playerScore}</p>
            <p>Wrong Attempts: {wrongAttempt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizContent1;
