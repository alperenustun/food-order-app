import { useState } from "react";
import "./MostOrdered.scss";
import MostOrderedModal from "../MostOrdered/MostOrderedModal/MostOrderedModal";

function MostOrdered({ foodItemsMost, setFoodItems }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleModalState() {
        setIsModalOpen((prevModalState) => !prevModalState);
    };

    const foodItemsMostOrdered = foodItemsMost;

    return (
        <div className="order-conf-main">
            <div className="title-order-conf">
                <div className="part-of-title-conf">
                    <h1 className="header-order-conf">Most Ordered</h1>

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

            {foodItemsMostOrdered.map((foodItem) => (
                <div className="order-conf-body" key={foodItem.id}>
                    <div className="conf-left-order-part">
                        <div className="conf-pic-and-name-and-price">
                            <div className="conf-pic-and-name-and-price-2">
                                <img
                                    src={foodItem.imageSrc}
                                    alt=""
                                    className="food-photos-order-conf"
                                />
                                <div className="conf-name-and-price">
                                    <p className="conf-name-and-price-p">{foodItem.name}</p>
                                    <p className="conf-name-and-price-p-p">
                                        {foodItem.quantity} dishes ordered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={handleModalState} className="view-all-orders-btn">
                View All
            </button>

            <div className="discount-subtotal-div-line"></div>

            {isModalOpen && (
                <MostOrderedModal mostOrderedFoods={foodItemsMost} handleModalState={handleModalState} />
            )}
        </div>
    );
}

export default MostOrdered;
