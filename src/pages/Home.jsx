import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Cataegories from "../components/Cataegories"

function Home(){
    return(
        <div className="font-body">
   
        <div className="w-full h-full font-body">
            <Hero />
        </div>
        <Cataegories/>
        </div>
    )
}

export default Home
