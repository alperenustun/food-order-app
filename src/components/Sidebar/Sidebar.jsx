import { useState } from "react";
import "./Sidebar.scss";
import homepagehome from "../../assets/homepagehome.svg";
import { NavLink } from "react-router-dom";
import Homepageicon from "../../assets/Homepage-icon.svg";
import Discounticon from "../../assets/Discount-icon.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Messageicon from "../../assets/Message-icon.svg";
import Settingicon from "../../assets/Setting-icon.svg";
import Loginout from "../../assets/Loginicon.svg"

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
              <img src={Homepageicon} alt="icon" />
            </NavLink>
          </li>
          <li><NavLink to="/discount" >
            <img src={Discounticon} alt="icon" />
          </NavLink>
          </li>
          <li>
            <NavLink to="/notification" >
              <img src={Dashboard} alt="icon" />
            </NavLink>
          </li>
          <li><NavLink to="/message" >
            <img src={Messageicon} alt="icon" />
          </NavLink></li>
          <li><NavLink to="/settings/:tabName" >
            <img src={Settingicon} alt="icon" />
          </NavLink></li>
          <li>
            <NavLink to="/login">
              <img src={Loginout} alt="icon" />
            </NavLink></li>
        </ul>
      </nav>
      {/* these examples should be deleted */}
    </aside>
  );
}

export default Sidebar;
