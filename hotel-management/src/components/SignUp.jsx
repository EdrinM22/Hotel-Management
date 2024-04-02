import Logo from "../assets/moto hotel.png";
import "../components/SignUp.css";
import { Link } from "react-router-dom";


const SignUp = () => {

    return (
        <div className="signup-container">
            <div className="">
				<Link to="../" className="logo-nav-link">
					<img src={Logo} alt="Hotel Logo" className="logo-signup" />
				</Link>
			</div>
            <h1 className="signup-header">Welcome to Moto Hotel</h1>
        <form className="signup-form">
        <h2 className="signup-subheader">Hello, new customer!</h2>
        <label htmlFor="username" className="signup-label">Email</label>
        <input type="text" id="username" className="signup-input" />
        <label htmlFor="phone" className="signup-label">Phone Number</label>
        <input type="text" id="phone" className="signup-input" />
        <label htmlFor="password" className="signup-label">Password</label>
        <input type="password" id="password" className="signup-input" />
        <button type="submit" className="signup-button">sign up</button>
        <div className="forgot-pass">
        <Link to="../contact" className="logo-nav-link">
        <p className="subtext">Trouble? Phone Us</p>
                   </Link>
            
        </div>
        </form>
        </div>
    );
};

export default SignUp;