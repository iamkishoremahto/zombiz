
import ServiceCard from "./subcomponents/ServiceCard"
import { ServiceData } from "./data/ServiceData"

export default function Section2() {
  return (
    <div className="section2 min-h-[850px] p-11 flex items-center justify-center ">
        <div className="contentWrapper container min-h-full flex flex-col items-center justify-center">
        <div className="headingContent py-10 flex flex-col items-center gap-7 ">
            <h1 className=" text-3xl font-bold font-Playfair">What We Do</h1>
            <p className=" max-w-[920px] text-center text-gray-400">Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="cardWrapper flex items-center gap-7 sm:flex-row flex-col">
            {
                    ServiceData.map((item) =>{
                        return <ServiceCard key= {item.id} data={item} />
                    })
            }

            {/* <ServiceCard />
            <ServiceCard />
            <ServiceCard /> */}
           
        </div>
        </div>
        
    </div>
  )
}
