import React, { useEffect, useState } from "react";
import Tabs from "../Components/TabComponent/Tabs";

function Python() {
  const [Questionset, setQuestions] = useState([]);
  const [Quiznames, setQuiznames] = useState([]);
  useEffect(() => {
    const fetchQuiznames = async () => {
      try {
        const response = await fetch("/api/python/data1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setQuiznames(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/python/data2");
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

    fetchQuiznames();
    fetchQuestions();
  }, []);
  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Python;
