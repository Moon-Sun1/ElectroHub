import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CardContainer from "../components/CardContainer"

function Home(){
    return(
        <div className="w-full h-full font-body flex flex-col space-y-4 bg-body-background">
            <Hero />
            <h5 className="text-4xl text-center font-bold">
                Featured Product
            </h5>
            <CardContainer />
            <Footer />
        </div>
    )
}

export default Home