import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import OrderPaymentPage from "../OrderPaymentPage/OrderPaymentPage";

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      {/* <Sidebar /> */}
      <OrderPaymentPage />
      {/* <div className="mainRoot">
      </div> */}
    </div>
  );
}

export default HomePage;
