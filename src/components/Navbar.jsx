const Navbar = () => {
    return (
        <div id="navbar" className="text-white fixed z-10 w-full flex items-center justify-around">

            <div id="navbar_left">
                <span>vignette</span>
                <span className="bg-[#00a3ff]">ID</span>
            </div>

            <div id="navbar_right" className="flex items-center bg-[#ff007a]">
                <ion-icon className="bg-white" name="cart"></ion-icon>
                <button>BUY</button>
            </div>

        </div>
    )
}

export default Navbar
