import MostTypeOfOrder from "@/components/MostTypeOfOrder/MostTypeOfOrder";
import Sidebar from "@/components/Sidebar/Sidebar";
import OrderReports from "@/components/OrderReports/OrderReports";
import DashboardAnalyticsHeader from "@/components/DashboardAnalyticsHeader/DashboardAnalyticsHeader";

import "./DashboardPage.scss";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dasboard-page-order">
        <DashboardAnalyticsHeader />
        <OrderReports />
      </div>
      <div className="dasboard-page-most-order">
        <MostTypeOfOrder />
        <MostTypeOfOrder />
      </div>
    </div>
  );
}

export default Dashboard;
