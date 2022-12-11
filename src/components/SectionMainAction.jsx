const SectionMainAction = () => {
    return (
        <div id="section_main_action">

            <div>

                <button id="buy_btn" className="text-white bg-[#0066ff]">
                    <ion-icon size="large" name="cart" ></ion-icon>
                    <span>BUY VIGNETTE</span>
                </button>

                <button id="check_btn" className="bg-white">
                    <ion-icon size="large" name="information-circle-outline"></ion-icon>
                    <span>CHECK STATUS</span>
                </button>

            </div>

        </div>
    )
}

export default SectionMainAction
