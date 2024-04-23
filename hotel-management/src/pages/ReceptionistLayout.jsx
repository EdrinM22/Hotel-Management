import SecondaryHeader from "../components/SecondaryHeader";
import { Outlet } from "react-router-dom";

import logoImg from "../assets/moto hotel.png";
import Footer from "../components/Footer";

export default function ReceptionistLayout() {
	const navLinks = [
		{ name: "Book", path: "/receptionist/book" },
		{ name: "Dashboard", path: "/receptionist" },
		{ name: "Time Table", path: "/receptionist/timetable" },
		{ name: "Today Events", path: "/receptionist/todayevents" },
	];

	return (
		<div>
			<SecondaryHeader headerImg={logoImg} navLinks={navLinks} hasButton />
			<Outlet />
            <Footer />
		</div>
	);
}
