import React from "react";
import "./DishesMenu.scss";
function DishesMenu({ filteredDishes }) {

    return (
        <div>
            <div className="dishes-container">
                <h3>Choose Dishes</h3>
                <select className="dishes-btn-select" name="" id="">
                    <option value="dineın">Dine In</option>
                    <option value="Togo">To go</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>
            <ul className="dishes-boxes">
                {filteredDishes.map((tab) => (
                    <li key={tab.id} className="dishes-box">
                        <div className="dishes-box-content">
                            <img src={tab.image} className="dishes-box-image" />
                            <div className="dishes-description">{tab.description}</div>
                            <div className="dishes-price">{tab.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DishesMenu;
