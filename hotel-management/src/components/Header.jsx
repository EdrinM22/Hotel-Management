import "./Header.css";
import Logo from "../assets/moto hotel.png";

import Button from "./Button";

import { NavLink, Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from "../util/token";

const Header = () => {
	const navigation = useNavigate();

	const [menuOpen, setMenuOpen] = useState(false);

	const token = getTokenFromLocalStorage();
	const [isLogged, setIsLogged] = useState(token ? true : false);



	function toggleModal() {
		setMenuOpen((prev) => !prev);
	}

	function closeMenu() {
		setMenuOpen(false);
	}

	function login() {
		navigation("/login");
	}
	
	function logout() {
		removeTokenFromLocalStorage();
		setIsLogged(false);
		navigation("/");
	}

	
	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (e.target.closest(".menu-button-container")) return;
			if (e.target.closest(".navigation_menu")) return;
			setMenuOpen(false);
		});
	}, []);

	return (
		<header className="header">
			<div className="">
				<Link to="./" className="logo-nav-link">
					<img src={Logo} alt="Hotel Logo" className="logo" />
				</Link>
			</div>

			<div className="menu-button-container">
				<Button onClick={toggleModal}>Menu</Button>
			</div>
			<menu className={`navigation_menu ${menuOpen ? "active" : undefined}`}>
				<nav className="navigation ">
					<NavLink
						to="/book"
						className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
						onClick={closeMenu}
					>
						Book
					</NavLink>
					<NavLink
						to="/location"
						className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
						onClick={closeMenu}
					>
						Location
					</NavLink>
					{isLogged && <NavLink
						to="/feedback"
						className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
						onClick={closeMenu}
					>
						Feedback
					</NavLink>}
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
						onClick={closeMenu}
					>
						Contact Us
					</NavLink>
				</nav>

				<Button onClick={isLogged ? logout : login}>
					{isLogged ? "Log Out" : "Log In"}
				</Button>
			</menu>
		</header>
	);
};

export default Header;
