import "./SettingsSidebar.scss";

function SettingsSidebar() {

    const homeImg = "/src/assets/home.png";
    const likeImg = "/src/assets/like.png";
    const foImg = "/src/assets/foImg.png";
    const notificationImg = "/src/assets/notification.png";
    const lockImg = "/src/assets/lock.png";
    const settingImg = "/src/assets/setting.png";

    function makeActiveDiv(e) {
        e.stopPropagation();

        const targetDiv = e.target.closest('.sidebar-div');

        if (targetDiv) {
            const allDivs = document.querySelectorAll('.sidebar-div');
            allDivs.forEach(div => {
                div.style.backgroundColor = '#1F1D2B';
                div.querySelector('h3').style.color = '#fff';
            });

            targetDiv.style.backgroundColor = '#EA7C6942';
            targetDiv.querySelector('h3').style.color = '#EA7C69';
        }
    }

    return (
        <div className="settings-sidebar-main">

            <button className="sidebar-div" onClick={makeActiveDiv} id="appearance-sidebar-id" tabIndex={0}>
                <h3> <img src={likeImg} alt="" srcSet="" />Appearance</h3>
                <p>Dark and Light mode, Font size</p>
            </button>

            <button className="sidebar-div" onClick={makeActiveDiv} id="restaurant-sidebar-id">
                <h3><img src={homeImg} alt="" srcSet="" />Your Restaurant</h3>
                <p>Find the Nearest Restaurant details</p>
            </button>

            <button className="sidebar-div" onClick={makeActiveDiv} id="product-sidebar-id">
                <h3><img src={settingImg} alt="" srcSet="" />Product Management</h3>
                <p>Manage your product, pricing, etc</p>
            </button>

            <button className="sidebar-div" onClick={makeActiveDiv} id="notifications-sidebar-id">
                <h3><img src={notificationImg} alt="" srcSet="" />Notifications</h3>
                <p>Customize your notifications</p>
            </button>

            <button className="sidebar-div" onClick={makeActiveDiv} id="security-sidebar-id">
                <h3><img src={lockImg} alt="" srcSet="" />Security</h3>
                <p>Configure Password, PIN, etc</p>
            </button>

            <button className="sidebar-div" onClick={makeActiveDiv} id="configure-sidebar-id">
                <h3><img src={settingImg} alt="" srcSet="" />Configure</h3>
                <p>Display new features</p>
            </button>

            <button className="sidebar-div" onClick={makeActiveDiv} id="about-us-sidebar-id">
                <h3><img src={foImg} alt="" srcSet="" />About Us</h3>
                <p>Find out more about Posly</p>
            </button>
        </div>
    );
};

export default SettingsSidebar;