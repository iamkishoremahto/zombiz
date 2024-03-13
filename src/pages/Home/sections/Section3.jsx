

export default function Section3() {
  return (
    <div className="section3 flex items-center justify-center min-h-[700px] bg-[#f9faff]">
        <div className="container grid sm:grid-cols-2 grid-cols-1 border-2 min-h-[500px] gap-[100px]">
                <div className="about flex items-center justify-center">
                    <div className="aboutWrapper flex flex-col max-w-[600px] gap-7">
                        <h1 className=" text-4xl text-gray-700 font-Playfair">About Us</h1>
                        <p className=" text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
                <di className="aboutImage grid place-items-center  ">
                    <div className="imageBorder border-[3px] sm:h-[400px] sm:w-[500px] w-[300px] h-[230px] border-gray-300  relative">
                        <img className="absolute left-5 -top-8 shadow-cardShadow" src="/images/about-part.jpg" alt="about" />
                    </div>
                </di>
        </div>
    </div>
  )
}
