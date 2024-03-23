import "./Header.css";
import Logo from "../assets/moto hotel.png";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<NavLink to="./">
					<img src={Logo} alt="Hotel Logo" className="logo" />
				</NavLink>
			</div>
			<nav className="navigation">
				<NavLink
					to="/book"
					className={({ isActive }) =>
						isActive ? "nav-link nav-link-active" : "nav-link"
					}>
					Book
				</NavLink>
				<NavLink
					to="/location"
					className={({ isActive }) =>
						isActive ? "nav-link nav-link-active" : "nav-link"
					}>
					Location
				</NavLink>
				<NavLink
					to="/feedback"
					className={({ isActive }) =>
						isActive ? "nav-link nav-link-active" : "nav-link"
					}>
					Feedback
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive ? "nav-link nav-link-active" : "nav-link"
					}>
					Contact Us
				</NavLink>
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? "log-in" : "log-in"
					}>
					Log In
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
