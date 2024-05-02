import "./ConfirmationFood.scss";

function calculateTotalPrice(food) {
  const totalPrice = food.price * food.quantity;
  return totalPrice;
}

function ConfirmationFood({ food }) {
  const totalPrice = calculateTotalPrice(food);


  return (
    <div className="foodCard">
      <div className="foodCardBoxName">
        <div className="foodCardName">
          <h3 className="foodCardName-h3">{food.name}</h3>
          <p className="foodCardNameprice">$ {food.price}</p>
        </div>
        <div className="foodCardTotalprice">
          <p className="foodCardNamequantity">{food.quantity}</p>
          <p className="foodCardTotalprice-p">$ {totalPrice}</p>
        </div>
      </div>
      <div className="foodCardİnputButtonContainer">
        <input className="foodCardinput" type="text" placeholder="Order Note..."></input>
        <button className="foodCardbutton">
          <img className="foodCarddelete" src="@/../public/Trash.svg" alt="Trash.svg" />
        </button>
      </div>
    </div>
  );
}

export default ConfirmationFood;


