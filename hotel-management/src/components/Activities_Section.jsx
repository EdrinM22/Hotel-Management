import "./Activities_Section.css"
import Foto from "../assets/book_events_bg.png";
import Button from "./Button.jsx";
const Activities = () => {
    return(
        <section className="activities">
            <h1>Activities</h1>
            <div className="activities-content">
                <img src={Foto} alt=""></img>
                <div>
                    <h2>Title for meetings</h2>
                    <p>Text</p>
                    {/*<img className="activities-small" src={Foto} alt=""></img>*/}
                </div>
            </div>
            <div className="activities-content">
                <img src={Foto} alt=""></img>
                <div>
                    {/*<img className="activities-small" src={Foto} alt=""></img>*/}
                    <h2>Title for events</h2>
                    <p>Text</p>
                </div>
            </div>

        </section>
    )
}
export default Activities