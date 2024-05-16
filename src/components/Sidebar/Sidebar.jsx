import { useState } from "react";
import "./Sidebar.scss";
import leftArrow from "/left-arrow.svg";

function Sidebar() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  function toggleSidebar() {
    setIsSidebarToggled(!isSidebarToggled);
  }

  return (
    <aside className={`sidebar ${!isSidebarToggled && "sidebar-collapsed"}`}>
      {/* these examples should be deleted */}
      <nav>
        <ul className="sidebar-navbar">
          <li className="left-arrow" onClick={toggleSidebar}>
            <img
              src={leftArrow}
              style={{
                transform: !isSidebarToggled
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            />
          </li>
          <li><img src="src/assets/Homepage-icon.svg" alt="icon" /></li>
          <li><img src="src/assets/Discount-icon.svg" alt="icon" /></li>
          <li><img src="src/assets/Notification-icon.svg" alt="icon" /></li>
          <li><img src="src/assets/Message-icon.svg" alt="icon" /></li>
          <li><img src="src/assets/Setting-icon.svg" alt="icon" /></li>
          <li><img src="src/assets/Log-Out-icon.svg" alt="icon" /></li>
        </ul>
      </nav>
      {/* these examples should be deleted */}
    </aside>
  );
}

export default Sidebar;
