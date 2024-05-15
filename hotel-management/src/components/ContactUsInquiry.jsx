import "./ContactUsInquiry.css";



const ContactUsInq = () => {
	return (
        <div>
            <div className="contact-card">
                <div className="contactus-header">
                {/* <span>{name}</span>
                <span>{email}</span>
                <span>{phone}</span>
                <button className="delete-button" onClick={onDelete}>Delete</button> */}
                <span>Name Surname</span>
                <span>example@example.com</span>
                <span>+35569 12 23 567</span>
                <button className="delete-button" >Delete</button>
                </div>
            <textarea className="contact-message" readOnly placeholder="Message Here"></textarea>
            {/* <textarea className="contact-message" readOnly value={message} placeholder="Message Here"></textarea> */}
            </div>
        </div>
	);
};

export default ContactUsInq;