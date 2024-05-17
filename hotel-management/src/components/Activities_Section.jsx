/* eslint-disable react/no-unescaped-entities */
import "./Activities_Section.css"
import Foto from "../assets/book_events_bg.png";
import PoolPic from "../assets/pool.png";
import SpaPic from "../assets/spa.jpg";
import GymPic from "../assets/gym.jpg";
import GymGirlPic from "../assets/gym_girl.png";
import Button from "./Button.jsx";
const Activities = () => {
    return(
        <section className="activities">
            <h1>Activities</h1>
            <div className="activities-content">
                <img src={PoolPic} alt=""></img>
                <div style={{padding: '20px'}}>
                    <h2>Pool</h2>
                    <p>Relax and unwind at [Hotel Name]'s luxurious pool.
                        Our beautifully designed pool area offers a serene escape,
                        complete with comfortable loungers, shaded cabanas, and refreshing beverages from our poolside bar.
                        Whether you're looking to swim laps, soak up the sun, or enjoy a leisurely dip,
                        our pool provides the perfect setting. </p>
                    {/* <img className="activities-small" src={SpaPic} alt=""></img> */}
                </div>
            </div>
            <div className="activities-content">
                <img src={GymPic} alt=""></img>
                <div style={{padding: '20px'}}>
                    {/* <img className="activities-small" src={GymGirlPic} alt=""></img> */}
                    <h2>Fitness</h2>
                    <p>Stay active during your stay at [Hotel Name] with our state-of-the-art gym facilities.
                        Our fitness center is equipped with the latest cardio machines, free weights, and strength-training equipment,
                        catering to all your workout needs. Enjoy a clean, spacious environment with 24/7 access,</p>
                </div>
            </div>

        </section>
    )
}
export default Activities