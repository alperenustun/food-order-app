import React from "react";
import "./DishesMenu.scss";
function DishesMenu({ filteredDishes }) {

    return (
        <div>
            <div className="title">
                <h3>Choose Dishes</h3>
                <select className="btn-option" name="" id="">
                    <option value="dineın">Dine In</option>
                    <option value="Togo">To go</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>
            <ul className="boxes">
                {filteredDishes.map((tab) => (
                    <li key={tab.id} className="box">
                        <div className="box-content">
                            <img src={tab.image} className="box-image" />
                            <div className="description">{tab.description}</div>
                            <div className="price">{tab.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DishesMenu;
