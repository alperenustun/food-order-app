import { useState } from "react";
import "./SettingsBar.scss";




function SettingsBar() {
    return (
        <div className="settings-bar-section">
            <div className="settings-bar-section-box">
                <div>
                    <img src="src\assets\settings-images\Appereance.svg" alt="Profile" />
                    <div className="settings-bar-section-box-writing" >
                        <h2>Appereance</h2>
                        <p>Dark and Light mode, Font size</p>
                    </div>
                </div>
            </div>
            <div className="settings-bar-section-box">
                <div>
                    <img src="src\assets\settings-images\Restaurant.svg" alt="Profile" />
                    <div className="settings-bar-section-box-writing">
                        <h2>Your Restaurant</h2>
                        <p>Dark and Light mode, Font size</p>
                    </div>
                </div>
            </div>
            <div className="settings-bar-section-box">
                <div>
                    <img src="src\assets\settings-images\Appereance.svg" alt="Profile" />
                    <div className="settings-bar-section-box-writing">
                        <h2>Products Management</h2>
                        <p>Manage your product, pricing, etc</p>
                    </div>
                </div>
            </div>
            <div className="settings-bar-section-box">
                <div>
                    <img src="src\assets\settings-images\Notification.svg" alt="Profile" />
                    <div className="settings-bar-section-box-writing">
                        <h2>Notifications</h2>
                        <p>Customize your notifications</p>
                    </div>
                </div>
            </div>
            <div className="settings-bar-section-box">
                <div>
                    <img src="src\assets\settings-images\Security.svg" alt="Profile" />
                    <div className="settings-bar-section-box-writing">
                        <h2>Security</h2>
                        <p>Configure Password, PIN, etc</p>
                    </div>
                </div>
            </div>
            <div className="settings-bar-section-box">
                <div>
                    <img src="src\assets\settings-images\InfoCircle.svg" alt="Profile" />
                    <div className="settings-bar-section-box-writing">
                        <h2>About Us</h2>
                        <p>Find out more about Posly</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SettingsBar;