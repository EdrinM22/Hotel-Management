import './CookieConsent.css';

const CookieConsent = () => {
    return (
        <div className="cookie-container">
            <div className="cookie-banner">
                <h1 className="cookie-header">Cookie Consent</h1>
            </div>

            <section className="cookie-section">
                <h2>Introduction</h2>
                <p>
                    We use cookies to enhance your experience on our website. This cookie policy explains what cookies are, how we use them, and your choices regarding cookies.
                </p>
            </section>

            <section className="cookie-section">
                <h2>What Are Cookies</h2>
                <p>
                    Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
                </p>
            </section>

            <section className="cookie-section">
                <h2>How We Use Cookies</h2>
                <p>
                    We use cookies to improve the functionality of our website, enhance your browsing experience, and provide certain features. Cookies also help us understand how you use our website, allowing us to make improvements.
                </p>
            </section>

            <section className="cookie-section">
                <h2>Types of Cookies We Use</h2>
                <ul>
                    <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.</li>
                    <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                    <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced, more personal features.</li>
                    <li><strong>Targeting Cookies:</strong> These cookies are used to deliver ads more relevant to you and your interests.</li>
                </ul>
            </section>

            <section className="cookie-section">
                <h2>Managing Cookies</h2>
                <p>
                    You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. Please note that disabling cookies may affect the functionality of our website.
                </p>
            </section>

            <section className="cookie-section">
                <h2>Contact Information</h2>
                <p>
                    If you have any questions about our cookie policy or how we use cookies, please contact us at:
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

export default CookieConsent;
