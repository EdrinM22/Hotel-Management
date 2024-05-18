
import './PrivacyNotice.css';

const PrivacyNotice = () => {
    return (
        <div className="privacy-container">
            <div className="privacy-banner">
                <h1 className="privacy-header">Privacy Notice</h1>
            </div>

            <section className="privacy-section">
                <h2>Introduction</h2>
                <p>
                    We value your privacy and are committed to protecting your personal information. This privacy notice explains how we collect, use, and protect your data.
                </p>
            </section>

            <section className="privacy-section">
                <h2>Information We Collect</h2>
                <p>
                    We may collect personal information such as your name, email address, phone number, and payment details when you make a booking or contact us. Additionally, we may collect data on your preferences and usage of our services.
                </p>
            </section>

            <section className="privacy-section">
                <h2>How We Use Your Information</h2>
                <p>
                    The information we collect is used to provide and improve our services, process your bookings, and communicate with you. We may also use your data for marketing purposes, but you can opt out at any time.
                </p>
            </section>

            <section className="privacy-section">
                <h2>Sharing Your Information</h2>
                <p>
                    We do not share your personal information with third parties except as necessary to provide our services or comply with legal requirements. We may share data with service providers who assist us in our operations.
                </p>
            </section>

            <section className="privacy-section">
                <h2>Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal information. If you have any questions or concerns about your privacy, please contact us.
                </p>
            </section>

            <section className="privacy-section">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this privacy notice or our data practices, please contact us at:
                </p>
                <ul>
                    <li>Email: privacy@moto.com</li>
                    <li>Phone: +123 456 7890</li>
                    <li>Address: 123 Main Street, City, Country</li>
                </ul>
            </section>
        </div>
    );
};

export default PrivacyNotice;
