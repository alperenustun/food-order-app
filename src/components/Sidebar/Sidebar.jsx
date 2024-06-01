import { useState } from "react";
import "./Sidebar.scss";
import homepagehome from "../../assets/homepagehome.svg";
import { NavLink } from "react-router-dom";

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
              src={homepagehome}
            />
          </li>
          <li>
            <NavLink to="/" >
              <img src="src/assets/Homepage-icon.svg" alt="icon" />
            </NavLink>
          </li>
          <li><NavLink to="/discount" >
            <img src="src/assets/Discount-icon.svg" alt="icon" />
          </NavLink>
          </li>
          <li>
            <NavLink to="/notification" >
              <img src="src/assets/Notification-icon.svg" alt="icon" />
            </NavLink></li>
          <li><NavLink to="/message" >
            <img src="src/assets/Message-icon.svg" alt="icon" />
          </NavLink></li>
          <li><NavLink to="/settings/:tabName" >
            <img src="src/assets/Setting-icon.svg" alt="icon" />
          </NavLink></li>
          <li>
            <NavLink to="/login">
              <img src="src/assets/Log-Out-icon.svg" alt="icon" />
            </NavLink></li>
        </ul>
      </nav>
      {/* these examples should be deleted */}
    </aside>
  );
}

export default Sidebar;
