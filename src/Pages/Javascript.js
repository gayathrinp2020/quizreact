import React from "react";
import Tabs from "../Components/TabComponent/Tabs";
import QuizContent1 from "../Components/QuizComponent/QuizContent1";

function Javascript() {
  const Quiznames = {
    prop1: "JQuiz1",
    prop2: "JQuiz2",
    prop3: "JQuiz3",
    prop4: "JQuiz4",
    prop5: "JQuiz5",
    prop6: "JQuiz6",
  };

  const Quizcomponents = {
    prop1: QuizContent1,
    prop2: QuizContent1,
  };
  return (
    <div>
      <Tabs Quiznames={Quiznames} Quizcomponents={Quizcomponents} />
    </div>
  );
}

export default Javascript;
