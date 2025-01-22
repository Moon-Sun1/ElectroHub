import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CardContainer from "../components/CardContainer"
import Nav from "../components/Nav"

function Home(){
    return(
        <div className="w-full h-full font-body flex flex-col space-y-10 bg-body-background">
            <Nav />
            <Hero />
            <CardContainer />
            <Footer />
        </div>
    )
}

export default Home
