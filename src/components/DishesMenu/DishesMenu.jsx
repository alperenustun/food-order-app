import React from "react";
import "./DishesMenu.scss";

function DishesMenu() {
    const tabs = [
        {
            id: 1,
            Image:"spicy.png",
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
            
        },
        {
            id: 2,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 3,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 4,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 5,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 6,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 7,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 8,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 9,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
    ];

    return (
        <div>
            <select className="btn-option" name="" id="">
                <option value="dineın">Dine In</option>
                <option value="Togo">To go</option>
                <option value="Delivery">Delivery</option>
            </select>
            <ul className="boxes">
                {tabs.map((tab) => (
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
