import React, { useState } from 'react';
import "./EditPanel.scss";

function EditPanel({ initialDescription, initialPrice, onSave, onCancel }) {
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);

    const handleSave = () => {
        onSave(description, price);
        onCancel();
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    return (
        <div className="edit-panel-section">
            <div className="edit-panel-section-box-input">
                <input className="edit-panel-section-input"
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <input className="edit-panel-section-input"
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <div className="edit-panel-section-box-btn">
                <button className="edit-panel-section-btn" onClick={handleSave}>Save</button>
                <button className="edit-panel-section-btn" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}



export default EditPanel;