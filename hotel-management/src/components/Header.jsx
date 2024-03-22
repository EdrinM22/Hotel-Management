import './Header.css';
import Logo from '../assets/moto hotel.png';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={Logo} alt="Hotel Logo" className="logo"/>
      </div>
      <nav className="navigation">
        <a href="/book" className="nav-link">Book</a>
        <a href="/location" className="nav-link">Location</a>
        <a href="/feedback" className="nav-link">Feedback</a>
        <a href="/contact" className="nav-link">Contact Us</a>
        <a href="/login" className="nav-link log-in">Log In</a>
      </nav>
    </header>
  );
};

export default Header;
