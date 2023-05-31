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
      const response = await fetch("http://localhost:3000/api/pythonques");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Python;
