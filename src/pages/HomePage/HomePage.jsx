import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "../../components/AuthProvider";
import MostOrdered from "../../components/MostOrdered/MostOrdered";

function HomePage() {

  const [foodItemsMost, setFoodItems] = useState([
    {
      id: 1,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      imageSrc: "../src/assets/food1.png",
      quantity: 200,
      totalPrice: 0,
      OrderNote: "",
    },
    {
      id: 2,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      imageSrc: "../src/assets/food2.png",
      quantity: 120,
      totalPrice: 0,
      OrderNote: "",
    },
    {
      id: 3,
      name: "Beef Dumpling in hot and sour soup",
      price: 2.99,
      imageSrc: "../src/assets/food3.png",
      quantity: 80,
      totalPrice: 0,
      OrderNote: "",
    },
  ]);

  const auth = useAuth(); // auth'u const {fireStoreUser} = useAuth() şeklinde alırsanız user bilgilerine ulaşabilirsiniz
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <MostOrdered foodItemsMost={foodItemsMost} setFoodItems={setFoodItems} />
      </div>
    </div>
  );
}

export default HomePage;
