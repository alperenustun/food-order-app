import "./PaymentConfirmation.scss";




function PaymentConfirmation() {
    return <div className="PaymentConfirmation">
        <div className="PaymentConfirmation-box">
            <div className="PaymentConfirmation-Button-Box">
                <button className="PaymentConfirmation-Button">Dine In</button>
                <button className="PaymentConfirmation-Button">To Go</button>
                <button className="PaymentConfirmation-Button">Delivery</button>
            </div>
            <div className="PaymentConfirmationtitle">
                <h3>Item</h3>
                <div>
                <h3>Qty</h3>
                <h3>Price</h3>
                </div>
            </div>
       </div>
    </div>

}

export default PaymentConfirmation;