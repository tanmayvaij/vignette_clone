const SectionMainAction = () => {
    return (
        <div id="section_main_action">

            <div className="text-[16px] flex items-center justify-center flex-col">

                <button className="text-white rounded-[50px] px-[30px] py-[15px] bg-[#0066ff] flex items-center justify-around">
                    <ion-icon size="large" name="cart" ></ion-icon>
                    <span>BUY VIGNETTE</span>
                </button>

                <button className="bg-white rounded-[50px] px-[30px] py-[15px] flex items-center justify-around">
                    <ion-icon size="large" name="information-circle-outline"></ion-icon>
                    <span>CHECK STATUS</span>
                </button>

            </div>

        </div>
    )
}

export default SectionMainAction
