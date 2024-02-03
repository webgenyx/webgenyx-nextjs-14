import About from "./About";
import Expertise from "./Expertise";
import Footer from "./Footer";
import Intro from "./Intro";
import Templates from "./Templates";
import Works from "./Works";

const HomeComponent = () => {
    return (
        <div>
            <Intro/>
            <Works/>
            <Templates/>
            <Expertise/>
            <About/>
            <Footer/>
        </div>
    );
};

export default HomeComponent;