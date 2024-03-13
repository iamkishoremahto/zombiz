
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation,EffectFade,Autoplay } from 'swiper/modules';
import 'animate.css';


export default function Section1() {
    return (
        <div className="section1 -z-0">
            <Swiper 
            navigation={true} 
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Navigation,EffectFade,Autoplay]}
            
            className="mySwiper">
                <SwiperSlide>
                    <div className="frame1 min-h-[800px]  bg-[url('/images/banner1.jpg')] ">
                        <div className="contentWrapper bg-[rgba(115,112,215,.6)] min-w-full min-h-[800px] flex items-start justify-center ">
                            <div className="content container py-11   sm:px-11 px-5 nimate__animated animate__shakeX">
                                <div className="contentWrapper max-w-[800px] flex flex-col gap-6 text-white py-[200px]">

                                    <h1 className=' font-Playfair sm:text-[5rem] text-[3rem]  max-w-[500px] sm:leading-[5.3rem] leading-[3rem] animate__animated animate__fadeInUp'>Consult Your Business </h1>
                                    <p className=' font-Lato sm:text-2xl text-lg animate__animated animate__fadeInUp'>We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.</p>

                                    <div className="buttonsWrapper flex sm:items-center items-start gap-5 sm:flex-row flex-col animate__animated animate__fadeInLeft ">
                                        <a href="#" className=' py-5 w-[220px] flex items-center justify-center bg-white text-blue-900 font-bold border-[1px] border-white hover:bg-transparent transition-all duration-300 hover:text-white'>Get Started</a>
                                        <a href="#" className='py-5 w-[220px] flex items-center justify-center bg-white text-blue-900 font-bold border-[1px] border-white hover:bg-transparent transition-all duration-300 hover:text-white'>Explore More</a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="frame1 min-h-[800px]  bg-[url('/images/banner2.jpg')] bg-cover ">
                        <div className="contentWrapper bg-[rgba(115,112,215,.6)] min-w-full min-h-[800px] flex items-start justify-center  ">
                            <div className="content container py-11   sm:px-11 px-5">
                                <div className="contentWrapper max-w-[800px] flex flex-col gap-6 text-white py-[200px]">

                                    <h1 className=' font-Playfair sm:text-[5rem] text-[3rem] max-w-[600px] sm:leading-[5.3rem] leading-[3rem] animate__animated animate__fadeInUp'>Consult Your Business With Us</h1>
                                    <p className=' font-Lato sm:text-2xl text-lg  animate__animated animate__fadeInUp'>We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.</p>

                                    <div className="buttonsWrapper flex sm:items-center items-start gap-5 sm:flex-row flex-col animate__animated animate__fadeInLeft">
                                        <a href="#" className=' py-5 w-[220px] flex items-center justify-center bg-white text-blue-900 font-bold border-[1px] border-white hover:bg-transparent transition-all duration-300 hover:text-white'>Get Started</a>
                                        <a href="#" className='py-5 w-[220px] flex items-center justify-center bg-white text-blue-900 font-bold border-[1px] border-white hover:bg-transparent transition-all duration-300 hover:text-white'>Explore More</a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
