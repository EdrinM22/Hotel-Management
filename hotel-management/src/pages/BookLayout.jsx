import { Outlet } from "react-router-dom";

import SecondaryHeader from "../components/SecondaryHeader";

export default function BookLayout() {
    const navLinks = [
        {name: "Book", path: "/book"},
        {name: "Event", path: "/book/event"}
    ];

	return (
		<>
			<SecondaryHeader  navLinks={navLinks}/>
			<Outlet />
		</>
	);
}
