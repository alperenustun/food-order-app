import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import OrderReports from "../OrderReports/OrderReports";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";

const orders = [
  // ...sipariş verileriniz burada olmalı...
  {
    customerName: "Eren Jaegar",
    customerAvatar: avatar1,
    menu: "Spicy seasoned seafood noodles ",
    totalPayment: 125,
    status: "Completed",
  },
  {
    customerName: "Reiner Braunn",
    customerAvatar: avatar2,
    menu: "Salted Pasta with mushroom sauce",
    totalPayment: 145,
    status: "Preparing",
  },
  {
    customerName: "Levi Ackerman",
    customerAvatar: avatar3,
    menu: "Beef dumpling in hot and sour soup",
    totalPayment: 105,
    status: "Pending",
  },
  {
    customerName: "Historia Reiss",
    customerAvatar: avatar4,
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 45,
    status: "Completed",
  },
  {
    customerName: "Hanji Zoe",
    customerAvatar: avatar5,
    menu: "Sichuan hot pot mixed seafood",
    totalPayment: 245,
    status: "Completed",
  },
];

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <OrderReports orders={orders} />
      {/* <Sidebar />
      <div className="mainRoot">
      </div> */}
    </div>
  );
}

export default HomePage;
