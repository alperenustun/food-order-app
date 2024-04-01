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
        PaymentOption: '',
        OrderType: ''

    });

    // İnput alanındaki değeri düzenlemek için bir fonksiyon
    const formatCardNumber = (input) => {
        // Girilen değeri sadece rakamlara dönüştür
        let cardNumber = input.replace(/\D/g, '');
        // Maksimum 16 karaktere sınırlandır
        cardNumber = cardNumber.slice(0, 16);
        // Her 4 karakterden sonra bir boşluk ekleyerek formatı düzenle
        cardNumber = cardNumber.replace(/(.{4})/g, '$1 ');
        console.log(cardNumber, "cardNumber");
        // Son 1 karaktere kadar olan kısmı alarak input alanına yaz
        return cardNumber.trim();
    };

    const formatCvv = (input) => {
        // Girilen değeri sadece rakamlara dönüştür
        let cardCvv = input.replace(/\D/g, '');
        // Maksimum 3 karaktere sınırlandır
        cardCvv = cardCvv.slice(0, 3);

        return cardCvv;
    };

    const formatTableNo = (input) => {
        // Girilen değeri sadece rakamlara dönüştür
        let tableNo = input.replace(/\D/g, '');
        // Maksimum 3 karaktere sınırlandır
        tableNo = tableNo.slice(0, 3);

        return tableNo;
    }

    const formatCardHolderName = (input) => {
        // Sadece harfleri kabul et ve diğer karakterleri kaldır
        let formattedName = input.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '');

        return formattedName;
    };

    // Form girdileri değiştiğinde state'i güncelleyecek fonksiyonlar, NAME ve VALUE'yu alır ve state'i günceller. NAME E BAKARAK HANGİ INPUT OLDUĞUNU ANLARIZ.
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        //const name = e.target.name;
        //const value = e.target.value; üstteki let{} ile aynı işlemi yapar
        //console.log(name, value); // Hangi inputun değiştiğini ve değerini görmek için yazdırın

        if (name === 'cardNumber') {
            // Girilen değeri formatlayın ve input alanına yazın
            value = formatCardNumber(value);
            setFormData({ ...formData, [name]: value });

        }
        else if (name === 'cardHolderName') {
            // Girilen değeri formatlayın ve input alanına yazın
            value = formatCardHolderName(value);
            setFormData({ ...formData, [name]: value });

        }
        else if (name === 'cvv') {
            // Girilen değeri formatlayın ve input alanına yazın
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

    // Seçilen ödeme yöntemini saklamak için bir durum oluşturun
    const [PaymentOption, setSelectedPaymentOption] = useState(null);

    // Seçenek değiştiğinde durumu güncelleyen bir fonksiyon oluşturun
    function handleOptionChange(e) {

        setFormData({ ...formData, PaymentOption: e.target.value });
        setSelectedPaymentOption(e.target.value);
        console.log(e.target.value);
    }

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

    const [OrderType, setOrderType] = useState(null); //burada seçilen order type'ı saklamak için bir state oluşturduk.
    // Seçenek değiştiğinde durumu güncelleyen bir fonksiyon oluşturun


    const handleDropDownOptionClick = (e) => {
        const valueOfOrder = e.target.value;
        setFormData({ ...formData, OrderType: valueOfOrder });
        setOrderType(valueOfOrder);
        console.log(valueOfOrder, "valueOfOrder");
        setDropDownIsOpen(false);
    };

    const handleCancel = () => {
        setSelectedPaymentOption('');
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
            <div className="order-payment" onSubmit={handleSubmit}>
                <h1 className="payment-head">
                    Payment
                </h1>
                <p className="payment-explanations">3 payment method available</p>
                <div className="line-form"></div>

                <h2 className="payment-methods-text">Payment Methods</h2>
                <form className="payment-form-style">
                    <div className="only-labels">
                        <label htmlFor="option1" className={`payment-photo-options ${PaymentOption === "option1" ? "selected" : ""}`}>
                            <input type="radio" id="option1" name="options" value="option1" checked={PaymentOption === "option1"}
                                onChange={handleOptionChange} />
                            <img src={cCard} alt="" srcSet="" />
                            Credit Card
                        </label>
                        <label htmlFor="option2" className={`payment-photo-options ${PaymentOption === "option2" ? "selected" : ""}`}>
                            <input type="radio" id="option2" name="options" value="option2" checked={PaymentOption === "option2"}
                                onChange={handleOptionChange} />
                            <img src={paypalPhoto} alt="" srcSet="" />
                            Paypal
                        </label>
                        <label htmlFor="option3" className={`payment-photo-options ${PaymentOption === "option3" ? "selected" : ""}`}>
                            <input type="radio" id="option3" name="options" value="option3" checked={PaymentOption === "option3"}
                                onChange={handleOptionChange} />
                            <img src={cashPhoto} alt="" srcSet="" />
                            Cash
                        </label>

                    </div>

                    <div className="rest-is-history">
                        <p className="card-text">Cardholder Name</p>
                        <input type="text" name="cardHolderName" className="full-width-input" placeholder="Levi Ackermann" value={formData.cardHolderName} onChange={handleInputChange} />

                        <p className="card-text">Card Number</p>
                        <input type="text" name="cardNumber" className="full-width-input" placeholder="2564 1421 0897 1244" value={formData.cardNumber} onChange={handleInputChange} />

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
                                <input type="password"
                                    className="half-width-input" name="cvv" value={formData.cvv} onChange={handleInputChange} />
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
                                    <button value={"orderType1"} onClick={handleDropDownOptionClick}>Order Type 1</button>
                                    <button value={"orderType2"} onClick={handleDropDownOptionClick}>Order Type 2</button>
                                    <button value={"orderType3"} onClick={handleDropDownOptionClick}>Order Type 3</button>
                                    <button value={"orderType4"} onClick={handleDropDownOptionClick}>Order Type 4</button>


                                </div>

                            </div>
                            <div className="first-double-type">
                                <p className="card-text">Table No</p>
                                <input type="text" className="half-width-input" name="tableNo" value={formData.tableNo} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="buttons-div">
                            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                            <button type="submit" className="confirm-button">Confirm Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderPaymentPage;