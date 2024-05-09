
import { useState } from "react";
import "./HomePage.scss";
import { foods } from "@/assets/db/foods";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAuth } from "@/components/AuthProvider";
import DishesMenu from "@/components/DishesMenu/DishesMenu";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import PaymentConfirmation from "@/components/PaymentConfirmation/PaymentConfirmation"

function HomePage() {
  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz

  const [dishes, setDishes] = useState(foods);
  const [filteredDishes, setFilteredDishes] = useState(foods);

  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1>Homepage example</h1>
        <CategoryTabs setFilteredDishes={setFilteredDishes} dishes={dishes} />
        <DishesMenu filteredDishes={filteredDishes} />
        <div className="paymentConfirmation">
          <PaymentConfirmation />
        </div>
      </div>
    </div>
  );
}

export default HomePage;