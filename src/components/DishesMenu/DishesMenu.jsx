import React from "react";
import "./DishesMenu.scss";
import "../foods/foods.js";

import spicyImage from "@/assets/images/spicy.png";
import saltedImage from "@/assets/images/salted.svg";
import beefImage from "@/assets/images/foo.png";
import healtImage from "@/assets/images/healt.png";
import instImage from "@/assets/images/instant.png";
import seeImage from "@/assets/images/seafood.png";

function DishesMenu(filteredDishes) {

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
