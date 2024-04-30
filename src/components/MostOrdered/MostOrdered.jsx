import { useState } from "react";
import "./MostOrdered.scss";
import MostOrderedModal from "../MostOrdered/MostOrderedModal/MostOrderedModal";

function MostOrdered() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleModalState() {
        setIsModalOpen((prevModalState) => !prevModalState);
    }

    // foodItems artık bir state
    const [foodItems, setFoodItems] = useState([
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            imageSrc: "../src/assets/food1.png",
            quantity: 200,
            totalPrice: 0,
            OrderNote: "",
        },
        {
            id: 2,
            name: "Salted Pasta with mushroom sauce",
            price: 2.69,
            imageSrc: "../src/assets/food2.png",
            quantity: 120,
            totalPrice: 0,
            OrderNote: "",
        },
        {
            id: 3,
            name: "Beef Dumpling in hot and sour soup",
            price: 2.99,
            imageSrc: "../src/assets/food3.png",
            quantity: 80,
            totalPrice: 0,
            OrderNote: "",
        },
    ]);

    return (
        <div className="order-conf-main">
            <div className="title-order-conf">
                <div className="part-of-title-conf">
                    <h1 className="h1-order-conf">Most Ordered</h1>

                    <select
                        name="order-types"
                        id="order-types"
                        className="order-types-period"
                    >
                        <option value="">Select a period...</option>
                        <option value="dine-in" selected>
                            Today
                        </option>
                        <option value="dine-out">On Week</option>
                        <option value="dine-on">On Month</option>
                        <option value="dine-under">On Year</option>
                    </select>
                </div>
            </div>

            {foodItems.map((foodItem) => (
                <div className="order-conf-body" key={foodItem.id}>
                    <div className="conf-left-order-part">
                        <div className="conf-pic-and-name-and-price">
                            <div className="conf-pic-and-name-and-price-2">
                                <img
                                    src={foodItem.imageSrc}
                                    alt=""
                                    className="food-photos-order-conf"
                                />
                                <div className="name-and-price">
                                    <p className="name-and-price-p">{foodItem.name}</p>
                                    <p className="name-and-price-p-p">
                                        {foodItem.quantity} dishes ordered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={handleModalState} className="view-all-orders">
                View All
            </button>

            <div className="discount-subtotal-div-line"></div>

            {isModalOpen && (
                <MostOrderedModal mostOrderedFoods={foodItems} handleModalState={handleModalState} />
            )}
        </div>
    );
}

export default MostOrdered;
