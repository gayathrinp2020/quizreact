import React, { useState, useEffect } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import QuizContent from "../QuizComponent/QuizContent";
import { useLocation } from "react-router-dom";

const Tabs = (props) => {
  const { Quiznames, Questionset } = props;
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryTab = searchParams.get("activeTab");
    setActiveTab(queryTab || Object.keys(Quiznames)[0]);
  }, [location, Quiznames]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("activeTab", tabId);
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
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
            setActiveTab={() => handleTabChange(key)}
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
