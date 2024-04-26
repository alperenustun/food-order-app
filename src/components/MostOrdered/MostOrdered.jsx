import { useState } from "react";
import "./MostOrdered.scss";

function MostOrdered() {

    const downArrow = "../src/assets/down-arrow.png";

    // foodItems artık bir state
    const [foodItems, setFoodItems] = useState([
        { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0, OrderNote: "" },
        { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.69, imageSrc: "../src/assets/food2.png", quantity: 0, totalPrice: 0, OrderNote: "" },
        { id: 3, name: "Beef Dumpling in hot and sour soup", price: 2.99, imageSrc: "../src/assets/food3.png", quantity: 0, totalPrice: 0, OrderNote: "" },
    ]);


    return (
        <div>
            <div className="order-conf-main">

                <div className="title-order-conf">
                    <div class="part-of-title-conf">
                        <h1 class="h1-order-conf">Most Ordered</h1>


                        <select name="order-types" id="order-types" className="order-types-period">
                            <option value="" >Select a period...</option>
                            <option value="dine-in" selected>Today</option>
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
                                    <img src={foodItem.imageSrc} alt="" className="food-photos-order-conf" />
                                    <div className="name-and-price">
                                        <p className="name-and-price-p">{foodItem.name}</p>
                                        <p className="name-and-price-p-p">${foodItem.price.toFixed(2)}</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                ))}

                <button className="view-all-orders">View All</button>

                <div className="discount-subtotal-div-line"></div>

            </div>
        </div>
    );
}

export default MostOrdered;
