import "./CategoryTabs.scss";
import { useState } from "react";

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "All Dishes",
    },
    {
      id: 2,
      name: "Cold Dishes",
    },
    {
      id: 3,
      name: "Soup",
    },
    {
      id: 4,
      name: "Grill",
    },
    {
      id:5,
      name:"Appetizer",
    },
    {
      id:6,
      name:"Dessert",
    }
  ];

  function handleTabClick(tabId) {
    setActiveTab(tabId);
  }

  return (
    <div className="tab-container">
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id && "active-tab"}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryTabs;
