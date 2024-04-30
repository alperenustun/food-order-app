import { useState } from "react";
import "./OrderPaymentPage.scss";

function OrderPaymentPage() {

    const cCard = "/src/assets/Card.png";
    const paypalPhoto = "/src/assets/Paypal.png";
    const cashPhoto = "/src/assets/Wallet.png";

    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        cvv: '',
        tableNo: '',
        PaymentOption: '',
        OrderType: ''
    });

    const [selectedDropDownOption, setSelectedDropDownOption] = useState('dine-in');

    const [PaymentOption, setSelectedPaymentOption] = useState(null);

    const [expiration, setExpiration] = useState('');

    const formatCardNumber = (input) => {
        let cardNumber = input.replace(/\D/g, '');
        cardNumber = cardNumber.slice(0, 16);
        cardNumber = cardNumber.replace(/(.{4})/g, '$1 ');
        console.log(cardNumber, "cardNumber");
        return cardNumber.trim();
    };

    const formatCvv = (input) => {
        let cardCvv = input.replace(/\D/g, '');
        cardCvv = cardCvv.slice(0, 3);

        return cardCvv;
    };

    const formatTableNo = (input) => {
        let tableNo = input.replace(/\D/g, '');
        tableNo = tableNo.slice(0, 3);

        return tableNo;
    }

    const formatCardHolderName = (input) => {
        let formattedName = input.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '');

        return formattedName;
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;

        if (name === 'cardNumber') {
            value = formatCardNumber(value);
            setFormData({ ...formData, [name]: value });

        }
        else if (name === 'cardHolderName') {
            value = formatCardHolderName(value);
            setFormData({ ...formData, [name]: value });
        }
        else if (name === 'cvv') {
            value = formatCvv(value);
            setFormData({ ...formData, [name]: value });
        }
        else if (name === 'tableNo') {
            value = formatTableNo(value);
            setFormData({ ...formData, [name]: value });
        }
        else if (name === 'PaymentOption') {
            setFormData({ ...formData, [name]: value });
        }
        else if (name === 'orderType') {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleOptionChange = (e) => {

        setFormData({ ...formData, PaymentOption: e.target.value });
        setSelectedPaymentOption(e.target.value);
        console.log(e.target.value);
    }

    const handleExpirationChange = (e) => {
        const { value } = e.target;
        let formattedValue = value.replace(/\D/g, '').slice(0, 6);

        if (formattedValue.length > 2) {
            formattedValue = formattedValue.replace(/(\d{2})/, '$1/');
        }

        setExpiration(formattedValue);
    };

    const handleSelectChange = (e) => {
        setSelectedDropDownOption(e.target.value);
        setFormData({ ...formData, OrderType: e.target.value });
        console.log(e.target.value);
    };

    const handleCancel = () => {

        setFormData({
            cardHolderName: '',
            cardNumber: '',
            cvv: '',
            tableNo: '',
            PaymentOption: '',
            OrderType: ''
        });
        setSelectedPaymentOption('null');
        setExpiration('');
        setSelectedDropDownOption('');
    };

    function handleSubmit(e) {
        e.preventDefault();

        const requiredFields = ['cardHolderName', 'cardNumber', 'cvv', 'tableNo', 'PaymentOption', 'OrderType'];

        const isFormComplete = requiredFields.every(field => formData[field]);

        if (!isFormComplete) {
            alert('Lütfen tüm alanları doldurunuz.');

        } else {
            console.log(formData);
        }
    }

    return (
        <div className="order-payment" onSubmit={handleSubmit}>
            <h1 className="payment-head">Payment</h1>

            <p className="payment-explanations">3 payment method available</p>
            <div className="line-form"></div>

            <h2 className="payment-methods-text">Payment Methods</h2>
            <form className="payment-form-area">
                <div className="only-labels-payment-form">
                    <label htmlFor="option1" className={`payment-photo-options ${PaymentOption === "option1" ? "selected" : ""}`}>
                        <input className="input-type-radio" type="radio" id="option1" name="options" value="option1" checked={PaymentOption === "option1"}
                            onChange={handleOptionChange} />
                        <img src={cCard} alt="" srcSet="" />
                        <p>Credit Card</p>
                    </label>
                    <label htmlFor="option2" className={`payment-photo-options ${PaymentOption === "option2" ? "selected" : ""}`}>
                        <input className="input-type-radio" type="radio" id="option2" name="options" value="option2" checked={PaymentOption === "option2"}
                            onChange={handleOptionChange} />
                        <img src={paypalPhoto} alt="" srcSet="" />
                        <p>Paypal</p>
                    </label>
                    <label htmlFor="option3" className={`payment-photo-options ${PaymentOption === "option3" ? "selected" : ""}`}>
                        <input className="input-type-radio" type="radio" id="option3" name="options" value="option3" checked={PaymentOption === "option3"}
                            onChange={handleOptionChange} />
                        <img src={cashPhoto} alt="" srcSet="" />
                        <p>Cash</p>
                    </label>
                </div>

                <div className="cardholder-division-for-payment">
                    <p className="card-text-for-order">Cardholder Name</p>
                    <input type="text" name="cardHolderName" className="full-width-input-names" placeholder="Levi Ackermann" value={formData.cardHolderName} onChange={handleInputChange} />

                    <p className="card-text-for-order">Card Number</p>
                    <input type="text" name="cardNumber" className="full-width-input-names" placeholder="2564 1421 0897 1244" value={formData.cardNumber} onChange={handleInputChange} />

                    <div className="double-form-type-payment">
                        <div className="first-double-type-payment">
                            <label className="card-text-for-order" htmlFor="expiration-input">Expiration Date</label>
                            <input
                                type="text"
                                className="half-width-input"
                                id="expiration-input"
                                name="expiration"
                                value={expiration}
                                onChange={handleExpirationChange}
                                placeholder="MM/YY"
                            />

                        </div>
                        <div className="first-double-type-payment">
                            <label className="card-text-for-order" htmlFor="cvv-input">CVV</label>
                            <input type="password" id="cvv-input"
                                className="half-width-input" name="cvv" value={formData.cvv} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="line-form"></div>
                    <div className="double-form-type-payment">
                        <div className="first-double-type-payment">

                            <label className="card-text-for-order" htmlFor="order-types">
                                Order Type</label>

                            <select name="order-types" id="order-types" onChange={handleSelectChange} value={selectedDropDownOption}>
                                <option value="dine-in">Dine In</option>
                                <option value="dine-out">Dine Out</option>
                                <option value="dine-on">Dine On</option>
                                <option value="dine-under">Dine Under</option>
                            </select>

                        </div>
                        <div className="first-double-type-payment">
                            <p className="card-text-for-order">Table No</p>
                            <input type="text" className="half-width-input" name="tableNo" value={formData.tableNo} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="buttons-payment-area">
                        <button type="button" className="cancel-button-payment" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="confirm-button-payment">Confirm Payment</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default OrderPaymentPage;