import SecondaryHeader from "../components/SecondaryHeader";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

export default function ManagerLayout() {
    const navLinks = [
        { name: "Dashboard", path: "/manager" },
        { name: "Review", path: "/manager/review"},
        { name: "Room Details", path: "/manager/roomdetail" },
        { name: "Worker Timetable", path: "/manager/workertimetable" },
    ]
    
	return (
		<div>
			<SecondaryHeader navLinks={navLinks} hasButton />
			<Outlet />
			<Footer />
		</div>
	);
}
