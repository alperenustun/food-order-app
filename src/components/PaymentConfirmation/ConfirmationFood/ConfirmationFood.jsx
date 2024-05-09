import "./ConfirmationFood.scss";

function calculateTotalPrice(food) {
  const totalPrice = food.price * food.quantity;
  return totalPrice;
}

function ConfirmationFood({ food }) {
  const totalPrice = calculateTotalPrice(food);


  return (
    <div className="food-card">
      <div className="food-card-box-name">
        <div className="food-card-name">
          <h3 className="food-card-name-title3">{food.name}</h3>
          <p className="food-card-name-price">$ {food.price}</p>
        </div>
        <div className="food-card-total-price">
          <p className="food-card-name-quantity">{food.quantity}</p>
          <p className="food-car-total-price-p">$ {totalPrice}</p>
        </div>
      </div>
      <div className="food-card-ınputbuttoncontainer">
        <input className="food-card-ınput" type="text" placeholder="Order Note..."></input>
        <button className="food-card-button">
          <img className="food-card-delete" src="@/../public/Trash.svg" alt="Trash.svg" />
        </button>
      </div>
    </div>
  );
}

export default ConfirmationFood;


