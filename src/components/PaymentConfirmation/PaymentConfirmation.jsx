import React, { useState } from "react";
import "./PaymentConfirmation.scss";
import ConfirmationFood from "./ConfirmationFood/ConfirmationFood.jsx";

const mockFoodData = [
  {
    id: 1,
    name: "Hamburger",
    price: 50,
    quantity: 2,
  },
  {
    id: 2,
    name: "Pizza",
    price: 125,
    quantity: 2,
  },
  {
    id: 3,
    name: "Makarna",
    price: 85,
    quantity: 5,
  },
  {
    id: 4,
    name: "Döner",
    price: 125,
    quantity: 2,
  },
  {
    id: 1,
    name: "Islak Hamburger",
    price: 50,
    quantity: 5,
  },
];

function PaymentConfirmation({dishInfo}) {
  const [foods, setFoods] = useState(mockFoodData);

  const handleDeleteFood = (foodId) => {
    const updatedFoods = dishInfo.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };

  const totalPrice = dishInfo.reduce(
    (acc, food) => acc + food.price * food.quantity,
    0
  );

  return (
    <div className="payment-confirmation">
      <div className="payment-confirmation-box">
        <h2 className="payment-confirmation-box-title2">Orders #34562</h2>
        <div className="payment-confirmation-button-box">
          <button className="payment-confirmation-button">Dine In</button>
          <button className="payment-confirmation-button">To Go</button>
          <button className="payment-confirmation-button">Delivery</button>
        </div>
        <div className="payment-confirmation-title">
          <h3 className="payment-confirmationtitle-title3">Item</h3>
          <div>
            <h3 className="payment-confirmationtitle-title3">Qty</h3>
            <h3 className="payment-confirmationtitle-title3">Item</h3>
          </div>
        </div>
        <div className="food-container">
          {dishInfo.map((food) => (
            <ConfirmationFood
              key={food.id}
              food={food}
              onDelete={() => handleDeleteFood(food.id)}
            />
          ))}
        </div>
        <div className="payment-confirmation-bottom">
          <div className="payment-confirmation-subtotal">
            <h3 className="payment-confirmation-subtotal-title3">Discount</h3>
            <h3 className="payment-confirmation-subtotal-value">$ 0</h3>
          </div>
          <div className="payment-confirmation-subtotal">
            <h3 className="payment-confirmation-subtotal-title3">Sub total</h3>
            <h3 className="payment-confirmation-subtotal-value">
              $ {totalPrice}
            </h3>
          </div>
          <button className="payment-confirmation-buttonpayment">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
