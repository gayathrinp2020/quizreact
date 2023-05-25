import React from "react";
import Tab2 from "../Components/TabComponent/Tab2";

function Javascript() {
  const Quiznames = {
    prop1: "Basics",
    prop2: "Data Types",
    prop3: "JQuiz3",
    prop4: "JQuiz4",
    prop5: "JQuiz5",
    prop6: "JQuiz6",
  };

  return (
    <div>
      <Tab2 Quiznames={Quiznames} />
    </div>
  );
}

export default Javascript;
