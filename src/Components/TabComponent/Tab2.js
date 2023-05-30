import React, { useState, useEffect } from "react";
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import QuizContent11 from "../QuizComponent/QuizContent11";
import QuizContent22 from "../QuizComponent/QuizContent22";

const Tab2 = (props) => {
  // Accessing the passed props
  const { Quiznames } = props;
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
      <ul className="nav">
        <TabNavItem
          title={Quiznames.prop1}
          id="tab1"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title={Quiznames.prop2}
          id="tab2"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title={Quiznames.prop3}
          id="tab3"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title={Quiznames.prop4}
          id="tab4"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title="Tab 5"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title="Tab 6"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title="Tab 7"
          id="tab7"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title="Tab 8"
          id="tab8"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title="Tab 9"
          id="tab9"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <TabNavItem
          title="Tab 10"
          id="tab10"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <QuizContent11 />
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <QuizContent22 />
        </TabContent>

        <TabContent id="tab10" activeTab={activeTab}>
          <p>tab10 works!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tab2;
