import { useState } from "react";
import "./DashboardAnalyticsHeader.scss";
import dashboardImage1 from "./../../assets/dashboard-image/frame-up.png";
import dashboardImage2 from "./../../assets/dashboard-image/coin.png";
import dashboardImage3 from "./../../assets/dashboard-image/icon.png";
import dashboardImage4 from "./../../assets/dashboard-image/frame-68.png";
import dashboardImage5 from "./../../assets/dashboard-image/customer.png";

function DashboardAnalytics() {
  return (
    <div className="dashboard-container">
      <div className="total-revenue box">
        <div className="dashboard-header">
          <img src={dashboardImage2} alt="" />
          <div>
            <p>+32.40%</p>
            <img src={dashboardImage1} alt="" />
          </div>
        </div>
        <div className="dashboard-content">
          <h5>$10,243.00</h5>
          <p>Total Revenue</p>
        </div>
      </div>
      <div className="Total-dish-ordered box">
        <div className="dashboard-header">
          <img src={dashboardImage3} alt="" />
          <div className="statistical-decline">
            <p>-12.40%</p>
            <img src={dashboardImage4} alt="" />
          </div>
        </div>
        <div className="dashboard-content">
          <h5>23,456</h5>
          <p>Total Dish Ordered</p>
        </div>
      </div>
      <div className="Total-customer box">
        <div className="dashboard-header">
          <img src={dashboardImage5} alt="" />
          <div>
            <p>+2.40%</p>
            <img src={dashboardImage1} alt="" />
          </div>
        </div>
        <div className="dashboard-content">
          <h5>1,234</h5>
          <p>Total Customer</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardAnalytics;