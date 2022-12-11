import { useEffect, useState } from "react"

const Navbar = () => {

    const [ scrolled, setScrolled ] = useState("")

    const changeBackground = () => {
        if (window.scrollY < 50) setScrolled("")
        if (window.scrollY >= 50) setScrolled("#00a3ff")
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div id="navbar" style={{ backgroundColor: scrolled}} >

            <div id="navbar_left">
                <span>vignette</span>
                <b>ID</b>
            </div>

            <div id="navbar_right">
                <ion-icon size="small" name="cart"></ion-icon>
                <button>BUY</button>
            </div>

            <div id="navbar_right_2">
                <button id="price_btn">GET PRICE</button>     
                <button id="vig_btn">
                    <ion-icon size="small" name="cart"></ion-icon>
                    <span>BUY VIGNETTE</span>
                </button>
            </div>

        </div>
    )
}

export default Navbar
