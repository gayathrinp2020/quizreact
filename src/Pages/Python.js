import React from "react";
import Tabs from "../Components/TabComponent/Tabs";
// import QuizContent1 from "../Components/QuizComponent/QuizContent1";

function Python() {
  const Quiznames = {
    prop1: "Quiz1",
    prop2: "Quiz2",
    prop3: "Quiz3",
    prop4: "Quiz4",
    prop5: "Quiz5",
    prop6: "Quiz6",
  };
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

  return (
    <div>
      <Tabs Quiznames={Quiznames} data={questions} />
    </div>
  );
}

export default Python;
