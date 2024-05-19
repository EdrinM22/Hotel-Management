import React, { useState } from 'react';
import './PaymentForm.css';
import CreditCardIcon from '../assets/creditcard.png';
import PayPalIcon from '../assets/paypal.png';
import CashIcon from '../assets/Cash.png';
import Receipt from './Receipt';

const PaymentForm = () => {
    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const handleConfirm = () => {
        alert(`Payment method selected: ${selectedPayment}`);
    };

    const handlePrintReceipt = () => {
        alert('Receipt printed!');
    };

    return (
        <div className="payment-form">
            <h1>Choose Payment Method</h1>
            <div className="payment-options">
                <label className={`payment-option ${selectedPayment === 'Credit Card' ? 'selected' : ''}`}>
                    <input 
                        type="radio" 
                        value="Credit Card" 
                        checked={selectedPayment === 'Credit Card'} 
                        onChange={handlePaymentChange} 
                    />
                    <img src={CreditCardIcon} alt="Credit Card" />
                    Credit Card
                </label>
                <label className={`payment-option ${selectedPayment === 'PayPal' ? 'selected' : ''}`}>
                    <input 
                        type="radio" 
                        value="PayPal" 
                        checked={selectedPayment === 'PayPal'} 
                        onChange={handlePaymentChange} 
                    />
                    <img src={PayPalIcon} alt="PayPal" />
                    PayPal
                </label>
                <label className={`payment-option ${selectedPayment === 'Pay on Site' ? 'selected' : ''}`}>
                    <input 
                        type="radio" 
                        value="Pay on Site" 
                        checked={selectedPayment === 'Pay on Site'} 
                        onChange={handlePaymentChange} 
                    />
                    <img src={CashIcon} alt="Pay on Site" />
                    Pay on Site
                </label>
            </div>
            <button onClick={handleConfirm} className="confirm-button">Confirm</button>
            <button onClick={handlePrintReceipt} className="print-button">Print Receipt</button>
        </div>
    );
};

export default PaymentForm;
