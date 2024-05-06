import "./Meetings_Section.css";
import Foto from"../assets/book_events_bg.png"
const Meetings = () => {
    return(
        <section className="meetings">
            <h1>Meetings & Events</h1>
            <div className="meetings-content">
                <img src={Foto} alt=""></img>
                <div>
                    <h2>Title for meetings</h2>
                    <p>Text</p>
                </div>
            </div>
            <div className="meetings-content">
                <img src={Foto} alt=""></img>
                <div>
                    <h2>Title for events</h2>
                    <p>Text</p>
                </div>


            </div>
        </section>
    )
}
export default Meetings