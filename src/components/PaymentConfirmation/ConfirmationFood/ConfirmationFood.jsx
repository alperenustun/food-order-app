import "./ConfirmationFood.scss";

function calculateTotalPrice(food) {
  const totalPrice = food.price * food.quantity;
  return totalPrice;
}

function ConfirmationFood({ food }) {
  const totalPrice = calculateTotalPrice(food);


  return (
    <div className="menu-card">
      <div className="menu-card-box-name">
        <div className="menu-card-name">
          <h3 className="menu-card-name-title3">{food.name}</h3>
          <p className="menu-card-name-price">$ {food.price}</p>
        </div>
        <div className="menu-card-total-price">
          <p className="menu-card-name-quantity">{food.quantity}</p>
          <p className="menu-car-total-price-p">$ {totalPrice}</p>
        </div>
      </div>
      <div className="menu-card-ınputbuttoncontainer">
        <input className="menu-card-ınput" type="text" placeholder="Order Note..."></input>
        <button className="menu-card-button">
          <img className="menu-card-delete" src="@/../public/Trash.svg" alt="Trash.svg" />
        </button>
      </div>
    </div>
  );
}

export default ConfirmationFood;


