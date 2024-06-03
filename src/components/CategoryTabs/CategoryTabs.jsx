import React, { useState } from "react";
import "./CategoryTabs.scss";

function CategoryTabs({ setFilteredDishes, dishes }) {
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
      id: 5,
      name: "Appetizer",
    },
    {
      id: 6,
      name: "Dessert",
    },
  ];

  function dishesClick(tab) {
    if (tab.name === "All Dishes") {
      setFilteredDishes(dishes);
    } else {
      const filteredDishes = dishes.filter(
        (dish) => dish.category === tab.name
      );
      setFilteredDishes(filteredDishes);
    }

    setActiveTab(tab.id);
  }

  return (
    <div>
      <ul className="tabs-wrapper">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => {
              dishesClick(tab);
            }}
            className={`tab ${activeTab === tab.id ? "active-tab" : ""}`}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryTabs;
