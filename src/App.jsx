import BarChart from "./components/BarChart"
import Navbar from "./components/Navbar"
import Features from "./pages/Features"
import Home from "./pages/Home"

const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <Features/>
            <BarChart/>
        </>
    )
}

export default App
