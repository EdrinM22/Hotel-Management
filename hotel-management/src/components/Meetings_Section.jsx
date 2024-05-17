import "./Meetings_Section.css";
import Foto from"../assets/book_events_bg.png"
const Meetings = () => {
    return(
        <section className="meetings">
            <h1>Meetings & Events</h1>
            <div className="meetings-content">
                <img src={Foto} alt=""></img>
                <div>
                    <h2>Meetings at our hotel</h2>
                    <p>At [Hotel Name], we offer the ideal setting for your next business meeting. Our flexible,
                        tech-savvy meeting spaces come with high-speed Wi-Fi and advanced audiovisual equipment to ensure your presentations shine.
                        Delight your attendees with customized catering options and rely on our dedicated event coordinators to manage every detail.
                        Conveniently located in the heart of [City Name], our hotel also provides luxurious accommodations for those staying overnight.</p>
                </div>
            </div>
            <div className="meetings-content">

                <div>
                    <h2>Events at our hotel</h2>
                    <p>Plan your special event at [Hotel Name],
                        featuring a range of elegant spaces perfect for any occasion,
                        from intimate gatherings to grand celebrations.
                        Enjoy customizable catering from our talented chefs, state-of-the-art audiovisual technology,
                        and personalized planning services from our experienced event coordinators.
                        Located in the heart of [City Name], our hotel offers easy access and luxurious accommodations for out-of-town guests.
                        </p>
                </div>
                <img src={Foto} alt=""></img>
            </div>
        </section>
    )
}
export default Meetings