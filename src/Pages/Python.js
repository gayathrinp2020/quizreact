import React, { useEffect, useState } from "react";
import Tabs from "../Components/TabComponent/Tabs";

function Python() {
  const [Questionset, setQuestions] = useState([]);
  const [Quiznames, setQuiznames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/python");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuiznames(data.names);
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Python;
