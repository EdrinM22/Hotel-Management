import "./Login.css";
import Logo from "../assets/moto hotel.png";

const Login = () => {
    return (
        
        <div className="login-container">
            <img src={Logo} alt="Hotel Logo" className="logo-login" />
            <h1 className="login-header">Welcome to Moto Hotel</h1>
            
            <div className="login-options">
                <form className="login-form">
                    <h2 className="login-subheader">Please login to continue</h2>
                    <label htmlFor="username" className="login-label">Email or Phone Number</label>
                    <input type="text" id="username" className="login-input" />
                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="password" id="password" className="login-input" />
                    <button type="submit" className="login-button">LOGIN</button>
                    <div className="forgot-pass">
                        <p className="subtext">Forgot Password</p>
                        <p className="subtext">Cannot Sign in</p>
                    </div>
                </form>
                <div className="join-us">
                    <h2>Dont have an account?</h2>
                    <p className="subtext">Join us to get access to exclusive deals and offers</p>
                    <button className="join-us-button">Join us</button>
                </div>
            </div>
        </div>
        
    );
};

export default Login;
