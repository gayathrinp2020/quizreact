import React, { useEffect, useState } from "react";
import Tabs from "../Components/TabComponent/Tabs";
const Quiznames = {
  prop1: "Basics",
  prop2: "Data Types",
  prop3: "Control Flow",
  prop4: "Function",
  prop5: "Data Structures",
  prop6: "File Handling",
  prop7: "Exception Handling",
  prop8: "OOPs Concept",
};
function Python() {
  const [Questionset, setQuestions] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/pythonques"); // Fetch from the server's endpoint
      const data = await response.json();
      setQuestions(data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div>
        {Questionset.map((question, index) => (
          <div key={index}>
            <h3>Question: {question.question}</h3>
            <p>Answer: {question.answer}</p>
          </div>
        ))}
      </div>
      {/* <Tabs Quiznames={Quiznames} /> */}
    </div>
  );
}

export default Python;
