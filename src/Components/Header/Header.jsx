import Logo from "../img/Logo.png";
import Search from "../img/Search.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
// import { useRef } from "react";


function Header() {

    const [open,setOpen] = useState(false)

    

    return (
        <>
        <header className="header mt-[10px]">
            <div className="container">
                <div className="flex items-center justify-between  bg-[#FFFF]">
                    <a href="Logo">
                        <img className="w-[115px] h-[59px]" src={Logo} alt="Logo" />
                    </a>

                   <ul className={`lg:flex max-lg:flex-col absolute lg:static left-[20px] items-center max-lg:top-[10%] max-lg:w-[80%] bg-[#FFF] z-50 transition-none duration-700
                     ${open ? 'top-20':'left-[-100%]'}`}>
                    <li className="flex items-center  w-[110px] h-[80px] bg-[#FFF] hover:bg-[#EA4737] ease-in duration-300">
                        <a className="font-[Actor] text-center pl-[12px]" href="#Box Office">Box Office</a>
                    </li>

                    <li className="flex items-center  w-[110px] h-[80px] bg-[#FFF] hover:bg-[#EA4737] ease-in duration-300">
                        <a className=" pl-[28px]" href="Media">Media</a>
                    </li>

                    <li className="flex items-center  w-[110px] h-[80px] bg-[#FFF] hover:bg-[#EA4737] ease-in duration-300">
                        <a className="pl-[28px]" href="Society">Society</a>
                    </li>

                    <li className="flex items-center  w-[110px] h-[80px] bg-[#FFF] hover:bg-[#EA4737] ease-in duration-300">
                        <a className="pl-[25px]" href="Ratings">Ratings</a>
                    </li>

                    <li className="flex items-center  w-[160px] h-[80px] bg-[#FFF] hover:bg-[#EA4737] ease-in duration-300">
                        <a className="pl-[18px]" href="DVD & Blu-Ray">DVD & Blu-Ray</a>
                    </li>

                    <div className="flex items-center gap-[20px] lg:hidden max-sm:flex-col">
                        <form className="form h-[30px] flex cursor-pointer bg-[#FFF] outline-none rounded-[50px] items-center " >
                             <input className="w-[0px] h-[30px] outline-none pl-[20px] rounded-[0px] ease-in duration-300 " type="search"/>
                                 <i href="Search">
                                       <img src={Search} alt="Search" />  
                                </i>
                          </form>
                     <button className=" w-[100px] h-[30px] bg-[blue] rounded-[50px] text-white font-[Actor] hover:bg-[#EA4737] ease-in duration-300">
                     <SignedOut>
                       <SignInButton />
                          </SignedOut>
                         <SignedIn>
                           <UserButton />
                        </SignedIn>
                     </button>
                   </div>
                   </ul>

                   <div className="flex items-center gap-[20px] max-lg:hidden">
                        <form className="form h-[30px] flex cursor-pointer bg-[#FFF] outline-none rounded-[50px] items-center " >
                             <input className="w-[0px] h-[30px] outline-none pl-[20px] rounded-[0px] ease-in duration-300 " type="search"/>
                                 <i href="Search">
                                       <img src={Search} alt="Search" />  
                                </i>
                          </form>
                     <button className=" w-[100px] h-[30px] bg-[blue] rounded-[50px] text-white font-[Actor] hover:bg-[#EA4737] ease-in duration-300">
                     <SignedOut>
                       <SignInButton />
                          </SignedOut>
                         <SignedIn>
                           <UserButton />
                        </SignedIn>
                     </button>
                   </div>

                   
                   <div onClick={()=>setOpen(!open)} className="button lg:hidden text-3xl cursor-pointer">
                   <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                   </div>

                </div>
            </div>
        </header>
        </>
    )
}

export default Header;