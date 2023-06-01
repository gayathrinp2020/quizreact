import React, { useEffect, useState } from "react";
import Tabs from "../Components/TabComponent/Tabs";
const Quiznames = {
  prop1: "Components",
  prop2: "JSX in React",
  prop3: "Props and State",
  prop4: "Lifecycle Methods",
  prop5: "React Router",
  prop6: "State Management",
  prop7: "Hooks",
};
function ReactJS() {
  const [Questionset, setQuestions] = useState([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3000/reactjs");
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

export default ReactJS;
