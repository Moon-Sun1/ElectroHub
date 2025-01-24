import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Cataegories from "../components/Cataegories"
import NewsLetter from "../components/NewsLetter"
import CardContainer from "../components/CardContainer"
import Nav from "../components/Nav"

function Home(){
    return(
        <div className=" w-full h-full  font-body flex flex-col space-y-10 bg-body-background">
            <Nav />
            <Hero />
            <Cataegories/>
            <CardContainer />
            <NewsLetter/>
            <Footer />
        </div>
       
    )
}

export default Home
