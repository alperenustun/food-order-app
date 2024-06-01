import { useState } from "react";
import "./FoodCard.scss";
import EditPanel from "../EditPanel/EditPanel";

function FoodCard({ food, setDishes, dishes, onEditClick, onCancelEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(food.description);
    const [editedPrice, setEditedPrice] = useState(food.price);

    const handleEditClick = () => {
        setIsEditing(true);
        if (onEditClick) {
            onEditClick();
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        // Düzenlemeyi iptal ederken orijinal değerlere geri döner
        setEditedDescription(food.description);
        setEditedPrice(food.price);
        if (onCancelEdit) {
            onCancelEdit();
        }
    };

    const handleSaveEdit = () => {
        // Düzenlenmiş değerleri dishes dizisindeki ilgili nesnenin özelliklerini güncelleyerek kaydedir
        const updatedDishes = dishes.map((dish) => {
            if (dish.id === food.id) {
                return { ...dish, description: editedDescription, price: editedPrice };
            }
            return dish;
        });

        // dishes dizisini güncelle
        setDishes(updatedDishes);
        setIsEditing(false);
    };

    return (
        <div className="food-card">
            <img src={food.image} alt="Food" />
            {!isEditing ? (
                <>
                    <p className="food-card-p">{food.description}</p>
                    <h4 className="food-card-title">{food.price}</h4>
                    <div className="food-card-box-btn">
                        <button className="food-card-btn" onClick={handleEditClick}>
                            Edit dish
                        </button>
                    </div>
                </>
            ) : (
                <EditPanel
                    editedDescription={editedDescription}
                    setEditedDescription={setEditedDescription}
                    editedPrice={editedPrice}
                    setEditedPrice={setEditedPrice}
                    onCancelEdit={handleCancelEdit}
                    onSaveEdit={handleSaveEdit}
                />
            )}
        </div>
    );
}

export default FoodCard;
