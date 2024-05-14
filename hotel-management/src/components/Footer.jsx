import './Footer.css'; // Make sure to create a corresponding CSS file for styling
import Instagram from '../assets/ig.png';
import Facebook from '../assets/fb.png';
import Xtw from '../assets/x.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-block">
          <h3>Moto Resort</h3>
          <a href="/about">About</a>
          <a href="/location">Location</a>
        </div>
        <div className="footer-block">
          <h3>Terms & Policies</h3>
          <a href="/privacy">Privacy Notice</a>
          <a href="/terms">Terms of Use</a>
          <a href="/cookies">Cookie Consent</a>
        </div>
        <div className="footer-block">
          <h3>Contact</h3>
          <p>Reservations: +355 123 123 1234</p>
          <p>Email: office@moto.al</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
            <img src={Instagram} alt="IG" className="ig-logo"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
            <img src={Facebook} alt="FB" className="fb-logo"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
            <img src={Xtw} alt="X" className="x-logo"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
