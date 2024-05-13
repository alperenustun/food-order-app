import React from "react";
import "./EditPanel.scss";

function EditPanel({ editedDescription, setEditedDescription, editedPrice, setEditedPrice, onCancelEdit, onSaveEdit }) {

    const handleSaveEdit = () => {
        onSaveEdit(); // onSaveEdit fonksiyonunu çağır
    };

    const handleCancelEdit = () => {
        onCancelEdit(); // onCancelEdit fonksiyonunu çağır
    };

    return (
        <div className="edit-panel-section">
            <div className="edit-panel-section-ınput-box">
                <input
                    type="text"
                    name="description"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                />
                <input
                    type="text"
                    name="price"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                />
            </div>
            <div className="edit-panel-section-btn-box">
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
            </div>

        </div>
    );
};

export default EditPanel;