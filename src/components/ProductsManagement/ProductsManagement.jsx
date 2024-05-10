import React from 'react';
import "./ProductsManagement.scss";

function ProductsManagement() {
    const categories = [
        "Hot Dishes",
        "Cold Dishes",
        "Soup",
        "Grill",
        "Appetizer",
        "Dessert",
    ];

    return (
        <div className="products-management">
            <div className="products-management-title-section">
                <div className="products-management-title-box">
                    <h1 className="products-management-title3">Products Management</h1>
                    <button className="products-management-title-box-btn">
                        <img className="" src="public/Option.png" alt="icon" /> Manage Categories
                    </button>
                </div>
                <div>
                    <ul className="products-management-link-box">
                        {categories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div className="products-food-section">
                    <div className="new-product-box">
                        <button className="new-product-box-btn">
                            <img src="public/Artı.svg" alt="icon" />
                        </button>
                        <h4>Add new dish</h4>
                    </div>
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
