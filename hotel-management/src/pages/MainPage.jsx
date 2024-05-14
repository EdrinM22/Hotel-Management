import Date from "../components/Date";
import Rooms from "../components/Rooms_Section";
import Meetings from "../components/Meetings_Section";
import Activities from "../components/Activities_Section";
import Restaurant from "../components/Restaurant_Section";
import HotelBookingFilter from "../components/HotelBookingFilter.jsx";

export default function MainPage() {
	return (
		<>
			{/*<Date />*/}
			<HotelBookingFilter/>
			<Rooms />
			<Meetings />
			<Restaurant />
			<Activities />
		</>
	);
}
