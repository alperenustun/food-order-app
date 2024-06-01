import MostTypeOfOrder from "@/components/MostTypeOfOrder/MostTypeOfOrder";
import Sidebar from "@/components/Sidebar/Sidebar";

import "./DashboardPage.scss";

function Dashboard() {
    return (
        <div className="dashboard-page">
            <div className="dasboard-page-order">
            <Sidebar />
            </div>
            <div className="dasboard-page-most-order">
                <MostTypeOfOrder />
                
            </div>
        </div>
    );
}

export default Dashboard;
