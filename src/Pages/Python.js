import React from "react";
import Tab1 from "../Components/TabComponent/Tab1";

function Python() {
  const Quiznames = {
    prop1: "Basics",
    prop2: "Data Types",
    prop3: "Quiz3",
    prop4: "Quiz4",
    prop5: "Quiz5",
    prop6: "Quiz6",
    prop7: "Quiz7",
    prop8: "Quiz8",
    prop9: "Quiz9",
    prop10: "Quiz10",
  };
  return (
    <div>
      <Tab1 Quiznames={Quiznames} />
    </div>
  );
}

export default Python;
