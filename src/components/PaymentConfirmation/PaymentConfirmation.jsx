import "./PaymentConfirmation.scss";
import React, { useState } from 'react';
import ConfirmationFood from "./ConfirmationFood/ConfirmationFood.jsx"

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
    price: 190,
    quantity: 12,
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
  }
];

function PaymentConfirmation() {
  const [foods, setFoods] = useState(mockFoodData);

  const handleDeleteFood = (foodId) => {
    const updatedFoods = foods.filter(food => food.id !== foodId);
    setFoods(updatedFoods);
  };

  return (
    <div className="PaymentConfirmation">
      <div className="PaymentConfirmation-box">
      <h2 className="PaymentConfirmation-box-h2">Orders #34562</h2>
        <div className="PaymentConfirmation-Button-Box">
          <button className="PaymentConfirmation-Button">Dine In</button>
          <button className="PaymentConfirmation-Button">To Go</button>
          <button className="PaymentConfirmation-Button">Delivery</button>
        </div>
        <div className="PaymentConfirmationtitle">
          <h3 className="PaymentConfirmationtitle-h3">Item</h3>
          <div>
            <h3 className="PaymentConfirmationtitle-h3">Qty</h3>
            <h3 className="PaymentConfirmationtitle-h3">Item</h3>
          </div>
        </div>

        <div className="food-container">
          {foods.map((food) => (
            <ConfirmationFood key={food.id} food={food} onDelete={() => handleDeleteFood(food.id)} />
          ))}
        </div>
        <div className="PaymentConfirmation-Subtotal">
          <h3 className="PaymentConfirmation-Subtotal-h3">Discount</h3>
          <h3 className="PaymentConfirmation-Subtotal-value">$ 0</h3>
        </div>
        <div className="PaymentConfirmation-Subtotal">
          <h3 className="PaymentConfirmation-Subtotal-h3">Sub total</h3>
          <h3 className="PaymentConfirmation-Subtotal-value">$ {mockFoodData.reduce((acc, food) => acc + food.price * food.quantity, 0)}</h3>
        </div>
        <button className="PaymentConfirmation-button-payment">Continue to Payment</button>

      </div>
    </div>
  );
}

export default PaymentConfirmation;