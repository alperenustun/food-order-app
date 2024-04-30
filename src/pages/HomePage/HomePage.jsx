import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import PaymentConfirmation from "@/components/PaymentConfirmation/PaymentConfirmation"

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1 className="homePagetext" >Homepage example</h1>
        <div className="paymentConfirmation">
          <PaymentConfirmation />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
