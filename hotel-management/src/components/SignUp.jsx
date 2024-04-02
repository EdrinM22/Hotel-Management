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
            <h2 className="signup-subheader">Hello, new customer!</h2>
        <form className="signup-form">
        
        <div className="field-bundle">
        <label htmlFor="email" className="signup-label">Email</label>
        <input type="email" id="email" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="first_name" className="signup-label">First Name</label>
        <input type="text" id="first_name" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="fathers_name" className="signup-label">Fathers Name(optional)</label>
        <input type="text" id="fathers_name" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="last_name" className="signup-label">Last Name</label>
        <input type="text" id="last_name" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="birthday" className="signup-label">Date of Birth(optional)</label>
        <input type="date" id="birthday" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="birthplace" className="signup-label">Birth Place(optional)</label>
        <input type="text" id="birthplace" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="personal_number" className="signup-label">Personal Number</label>
        <input type="text" id="personal_number" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="gender" className="signup-label">Gender</label>
        <input type="text" id="gender" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="phone_number" className="signup-label">Phone Number</label>
        <input type="phone" id="phone_number" className="signup-input" />
        </div>
        <div className="field-bundle">
        <label htmlFor="password" className="signup-label">Password</label>
        <input type="password" id="password" className="signup-input" />
        </div>
        </form>
        <button type="submit" className="signup-button">sign up</button>
        <div className="forgot-pass">
        <Link to="../contact" className="logo-nav-link">
        <p className="subtext">Trouble? Phone Us</p>
                   </Link>
            
        </div>
        </div>
    );
};

export default SignUp;