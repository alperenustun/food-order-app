import "./MostOrderedModal.scss";

function MostOrderedModal({ mostOrderedFoods, handleModalState }) {
    return (
        <div className="mainContainer-of-most-order-modal">
            <div className="innerCont-of-most-order-modal">
                <h1 className="most-order-modal-header">Most Ordered Foods</h1>
                {mostOrderedFoods.map((food) => (
                    <h3 className="food-title-most-ordered-modal" key={food.id}>
                        {food.name} | {food.quantity} orders
                    </h3>
                ))}
                <button className="most-ordered-modal-btn" onClick={handleModalState}>Close (X)</button>
            </div>
        </div>
    );
}

export default MostOrderedModal;
