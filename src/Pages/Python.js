import React from "react";
import Tabs from "../Components/TabComponent/Tabs";
import QuizContent1 from "../Components/QuizComponent/QuizContent1";

function Python() {
  const Quiznames = {
    prop1: "Quiz1",
    prop2: "Quiz2",
    prop3: "Quiz3",
    prop4: "Quiz4",
    prop5: "Quiz5",
    prop6: "Quiz6",
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

export default Python;
