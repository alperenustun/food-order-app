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
  }
  ,
  {
    id: 1,
    name: "Islak Hamburger",
    price: 50,
    quantity: 5,
  }
];

function PaymentConfirmation() {
  const [foods, setFoods] = useState(mockFoodData);

  const handleDeleteFood = (foodId) => {
    const updatedFoods = foods.filter(food => food.id !== foodId);
    setFoods(updatedFoods);
  };

  return (
    <div className="paymentConfirmation">
      <div className="paymentConfirmationBox">
        <h2 className="paymentConfirmationBoxTitle2">Orders #34562</h2>
        <div className="paymentConfirmation-Button-Box">
          <button className="paymentConfirmation-Button">Dine In</button>
          <button className="paymentConfirmation-Button">To Go</button>
          <button className="paymentConfirmation-Button">Delivery</button>
        </div>
        <div className="paymentConfirmationtitle">
          <h3 className="paymentConfirmationtitle-title3">Item</h3>
          <div>
            <h3 className="paymentConfirmationtitle-title3">Qty</h3>
            <h3 className="paymentConfirmationtitle-title3">Item</h3>
          </div>
        </div>

        <div className="foodContainer">
          {foods.map((food) => (
            <ConfirmationFood key={food.id} food={food} onDelete={() => handleDeleteFood(food.id)} />
          ))}
        </div>
        <div className="paymentConfirmation-Subtotal">
          <h3 className="paymentConfirmation-Subtotal-title3">Discount</h3>
          <h3 className="paymentConfirmation-Subtotal-value">$ 0</h3>
        </div>
        <div className="paymentConfirmation-Subtotal">
          <h3 className="paymentConfirmation-Subtotal-title3">Sub total</h3>
          <h3 className="paymentConfirmation-Subtotal-value">$ {mockFoodData.reduce((acc, food) => acc + food.price * food.quantity, 0)}</h3>
        </div>
        <button className="paymentConfirmationButtonpayment">Continue to Payment</button>

      </div>
    </div>
  );
}

export default PaymentConfirmation;