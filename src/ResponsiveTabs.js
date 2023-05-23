import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ScrollableTabs from 'react-scrollable-tabs';

import 'react-tabs/style/react-tabs.css';
import 'react-scrollable-tabs/dist/index.css';
import 'C:\Users\gayathrinair\Desktop\MY PROJECT\New folder\quizreact\src\ResponsiveTabs.css';

const ResponsiveTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="responsive-tabs-container">
      <ScrollableTabs
        activeKey={activeTabIndex}
        onSelect={handleTabSelect}
        scrollStep={80}
        visibleTabCount={4}
      >
        <TabList>
          <Tabs>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
            <Tab>Tab 5</Tab>
            {/* Add more tabs as needed */}
          </Tabs>
        </TabList>

        <TabPanel>
          <div className="tab-content">Content for Tab 1</div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">Content for Tab 2</div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">Content for Tab 3</div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">Content for Tab 4</div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">Content for Tab 5</div>
        </TabPanel>
        {/* Add more content panes as needed */}
      </ScrollableTabs>
    </div>
  );
};

export default ResponsiveTabs;
