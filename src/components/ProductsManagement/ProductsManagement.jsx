import React, { useState } from "react";
import "./ProductsManagement.scss";
import { dishes as dbDishes } from "../../assets/db/dishes";
import FoodCard from "./FoodCard/FoodCard";
import Filter from "@/assets/Filter.svg";
import plus24 from "@/assets/plus24.svg";


function ProductsManagement() {
    const categories = [
        "Hot Dishes",
        "Cold Dishes",
        "Soup",
        "Grill",
        "Appetizer",
        "Dessert",
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [dishes, setDishes] = useState(dbDishes);

    return (
        <div className="products-management">
            <div className="products-management-title-section">
                <div className="products-management-title-box">
                    <h1 className="products-management-title">Products Management</h1>
                    <button className="products-management-title-box-btn">
                        <img src={Filter} alt="Manage Categories" /> Manage Categories
                    </button>
                </div>
                <div>
                    <ul className="products-management-link-box">
                        {categories.map((category, index) => (
                            <li
                                className={`category-item ${category === selectedCategory ? "active" : ""
                                    }`}
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="products-food-section">
                    <div className="new-product-box">
                        <button className="new-product-box-btn">
                            <img src={plus24} alt="Add new dish" />
                        </button>
                        <h4>Add new dish</h4>
                    </div>
                    {dishes
                        .filter(
                            (food) =>
                                selectedCategory === "Hot Dishes" ||
                                food.category === selectedCategory
                        )
                        .map((food) => (
                            <FoodCard
                                key={food.id}
                                food={food}
                                setDishes={setDishes}
                                dishes={dishes}
                            />
                        ))
                    }
                </div>
                <div className="products-management-button-box">
                    <button className="products-management-button-box-btn">
                        Discard Changes
                    </button>
                    <button className="products-management-button-box-btn">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductsManagement;


