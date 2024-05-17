import "../components/RoomBookingPage.css"
import RoomBookingFilter from "../components/RoomBookingFilter.jsx";
import Receipt from "../components/Receipt.jsx";
import RoomInfo from "../components/RoomInfo.jsx";
export default function RoomBookingPage() {
    return (
        <section className="RoomBookingPage">
            <RoomBookingFilter/>
            <div className="reservation">
                <RoomInfo/>
                <Receipt/>
            </div>
        </section>
    )
}