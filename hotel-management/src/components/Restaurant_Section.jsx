import "./Restaurant_Section.css"
import Background from "../assets/bg.jpg";
const background = {
    backgroundImage: `url(${Background})`,
    minHeight:"80vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize:'cover',
    marginBottom: "10vh",
};
const Restaurant = () => {
    return(
        <section className="restaurant" style={background}>
            <div>
                <h1>Restaurant</h1>
                <p>Text</p>
            </div>
        </section>
    )
}
export default Restaurant