import React, { useState } from "react";
import "./AddDishModal.scss";

function AddDishModal({ isModalOpen, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  function handleFormInput(e) {
    const value = e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  function handleAddDish() {
    console.log(formData);
    setFormData({
      name: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    });
    setIsModalOpen(false);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-input">
          <input
            className="text-input"
            type="text"
            name="name"
            placeholder="Dish Name"
            onChange={handleFormInput}
            value={formData.name}
          />
          <input
            className="text-input"
            type="number"
            name="price"
            placeholder="₺"
            onChange={handleFormInput}
            value={formData.price}
          />
          <input type="file" className="text-input" />
        </div>
        <div className="button-group">
          <button className="modal-btn" onClick={handleCloseModal}>Cancel</button>
          <button className="add-btn" onClick={handleAddDish}>Add Dish</button>
        </div>
      </div>
    </div>
  );
}

export default AddDishModal;
