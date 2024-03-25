import "./ContactUs.css";
import Banner from "../assets/contact_banner.png";

const ContactUs = () => {
	return (
        <>
        <div className="contactfull-banner">
        <h1 className="contact-header">Contact Us</h1>
        <img src={Banner} alt="Contact Us Banner" className="contact-banner" />
        </div>
        <div className="contact-container">
            <div className="talk-with-us">
            <h1 className="talk-header">Talk with us</h1>
            <h2 className="talk-subheader">Need to get in touch with us? Lets discuss how we can help you.</h2>
            </div>
        <form className="contact-info-form">
            <div className="contact-info">
        
                <label>
                Name
                    <input type="text" name="name" />
                </label>
                <label>
                Surname
                    <input type="text" name="surname" />
                </label>
                <label>
                Email
                    <input type="email" name="email" />
                </label>
                <label>
                Phone
                    <input type="tel" name="phone" />
                </label>
                
        
        
            </div>
            <label>
                    <textarea className="comment" name="message" placeholder="Your message here..." />
                </label>
                    <button className="submit" type="submit">Submit</button>
        </form>
        </div>

        </>
	);
};

export default ContactUs;