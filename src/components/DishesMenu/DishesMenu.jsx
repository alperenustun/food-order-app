import React from "react";
import "./DishesMenu.scss";
import spicyImage from "@/assets/images/spicy.png";
import saltedImage from "@/assets/images/salted.svg";
import beefImage from "@/assets/images/foo.png";
import healtImage from "@/assets/images/healt.png";
import instImage from "@/assets/images/instant.png";
import seeImage from "@/assets/images/seafood.png";

function DishesMenu() {
    const tabs = [
        {
            id: 1,
            image: spicyImage,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",


        },
        {
            id: 2,
            image: saltedImage,
            description: "Salted pasta with mushroom sauce",
            price: "$ 2.29",
        },
        {
            id: 3,
            image: beefImage,
            description: "Beef dumpling in hot and sour soup",
            price: "$ 2.29",
        },
        {
            id: 4,
            image: healtImage,
            description: "Healthy noodle with spinach leaf",
            price: "$ 2.29",
        },
        {
            id: 5,
            image: healtImage,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 6,
            image: instImage,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 7,
            image: seeImage,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 8,
            image: saltedImage,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
        {
            id: 9,
            image: instImage,
            description: "Spicy seasoned seafood noodles",
            price: "$ 2.29",
        },
    ];

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
