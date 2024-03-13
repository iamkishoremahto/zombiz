import { Outlet } from  'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout() {
  return (
    <div className="mainWrapper min-h-screen flex flex-col relative">

    <div className="nba sticky sm:top-[-80px] top-[-100px] z-50">
    <Navbar />
    </div>
   
    
    <div className="outlet flex-1">
    <Outlet />
    </div>
    
    <Footer />
    </div>
  )
}
