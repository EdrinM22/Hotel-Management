import "../components/RoomBookingPage.css";
import RoomBookingFilter from "../components/RoomBookingFilter.jsx";
import Receipt from "../components/Receipt.jsx";
import RoomInfo from "../components/RoomInfo.jsx";

import { useEffect, useState } from "react";

export default function RoomBookingPage() {
	const [filters, setFilters] = useState({
		checkInDate: "",
		checkOutDate: "",
		numGuests: 1,
		roomType: "Standard Room",
	});

	function handleFilterChange(identifier, value) {
		setFilters((prevFilters) => {
            return {
                ...prevFilters,
                [identifier]: value,
            };
        });
	}

    // useEffect(() => {
    //     console.log("Filters updated:", filters);

    //     if (filters.checkInDate && filters.checkOutDate){
    //         console.log("Fetching rooms...");
    //     }

    // }, [filters]);

	return (
		<section className="RoomBookingPage">
			<RoomBookingFilter filters={filters} onFilterChange={handleFilterChange} />
			<div className="reservation">
				<RoomInfo filters={filters} />
				<Receipt />
			</div>
		</section>
	);
}
