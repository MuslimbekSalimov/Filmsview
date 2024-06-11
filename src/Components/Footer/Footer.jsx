import Apple from "../img/Apple.png";
import Play from "../img/Playy.png";
import Amazon from "../img/amazon.png";

import Fuulow from "../img/Follow IMDb on.png";

import Fliscri from "../img/Flickr.png";
import Amazonn from "../img/Amazon.com-Logo.svg.png"

function Footer() {
    return (
        <>
        <footer className="footer">

            <div className="container ">
                <div className="flex max-lg:flex-col">
                <div className="bg-[#FFFFFF] flex gap-[31px] pt-[30px]  pl-[10px] pr-[10px] max-lg:flex-col
                ">
                <div className="flex flex-col gap-[16px]">
                    <h5>IMDb Everywhere</h5>
                    <div className="flex items-center gap-[9px] max-sm:flex-col">
                        <img className="w-[124px] h-[38px]" src={Apple} alt="Apple" />
                        <img className="w-[124px] h-[38px]" src={Play} alt="Apple" />
                        <img className="w-[124px] h-[38px]" src={Amazon} alt="Apple" />
                    </div>
                    <p className="w-[390px] font-[Actor] text-[14px] max-sm:w-[100px]">Find showtimes, watch trailers, browse photos, track your Watchlist and rate your favorite movies and TV shows on your phone or tablet!</p>
                    <p className="text-[Blue] font-[Actor] text-[16px]">IMDB Mobile site</p>
                </div>

                <div className="fullow">
                    <img src={Fuulow} alt="" />
                </div>

                <div className="flix">
                    <img src={Fliscri} alt="" />
                </div>

                <div className="flex items-start gap-[30px]">
                    <ul className="flex flex-col items-start">
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Home</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Top Rated Movies</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Box Office</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">TV</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Coming Soon</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Site Index</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Search</a></li>
                    </ul>

                    <ul>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Contact Us</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Message Boards</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Account</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">News</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Press Room</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Advertising</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Jobs</a></li>
                    </ul>

                    <ul>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">IMDbPro</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Box Office Mojo</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Withoutabox</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Conditions of Use</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Privacy Policy</a></li>
                        <li><a className="font-[Actor] text-[14px] text-[#4A90E2]" href="#None">Interest-Based Ads</a></li>
                    </ul>
                </div>
                </div>
                </div>
                <div className="flex justify-between bg-[#FFFFFF] pt-[27px] pb-[18px] pl-[10px] pr-[10px] max-sm:flex-col">
                    <div className="text-[13px] flex ">An. <span>
                        <img className="w-[100px] h-[20px]" src={Amazonn} alt="" />
                           </span>company</div>
                         <h6 className="text-[13px] font-[Abzee]"><span className="text-[#4A90E2] text-[13px]">Copyright © </span> 1990-2016 <span className="text-[#4A90E2]">IMDb.com, Inc.</span></h6>  
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;