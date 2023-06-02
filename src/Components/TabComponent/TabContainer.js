import React, { useEffect, useState, useRef } from "react";
import Tabs from "../TabComponent/Tabs";
import { useLocation } from "react-router-dom";

function TabContainer({ topic }) {
  const [Questionset, setQuestions] = useState([]);
  const [Quiznames, setQuiznames] = useState([]);
  const location = useLocation();
  const prevLocationRef = useRef(location);

  useEffect(() => {
    if (prevLocationRef.current.pathname !== location.pathname) {
      localStorage.removeItem("activeTab");
      prevLocationRef.current = location;
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(topic);
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
export default TabContainer;
