import './TermsOfUse.css';

const TermsOfUse = () => {
    return (
        <div className="terms-container">
            <div className="terms-banner">
                <h1 className="terms-header">Terms of Use</h1>
            </div>

            <section className="terms-section">
                <h2>Introduction</h2>
                <p>
                    Welcome to our hotel. These terms of use govern your use of our services and facilities. By using our services, you agree to these terms. Please read them carefully.
                </p>
            </section>

            <section className="terms-section">
                <h2>Use of Services</h2>
                <p>
                    Our services are provided for lawful purposes only. You agree not to use our services for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction when using our services.
                </p>
            </section>

            <section className="terms-section">
                <h2>Booking and Payment</h2>
                <p>
                    All bookings must be made through our official channels. Payments are required at the time of booking. We accept various payment methods, and you agree to provide accurate payment information.
                </p>
            </section>

            <section className="terms-section">
                <h2>Cancellations and Refunds</h2>
                <p>
                    Cancellation policies vary depending on the booking type. Please review the cancellation terms at the time of booking. Refunds, if applicable, will be processed according to our refund policy.
                </p>
            </section>

            <section className="terms-section">
                <h2>Privacy</h2>
                <p>
                    Your privacy is important to us. Our privacy notice explains how we collect, use, and protect your personal information. By using our services, you agree to the terms outlined in our privacy notice.
                </p>
            </section>

            <section className="terms-section">
                <h2>Changes to Terms</h2>
                <p>
                    We may update these terms from time to time. Changes will be posted on our website, and the updated terms will take effect immediately upon posting. Your continued use of our services constitutes acceptance of the updated terms.
                </p>
            </section>

            <section className="terms-section">
                <h2>Contact Information</h2>
                <p>
                    If you have any questions about these terms of use or our services, please contact us at:
                </p>
                <ul>
                    <li>Email: support@moto.com</li>
                    <li>Phone: +123 456 7890</li>
                    <li>Address: 123 Main Street, City, Country</li>
                </ul>
            </section>
        </div>
    );
};

export default TermsOfUse;
