import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Recommends from "../Recommends/Recommends";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ServiceBanner></ServiceBanner>
            <PopularItems></PopularItems>
            <Contact></Contact>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;