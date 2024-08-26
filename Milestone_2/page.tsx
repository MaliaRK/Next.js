import Contact from "./components/navbar/contact/page"
import Home from "./components/navbar/home/page"
import Navbar from "./components/navbar/page"

export default function MyPage(){
    return <div>
        <Navbar/>
        <Home/>
        <Contact/>
    </div>
}