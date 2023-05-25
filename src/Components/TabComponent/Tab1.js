import React, { useState } from "react";
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import QuizContent1 from "../QuizComponent/QuizContent1";
import QuizContent2 from "../QuizComponent/QuizContent2";

const Tabs = (props) => {
  const { Quiznames } = props;
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title={Quiznames.prop1}
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title={Quiznames.prop2}
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title={Quiznames.prop3}
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title={Quiznames.prop4}
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 5"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 6"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 7"
          id="tab7"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 8"
          id="tab8"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 9"
          id="tab9"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tab 10"
          id="tab10"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <QuizContent1 />
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <QuizContent2 />
        </TabContent>

        <TabContent id="tab10" activeTab={activeTab}>
          <p>tab10 works!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
