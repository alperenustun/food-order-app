import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import DashboardAnalyticsHeader from "@/components/DashboardAnalyticsHeader/DashboardAnalyticsHeader";

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1>Homepage example</h1>
        <DashboardAnalyticsHeader />
      </div>
    </div>
  );
}

export default HomePage;
