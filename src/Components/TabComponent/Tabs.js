import React, { useState, useEffect } from "react";
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import QuizContent1 from "../QuizComponent/QuizContent1";

const Tabs = (props) => {
  const { Quiznames, Questionset } = props;
  const [activeTab, setActiveTab] = useState("tab1");

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
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <QuizContent1 />
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <QuizContent2 />
        </TabContent>

        <TabContent id="tab3" activeTab={activeTab}>
          <p>tab3 works!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
