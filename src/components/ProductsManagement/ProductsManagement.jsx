import { useState } from "react";
import "./ProductsManagement.scss";


function ProductsManagement() {
    return (
        <div className="produckts-management">
            <div className="produckts-management-title-section" >
                <div className="produckts-management-title-box">
                    <h1 className="produckts-management-title3">Products Management</h1>
                    <button className="produckts-management-title-box-btn"><img className="" src="public/Option.png" alt="icon" /> Manage Categories</button>
                </div>
                <div>
                    <ul className="produckts-management-link-box">
                        <li><a href="#">Hot Dishes</a></li>
                        <li><a href="#">Cold Dishes</a></li>
                        <li><a href="#">Soup</a></li>
                        <li><a href="#">Grill</a></li>
                        <li><a href="#">Appetizer</a></li>
                        <li><a href="#">Dessert</a></li>
                    </ul>
                </div>
                <div className="produckts-management-button-box">
                    <button className="produckts-management-button-box-btn">Discard Changes</button>
                    <button className="produckts-management-button-box-btn">Save Changes</button>
                </div>
            </div>
        </div>

    );
}

export default ProductsManagement;
