const Features = () => {
    return (
        <div id="features" className="flex items-center justify-center">

            <div className="bg-white flex flex-wrap items-center justify-center">

                <div>
                    <img className="w-[120px] mb-[25px]" src="1.webp" alt="" />
                    <h3 className="mb-[15px] text-[28px]">SECURE PAYMENT</h3>
                    <p className="text-[#00000080] text-[20px]"> 
                        Pay for vignettes in one click for several cars and countries at once
                    </p>
                </div>

                <div>
                    <img className="w-[120px] mb-[25px]" src="2.webp" alt="" />
                    <h3 className="mb-[15px] text-[28px]">TIME TRACKING</h3>
                    <p className="text-[#00000080] text-[20px]">
                        Keep track of your vignette or receive our notifications
                    </p>
                </div>

                <div>
                    <img className="w-[120px] mb-[25px]" src="3.webp" alt="" />
                    <h3 className="mb-[15px] text-[28px]">LANGUAGES</h3>
                    <p className="text-[#00000080] text-[20px]">
                        You will understand us in <u>14 languages</u> 
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Features
