import "./Rooms_Section.css"
import Room_Card from "./Room_Card.jsx";

const Rooms = () => {
    return(
        <section className="rooms">
            <h1>Rooms & Suites</h1>
            <div className="cards">
                <Room_Card />
                <Room_Card />
                <Room_Card />
                <Room_Card />
            </div>

        </section>
    )
}
export default Rooms