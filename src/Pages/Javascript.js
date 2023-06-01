import React, { useEffect, useState } from "react";
import Tabs from "../Components/TabComponent/Tabs";
const Quiznames = {
  prop1: "Basics",
  prop2: "Data Types",
  prop3: "Control Flow",
  prop4: "Function",
  prop5: "Arrays",
  prop6: "OOPs Concepts",
  prop7: "DOM and Event Handling",
  prop8: "Asynchronous JavaScript",
  prop9: "Regular Expressions",
};
function Javascript() {
  const [Questionset, setQuestions] = useState([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/javascript");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);
  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Javascript;
