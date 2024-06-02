import MostTypeOfOrder from "@/components/MostTypeOfOrder/MostTypeOfOrder";
import Sidebar from "@/components/Sidebar/Sidebar";
import OrderReports from "@/components/OrderReports/OrderReports";
import DishesMenu from "@/components/DishesMenu/DishesMenu";

import "./DashboardPage.scss";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dasboard-page-order">
        <OrderReports />
      </div>
      <div className="dasboard-page-most-order">
        <DishesMenu />
        <MostTypeOfOrder />
      </div>
    </div>
  );
}

export default Dashboard;
