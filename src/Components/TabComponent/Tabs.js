import React, { useState, useEffect } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import QuizContent from "../QuizComponent/QuizContent";

const Tabs = (props) => {
  const { Quiznames, Questionset } = props;
  const firstTabKey = Object.keys(Quiznames)[0];
  const [activeTab, setActiveTab] = useState(firstTabKey);

  useEffect(() => {
    // Retrieve the active tab from localStorage on component mount
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab);
    }
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Store the active tab in localStorage
    localStorage.setItem("activeTab", tabId);
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        {/* Render tab nav items */}
        {Object.entries(Quiznames).map(([key, value]) => (
          <TabNavItem
            key={key}
            title={value}
            id={key}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />
        ))}
      </ul>

      <div className="outlet">
        {Questionset.map(({ tabKey, questions }) => (
          <TabContent key={tabKey} id={tabKey} activeTab={activeTab}>
            <QuizContent questions={questions} />
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
