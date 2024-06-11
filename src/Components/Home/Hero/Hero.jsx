import First from "../../img/Assasin.jpg";
import Second from "../../img/2.png";
import Third from "../../img/DoctorrStangr.jpg"
import Four from "../../img/Wonder Woman.png";

function Hero() {
    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="flex bg-[#FFFFFF]">
                    <div className="vertical">
                        <h1 className="vertical w-[25px] pl-[3px] font-[Abhaya Libre] font-[600] tracking-tight text-[14px] text-[#FFFFFF]  bg-[#2998E2] text-center">NOW PLAYING</h1>
                        </div>

                    <ul className="flex flex-wrap items-center gap-[4px] table-fixed">
                        <li className=" relative grow basis-[235px]">
                            <img className=" w-[253px] h-[368px] z-[100] opacity-95" src={First} alt="First" />
                            <h1 className="absolute w-[252px] font-[Rubik] text-[18px] text-[#FFFFFF] bottom-[41px] left-[21px]">Assassin's Creed</h1>
                            <p className="absolute text-[14px] font-[Rubik] text-[#ffffff] bottom-[18px] left-[21px] opacity-70">Action, adventure, fantasy</p>
                        </li>

                        <li className=" relative grow basis-[225px]">
                            <img className=" w-[253px] h-[368px] z-[100] opacity-95" src={Second} alt="First" />
                            <h1 className="absolute w-[222px] font-[Rubik] text-[18px] text-[#FFFFFF] bottom-[41px] left-[21px]">Fantastic Beasts and Where to Find Them</h1>
                            <p className="absolute text-[14px] font-[Rubik] text-[#ffffff] bottom-[18px] left-[21px] opacity-70">Action, adventure, fantasy</p>
                        </li>

                        <li className=" relative grow basis-[255px]">
                        <img className=" w-[253px] h-[368px] z-[100] opacity-95" src={Third} alt="First" />
                            <h1 className="absolute w-[252px] font-[Rubik] text-[18px] text-[#FFFFFF] bottom-[41px] left-[21px]">Doctor Strange</h1>
                            <p className="absolute text-[14px] font-[Rubik] text-[#ffffff] bottom-[18px] left-[21px] opacity-70">Action, adventure, fantasy</p>
                        </li>

                        <li className=" relative grow basis-[255px]">
                            <img className=" w-[253px] h-[368px] z-[100] opacity-95" src={Second} alt="First" />
                            <h1 className="absolute w-[252px] font-[Rubik] text-[18px] text-[#FFFFFF] bottom-[41px] left-[21px]">Assassin's Creed</h1>
                            <p className="absolute text-[14px] font-[Rubik] text-[#ffffff] bottom-[18px] left-[21px] opacity-70">Action, adventure, fantasy</p>
                        </li>

                        <li className=" relative grow basis-[250px]">
                            <img className=" w-[253px] h-[368px] z-[100] opacity-95" src={Four} alt="First" />
                            <h1 className="absolute w-[252px] font-[Rubik] text-[18px] text-[#FFFFFF] bottom-[41px] left-[21px]">Wonder Woman</h1>
                            <p className="absolute text-[14px] font-[Rubik] text-[#ffffff] bottom-[18px] left-[21px] opacity-70">Action, adventure, fantasy</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;