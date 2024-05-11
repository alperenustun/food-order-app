import React, { useState } from 'react';
import "./ProductsManagement.scss";
import { dishes } from '../../assets/db/dishes';

function ProductsManagement() {
    const categories = [
        "Hot Dishes",
        "Cold Dishes",
        "Soup",
        "Grill",
        "Appetizer",
        "Dessert",
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Varsayılan olarak ilk kategoriyi seç

    function FoodCard({ food }) {
        return (
            <div className="food-card">
                <img src={food.image} alt="Food" />
                <p className='food-card-p'>{food.description}</p>
                <h4 className='food-card-title'>{food.price}</h4>
                <div className="food-card-box-btn">
                    <img></img>
                    <button className="food-card-btn">Edit dish</button>
                </div>

            </div>
        )
    }

    return (
        <div className="products-management">
            <div className="products-management-title-section">
                <div className="products-management-title-box">
                    <h1 className="products-management-title">Products Management</h1>
                    <button className="products-management-title-box-btn">
                        <img src="Option.png" alt="Manage Categories" /> Manage Categories
                    </button>
                </div>
                <div>
                    <ul className="products-management-link-box">
                        {categories.map((category, index) => (
                            <li
                                className={`category-item ${category === selectedCategory ? 'active' : ''}`}
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
                            <img src="Artı.svg" alt="Add new dish" />
                        </button>
                        <h4>Add new dish</h4>
                    </div>
                    {dishes
                        .filter(food => selectedCategory === "Hot Dishes" || food.category === selectedCategory)
                        .map(food => (
                            <FoodCard key={food.id} food={food} />
                        ))}
                </div>
                <div className="products-management-button-box">
                    <button className="products-management-button-box-btn">Discard Changes</button>
                    <button className="products-management-button-box-btn">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default ProductsManagement;
