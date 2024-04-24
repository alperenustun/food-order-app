import React, { useState } from "react";
import "./CategoryTabs.scss";

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Category1",
    },
    {
      id: 2,
      name: "Category2",
    },
    {
      id: 3,
      name: "Category3",
    },
    {
      id: 4,
      name: "Category4",
    },
    {
      id: 5,
      name: "Category5",
    },
    {
      id: 6,
      name: "Category6",
    },
  ];

  function handleTabClick(tabId) {
    setActiveTab(tabId);
  }

  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active-tab" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryTabs;
