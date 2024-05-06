import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "./Button";

import "./SecondaryHeader.css";

export default function SecondaryHeader({ headerImg, navLinks = [], hasButton }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/");
	}

	const hasOnlyLinks = (headerImg === undefined && hasButton === undefined);
	console.log(hasOnlyLinks);

	return (
		<>
			<header className="secondary-header">
				{headerImg && <img src={headerImg} alt="header" className="secondary-header-img" />}
				<menu className={` secondary-header-menu ${hasOnlyLinks ? "center-navlinks" : ""} `} >
					<nav className="secendary-header-nav">
						{navLinks.map((link) => (
							<NavLink
								to={link.path}
								key={link.path}
								className={({ isActive }) =>
									isActive
										? "secondary-header-nav-link secondary-header-nav-link-active"
										: "secondary-header-nav-link"
								}
								end
							>
								{link.name}
							</NavLink>
						))}
					</nav>
					{hasButton && (
						<p className="secondary-header-button-container">
							<Button display="secondary" onClick={handleLogout}>Logout</Button>
						</p>
					)}
				</menu>
			</header>
		</>
	);
}