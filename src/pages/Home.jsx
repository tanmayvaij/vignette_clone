import SectionMainAction from "../components/SectionMainAction"
import SectionMainLeft from "../components/SectionMainLeft"
import SectionMainRight from "../components/SectionMainRight"

const Home = () => {
    return (
        <div id="home">
            <div>
                <SectionMainLeft/>
                <SectionMainRight/>
            </div>
            <SectionMainAction/>
        </div>
    )
}

export default Home
