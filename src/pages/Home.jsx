import Features from "../components/Features"
import Navbar from "../components/Navbar"
import SectionMainAction from "../components/SectionMainAction"
import SectionMainLeft from "../components/SectionMainLeft"
import SectionMainRight from "../components/SectionMainRight"

const Home = () => {
    return (
        <div id="home" className="bg-cover" style={{backgroundImage: "url('section-main.webp')"}}>
            <SectionMainLeft/>
            <SectionMainRight/>
            <SectionMainAction/>
            <Features/>
        </div>
    )
}

export default Home
