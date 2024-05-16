import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import MostTypeOfOrder from "@/components/MostTypeOfOrder/MostTypeOfOrder";

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1>Homepage example merhaba</h1>
        <MostTypeOfOrder />
      </div>
    </div>
  );
}

export default HomePage;
