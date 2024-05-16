import { useState } from "react";
import "./AddDishModal.scss";

function AddDishModal() {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  function handleFormInput(e) {
    const value =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
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
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <input
          type="text"
          name="name"
          placeholder="Dish Name"
          onChange={handleFormInput}
          value={formData.name}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleFormInput}
          value={formData.price}
        />
        <div className="button-group">
          <button className="modal-btn">Cancel</button>
          <button className="add-btn" onClick={handleAddDish}>Add Dish</button>
        </div>
      </div>
    </div>
  );
}

export default AddDishModal;
