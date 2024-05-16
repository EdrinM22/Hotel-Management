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
            <div style={{padding:'30px'}}>
                <h1>Restaurant</h1>
                <p>Experience exceptional dining at [Hotel Name]'s renowned restaurant.
                    Our diverse menu features gourmet dishes crafted from the freshest ingredients,
                    offering something to delight every palate. Enjoy a sophisticated atmosphere,
                    perfect for business lunches, romantic dinners, or casual gatherings.
                    Our attentive staff ensures an unforgettable dining experience, complemented by an extensive wine selection and creative cocktails.
                    Located in the heart of [City Name], [Hotel Name]'s restaurant is the ideal culinary destination. </p>
            </div>
        </section>
    )
}
export default Restaurant