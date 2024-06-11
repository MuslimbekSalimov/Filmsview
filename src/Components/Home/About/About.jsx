import JasonBroune from "../../img/JaconBroune.png";
import ACtion from "../../img/Action.png";
import Triller from "../../img/Thriller.png";
// import Pic from "../../img/Pictures.png";
import Img from "../../img/Image.png";
import Play from "../../img/Play.png";
import Paganitaion from "../../img/Pagination.png";
import NextTraillet from "../../img/Next trailer.png";

import Oz from "../../img/Oz.png"
import Oz1 from "../../img/Oz1.png";
import Oz2 from "../../img/Oz2.png";
import Oz3 from "../../img/Oz3.png";
import Oz4 from "../../img/Oz4.png";
import Oz5 from "../../img/Oz5.png";

function About() {
    return (
        <>
        <section className="about">
            <div className="container flex max-lg:flex-col">
                <div className="flex">
                <h1 className="vertical w-[25px] h-[460px] pl-[3px] font-[AlexBrush] font-[600] text-[14px] text-[#FFFFFF]  bg-[#ea4d4d] text-center">TRAILERS</h1>
                <div className="flex flex-col bg-[#000] relative">
                <div className="flex max-sm:flex-col-reverse bg-[#000] items-start gap-[25px]">
                    <img className="w-[156px] h-[220px] ml-[15px] mt-[10px]" src={JasonBroune} alt="JasonBroune" />

                    <div className="flex flex-col items-center gap-[15px] bg-[#000]">
                        <h2 className="text-[26px] font-[Actor] text-[#FFFFFF] pt-[10px]">Jason Bourne</h2>

                        <div className="flex items-center gap-[45px]">
                            <ul className="flex flex-col items-start gap-[10px]">
                                <li>
                                    <a className="text-[#70B0FF] font-[Actor] text-[14px]" href="#None">year</a>
                                </li>
    
                                <li>
                                    <a className="text-[#70B0FF] font-[Actor] text-[14px]" href="#None">country</a>
                                </li>
    
                                <li>
                                    <a className="text-[#70B0FF] font-[Actor] text-[14px]" href="#None">director</a>
                                </li>

                                <li>
                                    <a className="text-[#70B0FF] font-[Actor] text-[14px]" href="#None">genres</a>
                                </li>

                                <li>
                                    <a className="text-[#70B0FF] font-[Actor] text-[14px]" href="#None">budget</a>
                                </li>

                                <li>
                                    <a className="text-[#70B0FF] font-[Actor] text-[14px]" href="#None">duration</a>
                                </li>
                            </ul>

                            <ul className="flex flex-col items-start gap-[10px]">
                                <li>
                                    <p className="font-[Actor] text-[14px] text-[#FFFFFF]" href="#None">2016</p>
                                </li>
    
                                <li>
                                    <p className="font-[Actor] text-[14px] text-[#FFFFFF]" href="#None">USA</p>
                                </li>
    
                                <li>
                                    <p className="font-[Actor] text-[14px] text-[#FFFFFF]" href="#None">Paul Greengrass</p>
                                </li>

                                <li className="flex items-center gap-[5px]">
                                    <img src={ACtion} alt="Action" />
                                    <img src={Triller} alt="Triller" />
                                </li>

                                <li>
                                    <p className="font-[Actor] text-[14px] text-[#FFFFFF]" href="#None">$120 000 000</p>
                                </li>

                                <li>
                                    <p className="font-[Actor] text-[14px] text-[#FFFFFF]" href="#None">123 min</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="w-[471px] h-[63px] table-fixed max-sm:w-[250px] font-[Actor] text-[#FFFFFF] text-[14px] pl-[10px] pt-[10px] pb-[10px]">You might remember the Dell computer commercials in which p youth reports this exciting news to his friends that they are about 
                to get their new computer by telling them.</p>

                <div className="flex items-center gap-[5px] pl-[10px] flex-wrap">
                    <img className=" w-[80] h-[80] " src={Oz} alt="oz" />
                    <img className=" w-[80] h-[80] " src={Oz1} alt="oz" />
                    <img className=" w-[80] h-[80] " src={Oz2} alt="oz" />
                    <img className=" w-[80] h-[80] " src={Oz3} alt="oz" />
                    <img className=" w-[80] h-[80] " src={Oz4} alt="oz" />
                    <img className=" w-[80] h-[80] " src={Oz5} alt="oz" />
                </div>
                </div>
                </div> 

                <div className="bond relative w-[745px] table-fixed max-md:w-[300px]">
                    <img className="w-[769px] h-[459px]" src={Img} alt="img" />
                    <img className="absolute top-[50%] left-[50%] translate-x-[-10px] translate-y-[-10px] cursor-pointer" src={Play} alt="play" />

                    <h3 className="font-[Actor] text-[32px] absolute top-[75%] text-[#FFFFFF] pl-[20px]">Jason Bourne (2016)</h3>
                    <p className="font-[Actor] text-[18px] absolute top-[85%] text-[#FFFFFF] pl-[20px] opacity-80">Stars: Matt Damon, Tommy Lee Jones, Alicia Vikander</p>
                    <img className=" w-[126px] h-[10px]  absolute top-[87%] left-[75%] max-md:hidden" src={Paganitaion} alt="Paganitaion" />
                    <img className="w-[36px] h-[409px] absolute top-[0px] left-[95%] cursor-pointer max-md:hidden" src={NextTraillet} alt="next" />
                </div>
            </div>
        </section>
        </>
    )
}

export default About