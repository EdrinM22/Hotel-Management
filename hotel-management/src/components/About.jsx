
import './About.css';
import HotelImage from '../assets/moto hotel.png'; // Example image

const About = () => {
    return (
        <div className="about-container">
            <div className="about-banner">
                <img src={HotelImage} alt="Hotel" className="banner-image" />
                <h1 className="banner-text">About Us</h1>
            </div>

            <section className="about-section">
                <h2>Our Hotel</h2>
                <p>
                    Welcome to our hotel! We are committed to providing you with the best experience during your stay. Our hotel offers a range of amenities and services to ensure your comfort and satisfaction.
                </p>
            </section>

            <section className="about-section">
                <h2>Our History</h2>
                <p>
                    Established in 1990, our hotel has a rich history of hospitality and excellence. Over the years, we have grown and evolved to meet the changing needs of our guests, while maintaining our commitment to quality and service.
                </p>
            </section>

            <section className="about-section">
                <h2>Our Team</h2>
                <p>
                    Our dedicated team of professionals is here to make your stay as enjoyable as possible. From our front desk staff to our housekeeping team, everyone is committed to providing you with the highest level of service.
                </p>
            </section>

            <section className="about-section">
                <h2>Contact Information</h2>
                <p>If you have any questions or need assistance, please feel free to contact us:</p>
                <ul>
                    <li>Email: office@moto.com</li>
                    <li>Phone: +123 456 7890</li>
                    <li>Address: 123 Main Street, City, Country</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
