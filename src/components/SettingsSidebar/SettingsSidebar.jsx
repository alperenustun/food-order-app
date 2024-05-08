import "@/components/SettingsSidebar/SettingsSidebar.scss";
import { NavLink } from "react-router-dom";
const homeImg = "/src/assets/home.png";
const likeImg = "/src/assets/like.png";
const foImg = "/src/assets/foImg.png";
const notificationImg = "/src/assets/notification.png";
const lockImg = "/src/assets/lock.png";
const settingImg = "/src/assets/setting.png";

function SettingsSidebar() {

    return (
        <div className="settings-sidebar-main">

            <NavLink to="/settings/appearance" id="appearance-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="appearance-sidebar-id" >
                    <h3 className="sidebar-header"> <img className="settings-sidebar-img" src={likeImg} alt="" srcSet="" />Appearance</h3>
                    <p className="settings-sidebar-title">Dark and Light mode, Font size</p>
                </button>
            </NavLink>

            <NavLink to="/settings/restaurant" id="restaurant-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="restaurant-sidebar-id" >
                    <h3 className="sidebar-header"><img className="settings-sidebar-img" src={homeImg} alt="" srcSet="" />Your Restaurant</h3>
                    <p className="settings-sidebar-title">Dark and Light mode, Font size</p>
                </button>
            </NavLink>

            <NavLink to="/settings/products" id="products-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="products-sidebar-id">
                    <h3 className="sidebar-header"><img className="settings-sidebar-img" src={settingImg} alt="" srcSet="" />Product Management</h3>
                    <p className="settings-sidebar-title">Manage your product, pricing, etc</p>
                </button>
            </NavLink>

            <NavLink to="/settings/notifications" id="notifications-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="notifications-sidebar-id">
                    <h3 className="sidebar-header"><img className="settings-sidebar-img" src={notificationImg} alt="" srcSet="" />Notifications</h3>
                    <p className="settings-sidebar-title">Customize your notifications</p>
                </button>
            </NavLink>
            <NavLink to="/settings/security" id="security-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="security-sidebar-id">
                    <h3 className="sidebar-header"><img className="settings-sidebar-img" src={lockImg} alt="" srcSet="" />Security</h3>
                    <p className="settings-sidebar-title">Configure Password, PIN, etc</p>
                </button>
            </NavLink>
            <NavLink to="/settings/configure" id="configure-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="configure-sidebar-id">
                    <h3 className="sidebar-header"><img className="settings-sidebar-img" src={settingImg} alt="" srcSet="" />Configure</h3>
                    <p className="settings-sidebar-title">Display new features</p>
                </button>
            </NavLink>
            <NavLink to="/settings/about-us" id="about-nav-id" className={(object) => {
                return object.isActive ? "sidebar-div-active" : "sidebar-div";
            }} >
                <button className="sidebar-btn-class" id="about-us-sidebar-id">
                    <h3 className="sidebar-header"><img className="settings-sidebar-img" src={foImg} alt="" srcSet="" />About Me</h3>
                    <p className="settings-sidebar-title">Find out more about me</p>
                </button>
            </NavLink>
        </div>
    );
};

export default SettingsSidebar;