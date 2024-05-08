import { useState } from "react";
import "/src/pages/SettingsSidebar/SettingsSidebar.scss";

function SettingsSidebar() {

    const homeImg = "/src/assets/home.png";
    const likeImg = "/src/assets/like.png";
    const foImg = "/src/assets/foImg.png";
    const notificationImg = "/src/assets/notification.png";
    const lockImg = "/src/assets/lock.png";
    const settingImg = "/src/assets/setting.png";

    function makeActiveDiv(e) {
        e.stopPropagation(); // Olayın kabarcıklanmasını durdurur, 2 kere konsola yazdırmayı engeller
        console.log("clicked");

        // Tıklanan öğeden en yakın '.sidebar-div' öğesini bul
        const targetDiv = e.target.closest('.sidebar-div');

        if (targetDiv) {
            // Tüm '.sidebar-div' elementlerini seç ve arkaplanlarını varsayılan renge ayarla
            const allDivs = document.querySelectorAll('.sidebar-div');
            allDivs.forEach(div => {
                div.style.backgroundColor = '#1F1D2B'; // Diğer div'lerin arkaplanını varsayılan renge ayarla
            });

            // Tıklanan '.sidebar-div' öğesinin arkaplanını turuncu yap
            targetDiv.style.backgroundColor = '#EA7C6942';
        }


    }

    return (
        <div>
            <div className="settings-sidebar-main">

                <div className="sidebar-div" onClick={makeActiveDiv} id="appearance-sidebar-id">
                    <h3> <img src={likeImg} alt="" srcset="" />Appearance</h3>
                    <p>Dark and Light mode, Font size</p>
                </div>

                <div className="sidebar-div" onClick={makeActiveDiv} id="restaurant-sidebar-id">
                    <h3><img src={homeImg} alt="" srcset="" />Your Restaurant</h3>
                    <p>Dark and Light mode, Font size</p>
                </div>

                <div className="sidebar-div" onClick={makeActiveDiv} id="product-sidebar-id">
                    <h3><img src={settingImg} alt="" srcset="" />Product Management</h3>
                    <p>Manage your product, pricing, etc</p>
                </div>

                <div className="sidebar-div" onClick={makeActiveDiv} id="notifications-sidebar-id">
                    <h3><img src={notificationImg} alt="" srcset="" />Notifications</h3>
                    <p>Customize your notifications</p>
                </div>

                <div className="sidebar-div" onClick={makeActiveDiv} id="security-sidebar-id">
                    <h3><img src={lockImg} alt="" srcset="" />Security</h3>
                    <p>Configure Password, PIN, etc</p>
                </div>

                <div className="sidebar-div" onClick={makeActiveDiv} id="configure-sidebar-id">
                    <h3><img src={settingImg} alt="" srcset="" />Configure</h3>
                    <p>Display new features</p>
                </div>

                <div className="sidebar-div" onClick={makeActiveDiv} id="about-us-sidebar-id">
                    <h3><img src={foImg} alt="" srcset="" />About Us</h3>
                    <p>Find out more about Posly</p>
                </div>
            </div>
        </div>
    );
};

export default SettingsSidebar;