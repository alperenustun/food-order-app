import "./DishesMenu.scss";
import PropTypes from "prop-types";

function DishesMenu({ filteredDishes, setDishInfo }) {
  
  if (!filteredDishes) {
    return <div>Loading...</div>;
  }

  if (filteredDishes.length === 0) {
    return <div>No dishes available</div>;
  }

  return (
    <div>
      <div className="dishes-container">
        <h3>Choose Dishes</h3>
        <select className="dishes-btn-select" name="" id="">
          <option value="dinein">Dine In</option>
          <option value="togo">To go</option>
          <option value="delivery">Delivery</option>
        </select>
      </div>
      <ul className="dishes-boxes">
        {filteredDishes.map((tab) => (
          <li onClick={() => setDishInfo((oldTab) => [...oldTab, tab])} key={tab.id} className="dishes-box">
            <div className="dishes-box-content">
              <img src={tab.image} className="dishes-box-image" alt={tab.name} />
              <div className="dishes-description">{tab.description}</div>
              <div className="dishes-price">{tab.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

DishesMenu.propTypes = {
  filteredDishes: PropTypes.array.isRequired,
  setDishInfo: PropTypes.func.isRequired,
};

export default DishesMenu;