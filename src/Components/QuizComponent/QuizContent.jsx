import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import "./quizstyle.css";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#EFEFEF",
    backgroundImage: "url('trophy.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  content: {
    fontSize: "18px",
    marginBottom: "10px",
  },
});

const Certificate = ({ score, totalQuestions }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Certificate of Achievement</Text>
      <Text style={styles.content}>
        Congratulations! You scored {score} out of {totalQuestions}.
      </Text>
      <Text style={styles.content}>
        Percentage: {((score * 100) / totalQuestions).toFixed(1)}%
      </Text>
      <Text style={styles.content}>
        Result:{" "}
        {((score * 100) / totalQuestions).toFixed(1) >= 70.0
          ? "Passed"
          : "Failed"}
      </Text>
    </Page>
  </Document>
);

const QuizContent = ({questions}) => {
  // const [questions] = props;
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
          <div className="score-percentage">
            Percentage = {((score * 100) / questions.length).toFixed(1)} %
          </div>
          <div className="score-comment">
            {((score * 100) / questions.length).toFixed(1) >= 70.0
              ? "Passed"
              : "Failed"}
          </div>
          <div>
            {((score * 100) / questions.length).toFixed(1) >= 90.0
              ? "Excellent"
              : null}
          </div>
          <div className="restart">
            <button className="restart-button" onClick={handleRestartQuiz}>
              Restart
            </button>
          </div>
          <div className="download-certificate">
            <PDFDownloadLink
              document={
                <Certificate score={score} totalQuestions={questions.length} />
              }
              fileName="certificate.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading..." : "Download Certificate"
              }
            </PDFDownloadLink>
          </div>
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

export default QuizContent;
