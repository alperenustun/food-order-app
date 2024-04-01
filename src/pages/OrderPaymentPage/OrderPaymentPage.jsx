import { useState } from "react";
import "./OrderPaymentPage.scss";

function OrderPaymentPage() {

    const cCard = "/src/assets/Card.png";
    const paypalPhoto = "/src/assets/Paypal.png";
    const cashPhoto = "/src/assets/Wallet.png";
    const downArrow = "/src/assets/down-arrow.png";

    // Ödeme sayfası için gerekli olan form bilgilerini oluşturun

    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        cvv: '',
        tableNo: '',
        selectedOption: ''
    });

    // Form girdileri değiştiğinde state'i güncelleyecek fonksiyonlar, NAME ve VALUE'yu alır ve state'i günceller. NAME E BAKARAK HANGİ INPUT OLDUĞUNU ANLARIZ.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Seçilen ödeme yöntemini saklamak için bir durum oluşturun
    const [selectedOption, setSelectedOption] = useState(null);

    // Seçenek değiştiğinde durumu güncelleyen bir fonksiyon oluşturun
    const handleOptionChange = (e) => {

        setFormData({ ...formData, selectedOption: e.target.value });
        setSelectedOption(e.target.value);
        console.log(e.target.value);
    };

    const [expiration, setExpiration] = useState('');

    const handleExpirationChange = (e) => {
        const { value } = e.target;
        // Kullanıcının girdiği değeri kontrol edin ve gerektiğinde formatlayın
        let formattedValue = value.replace(/\D/g, '').slice(0, 6); // Sadece rakamları alın ve maksimum 6 karaktere sınırlandırın

        if (formattedValue.length > 2) {
            formattedValue = formattedValue.replace(/(\d{2})/, '$1/'); // İlk iki rakamın sonuna "/" ekleyin
        }

        setExpiration(formattedValue);
    };

    const [isDropDownOpen, setDropDownIsOpen] = useState(false);
    const [selectedDropDownOption, setSelectedDropDownOption] = useState('');

    const toggleDropDownMenu = () => {
        setDropDownIsOpen(!isDropDownOpen);
    };

    const handleDropDownOptionClick = (option) => {
        setSelectedDropDownOption(option);
        setDropDownIsOpen(false);
    };

    const handleCancel = () => {
        setSelectedOption('');
        setFormData({
            // Tüm form alanlarını boşaltın
        });
        setExpiration('');
        setSelectedDropDownOption('');
    };


    // Form gönderildiğinde yapılacak işlemler
    function handleSubmit(e) {
        e.preventDefault();
        // formData state'ini kullanarak istediğiniz işlemi yapabilirsiniz
        console.log(formData);
        console.log('Expiration:', expiration);
        // Burada form verilerini bir API'ye gönderebilir, bir veritabanına kaydedebilir veya başka bir işlem yapabilirsiniz
    }

    return (
        <div>
            <div className="order-payment">
                <h1 className="payment-head">
                    Payment
                </h1>
                <p className="payment-explanations">3 payment method available</p>
                <div className="line-form"></div>

                <h2 className="payment-methods-text">Payment Methods</h2>
                <form className="payment-form-style" onSubmit={handleSubmit}>
                    <div className="only-labels">
                        <label htmlFor="option1" className={`payment-photo-options ${selectedOption === "option1" ? "selected" : ""}`}>
                            <input type="radio" id="option1" name="options" value="option1" checked={selectedOption === "option1"}
                                onChange={handleOptionChange} />
                            <img src={cCard} alt="" srcset="" />
                            Credit Card
                        </label>
                        <label htmlFor="option2" className={`payment-photo-options ${selectedOption === "option2" ? "selected" : ""}`}>
                            <input type="radio" id="option2" name="options" value="option2" checked={selectedOption === "option2"}
                                onChange={handleOptionChange} />
                            <img src={paypalPhoto} alt="" srcset="" />
                            Paypal
                        </label>
                        <label htmlFor="option3" className={`payment-photo-options ${selectedOption === "option3" ? "selected" : ""}`}>
                            <input type="radio" id="option3" name="options" value="option3" checked={selectedOption === "option3"}
                                onChange={handleOptionChange} />
                            <img src={cashPhoto} alt="" srcset="" />
                            Cash
                        </label>

                    </div>

                    <div className="rest-is-history">
                        <p className="card-text">Cardholder Name</p>
                        <input type="text" name="cardholder" className="full-width-input" placeholder="Levi Ackermann" value={formData.cardHolderName} onChange={handleInputChange} />

                        <p className="card-text">Card Number</p>
                        <input type="number" name="cardnumber" className="full-width-input" placeholder="2564 1421 0897 1244" value={formData.cardNumber} onChange={handleInputChange} />

                        <div className="double-form-type">
                            <div className="first-double-type">
                                <p className="card-text">Expiration Date</p>
                                <label htmlFor="expiration-input">
                                    <input
                                        type="text"
                                        className="half-width-input"
                                        id="expiration-input"
                                        name="expiration"
                                        value={expiration}
                                        onChange={handleExpirationChange}
                                        placeholder="MM/YY"
                                    />
                                </label>
                            </div>
                            <div className="first-double-type">
                                <p className="card-text">CVV</p>
                                <input type="password" className="half-width-input" value={formData.cvv} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="line-form"></div>
                        <div className="double-form-type">

                            <div className="first-double-type">
                                <p className="card-text">Order Type</p>

                                <button id="dropdown-btn" onClick={toggleDropDownMenu}>
                                    {selectedDropDownOption || 'Dine In'} <img src={downArrow} alt="Down arrow" className="drop-down-img" />
                                </button>
                                <div className={`dropdown-content ${isDropDownOpen ? 'dropdown-open' : ''}`} id="dropdown-content">
                                    <a href="#" onClick={() => handleDropDownOptionClick('Seçenek 1')}>Seçenek 1</a>
                                    <a href="#" onClick={() => handleDropDownOptionClick('Seçenek 2')}>Seçenek 2</a>
                                    <a href="#" onClick={() => handleDropDownOptionClick('Seçenek 3')}>Seçenek 3</a>
                                    <a href="#" onClick={() => handleDropDownOptionClick('Seçenek 4')}>Seçenek 4</a>
                                </div>

                            </div>
                            <div className="first-double-type">
                                <p className="card-text">Table No</p>
                                <input type="text" className="half-width-input" value={formData.tableNo} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="buttons-div">
                            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                            <button className="confirm-button">Confirm Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderPaymentPage;