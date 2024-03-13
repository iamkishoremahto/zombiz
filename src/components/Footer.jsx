
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa";



export default function Footer() {
    return (
        <>

            <footer className="  min-h-[400px] text-gray-300 grid place-items-center">
                <div className="footerMainWrapper bg-[#212135] grid place-items-center w-full sm:py-[100px] py-[50px]">
                    <div className="footerWrapper container grid sm:grid-cols-4 grid-cols-1  p-5 gap-5">
                        <div className="intro flex flex-col gap-5">
                            <div className="logo">
                                <img src="./images/logo.png" alt="logo" className="logo" />
                            </div>
                            <p className=" max-w-[250px] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laborum!</p>
                            <div className="social flex items-center gap-3">
                                <a href="#" className="p-3 bg-gray-400 text-[#212135] hover:bg-white transition-all rounded-lg"><FaFacebookF /></a>
                                <a href="#" className="p-3 bg-gray-400 text-[#212135] hover:bg-white transition-all rounded-lg"><FaGooglePlusG /></a>
                                <a href="#" className="p-3 bg-gray-400 text-[#212135] hover:bg-white transition-all rounded-lg"><FaLinkedinIn /></a>
                                <a href="#" className="p-3 bg-gray-400 text-[#212135] hover:bg-white transition-all rounded-lg"><FaTwitter /></a>
                            </div>
                        </div>
                        <div className="links grid sm:grid-cols-3 grid-cols-1 gap-5 col-span-2">
                            <div className="usefull ">
                                <h1 className=" text-2xl font-bold">Useful Links</h1>
                                <div className="linkWrapper flex flex-col gap-5 py-5">
                                    <a href="#" className=" hover:font-bold transition-all">Home</a>
                                    <a href="#" className=" hover:font-bold transition-all">About</a>
                                    <a href="#" className=" hover:font-bold transition-all">Service</a>
                                    <a href="#" className=" hover:font-bold transition-all">Project</a>
                                    <a href="#" className=" hover:font-bold transition-all">Team</a>
                                    <a href="#" className=" hover:font-bold transition-all">Blog</a>
                                    <a href="#" className=" hover:font-bold transition-all">Contact</a>
                                </div>

                            </div>
                            <div className="newsWrapper col-span-2  ">
                                <h1 className="text-2xl font-bold">From The News</h1>
                                <div className="newsList py-5 text-gray-400">
                                    <div className="news py-7 border-b-[1px] border-gray-400 max-w-[300px] ">
                                        <a href="#" className="hover:text-blue-500 transition-all">The Pros and Cons of Starting an Online Business.</a>
                                        <p className="pt-5">12th June 2045</p>
                                    </div>

                                    <div className="news py-7 max-w-[300px] ">
                                        <a href="#" className="hover:text-blue-500 transition-all">The Pros and Cons of Starting an Online Business.</a>
                                        <p className="pt-5">12th June 2045</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="newsletterWrapper flex flex-col gap-8 max-w-[250px]">
                            <h1 className="text-2xl font-bold">Our Newsletter</h1>
                            <p className="">Subscribe to our newsletter to get the latest News and offers..</p>

                            <div className="emailWrapper flex">
                                <input type="email" name="email" id="email" placeholder="Enter Address" className="text-2xl bg-[#3d3d4d] outline-none p-3 px-5 max-w-[200px]" />
                                <button className="p-5 bg-[rgba(115,112,216,1)] font-bold text-[1.2rem]">Go</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyrightsMainWrapper bg-[#1a1a2a] w-full p-5 flex items-center justify-center sm:flex-row flex-col  ">
                        <div className="copyrightWrapper grid grid-cols-1 container sm:grid-cols-2  ">
                            <p  className=" text-gray-500">© 2045 All Rights Reserved | Design by: <a href="#" className="text-blue-600">Kishore</a></p>
                            <div className="legalLinks flex items-start sm:justify-end justify-start gap-5 ">
                            <a href="#" className="">Legal</a>
                            <a href="#" className="">sitemap</a>
                            <a href="#" className="">Privacy</a>
                            <a href="#" className="">Policy</a>
                        </div>
                        </div>
                        
                </div>

            </footer>
        </>
    )
}
