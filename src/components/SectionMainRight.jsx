const SectionMainRight = () => {
    return (
        <div id="section_main_right">
            <div className="text-white flex flex-wrap justify-around">

                <div id="car" className="rounded-[35px] w-[110px] h-[110px] bg-[#89d5ff4d] flex items-center justify-center">
                    <img className="  w-[60px]" src="car.webp" alt="" />
                    <span className="absolute">2A</span>
                </div>

                <div id="bike" className="rounded-[35px] w-[110px] h-[110px] bg-[#deb5ff4d] flex items-center justify-center">
                    <img className=" w-[60px]" src="motorbike.webp" alt="" />
                    <span className="absolute">1</span>
                </div>

                <div id="van" className="rounded-[35px] w-[110px] h-[110px] bg-[#fff3b54d] flex items-center justify-center">
                    <img className=" w-[60px]" src="van.webp" alt="" />
                    <span className="absolute">2B</span>
                </div>

            </div>
        </div>
    )
}

export default SectionMainRight
