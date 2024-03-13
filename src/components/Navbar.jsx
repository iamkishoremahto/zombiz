
import { FaFacebookF, FaLinkedinIn, FaPhone, FaBars } from "react-icons/fa6";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { useState } from "react"

export default function Navbar() {
    const [show, setShow] = useState(false)
    return (
        <>

            <div className="navbarWraper  pt-2">

                <div className="contactInfo text-gray-600 grid place-items-center ">
                    <div className="container p-5 sm:grid grid-cols-2 ">
                        <div className="contact flex items-center justify-start gap-5">
                            <div className="phone flex items-center gap-3"><span><FaPhone /></span><span className="cursor-pointer hover:text-blue-500 transition-all">+91 8596857545</span></div>
                            <div className="email flex items-center gap-3"><span><MdEmail /></span><span className="cursor-pointer hover:text-blue-500 transition-all">info@email.com</span></div>
                        </div>

                        <div className="socialConnect flex items-start justify-end">
                            <div className="wraper flex items-center gap-5">

                                <div className="registerLogin flex gap-3 items-center">
                                    <a href="#" className="cursor-pointer hover:text-blue-500 transition-all">Register</a>
                                    <p>/</p>
                                    <a href="#" className="cursor-pointer hover:text-blue-500 transition-all">Login</a>
                                </div>
                                <div className="social flex items-center gap-5">
                                    <a href="#" className=" cursor-pointer hover:text-blue-500 transition-all"><FaFacebookF /></a>
                                    <a href="#" className=" cursor-pointer hover:text-blue-500 transition-all"><FaGooglePlusG /></a>
                                    <a href="#" className=" cursor-pointer hover:text-blue-500 transition-all"><FaLinkedinIn /></a>
                                    <a href="#" className=" cursor-pointer hover:text-blue-500 transition-all"><FaTwitter /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="navwraperMain  z-50 ">
                    <nav className=" bg-[rgba(115,112,216,1)] py-5  flex flex-col items-center justify-center  relative top-0">
                        <div className="container p-5 flex items-center justify-between">
                            <div className="logo">
                                <img src="./images/logo.png" alt="logo" className="logo" />
                            </div>
                            <div className="navmenu sm:flex hidden items-center gap-5 text-white">
                                <a href="#" className=" hover:font-bold transition-all">Home</a>
                                <a href="#" className=" hover:font-bold transition-all">About</a>
                                <a href="#" className=" hover:font-bold transition-all">Service</a>
                                <a href="#" className=" hover:font-bold transition-all">Project</a>
                                <a href="#" className=" hover:font-bold transition-all">Team</a>
                                <a href="#" className=" hover:font-bold transition-all">Blog</a>
                                <a href="#" className=" hover:font-bold transition-all">Contact</a>
                                <a href="#" className=" hover:font-bold transition-all"><IoCartOutline /></a>
                                <a href="#" className=" hover:font-bold transition-all"><IoSearch /></a>
                            </div>
                            <div className="handburger sm:hidden">
                                <button onClick={
                                    () => {
                                        setShow(!show);
                                    }
                                } ><FaBars className="text-2xl" /></button>
                            </div>
                        </div>
                        <div className={`mobileNave absolute bg-blue-400 w-full top-[107px] z-50 ${show ? "p-5" : "p-0"} sm:p-0 transition-all`}>
                            <div className={`navmenu transition-all duration-500  overflow-y-scroll sm:max-h-[0px] ${show ? "max-h-[300px] h-[300px]" : "max-h-0 h-0"} overflow-hidden flex flex-col items-start gap-5 text-white`}>
                                <a href="#" className=" hover:font-bold transition-all">Home</a>
                                <a href="#" className=" hover:font-bold transition-all">About</a>
                                <a href="#" className=" hover:font-bold transition-all">Service</a>
                                <a href="#" className=" hover:font-bold transition-all">Project</a>
                                <a href="#" className=" hover:font-bold transition-all">Team</a>
                                <a href="#" className=" hover:font-bold transition-all">Blog</a>
                                <a href="#" className=" hover:font-bold transition-all">Contact</a>
                                <a href="#" className=" hover:font-bold transition-all"><IoCartOutline /></a>
                                <a href="#" className=" hover:font-bold transition-all"><IoSearch /></a>
                            </div>
                        </div>
                    </nav>

                </div>


            </div>

        </>
    )
}
