import { useState } from "react";
import "./DashboardAnalyticsHeader.scss";
import dashboardImage1 from "@/assets/dashboard-image/frame-up.png";
import dashboardImage2 from "@/assets/dashboard-image/coin.png";
import dashboardImage3 from "@/assets/dashboard-image/order.png";
import dashboardImage4 from "@/assets/dashboard-image/frame-68.png";
import dashboardImage5 from "@/assets/dashboard-image/customer.png";

function DashboardAnalyticsHeader() {
  return (
    <div className="dashboard-container">
      <div className="total-revenue box">
        <div className="dashboard-header">
          <img
            className="dashboard-header-image"
            src={dashboardImage2}
            alt=""
          />
          <div className="dashboard-header-status">
            <p className="dashboard-header-status-p">+32.40%</p>
            <img
              className="dashboard-header-status-image"
              src={dashboardImage1}
              alt=""
            />
          </div>
        </div>
        <div className="dashboard-content">
          <h5 className="dashboard-content-h5">$10,243.00</h5>
          <p className="dashboard-content-p">Total Revenue</p>
        </div>
      </div>
      <div className="Total-dish-ordered box">
        <div className="dashboard-header">
          <img
            className="dashboard-header-image"
            src={dashboardImage3}
            alt=""
          />
          <div className="dashboard-header-status">
            <p className="statistical-decline-p">-12.40%</p>
            <img src={dashboardImage4} alt="" />
          </div>
        </div>
        <div className="dashboard-content">
          <h5 className="dashboard-content-h5">23,456</h5>
          <p className="dashboard-content-p">Total Dish Ordered</p>
        </div>
      </div>
      <div className="Total-customer box">
        <div className="dashboard-header">
          <img
            className="dashboard-header-image"
            src={dashboardImage5}
            alt=""
          />
          <div className="dashboard-header-status">
            <p className="dashboard-header-status-p">+2.40%</p>
            <img src={dashboardImage1} alt="" />
          </div>
        </div>
        <div className="dashboard-content">
          <h5 className="dashboard-content-h5">1,234</h5>
          <p className="dashboard-content-p">Total Customer</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardAnalyticsHeader;
