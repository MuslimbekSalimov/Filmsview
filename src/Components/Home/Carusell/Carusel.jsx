import ded from "../../img/ded.png";
import Black from "../../img/Black.png";
import Jeccica from "../../img/Jaccica.png";
import House from "../../img/Housa.png";
import sense from "../../img/Sense.png";
import Bola from "../../img/bola.png";
import Qiz from "../../img/Qiz.png";
import Brat from "../../img/Brat.png";


function Carusel() {
    return(
        <>
        <section className="carusel">
            <div className="container">
                <div className="bg-[#FFFFFF] slider pl-[10px] pr-[10px] pb-[30px]">
                <h4 className="pb-[10px]">Recently viewed</h4>
                <div className="flex gap-[5px] slider-truck max-sm:flex-col">


                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={ded} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Black} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Jeccica} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={House} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={sense} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Bola} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Qiz} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Brat} alt="hi" /></li>

                {/* Return */}

                    <li className="slide w-[80px] h-[112px] ]"> <img className="imag" src={ded} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Black} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Jeccica} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={House} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={sense} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Bola} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={sense} alt="hi" /></li>
                    <li className="slide w-[80px] h-[112px] "> <img className="imag" src={Bola} alt="hi" /></li>
                </div>
                </div>
                <hr/>
            </div>
        </section>
        </>
    )
}

export default Carusel;