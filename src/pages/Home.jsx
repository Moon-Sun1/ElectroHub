import Hero from "../components/Hero"
import Footer from "../components/Footer"
<<<<<<< HEAD
import Cataegories from "../components/Cataegories"
=======
import CardContainer from "../components/CardContainer"
import Nav from "../components/Nav"
>>>>>>> 4399eb5800469442c28a8fd4efeb3d4c26fff57e

function Home(){
    return(
        <div className="w-full h-full font-body flex flex-col space-y-10 bg-body-background">
            <Nav />
            <Hero />
<<<<<<< HEAD
        </div>
        <Cataegories/>
=======
            <CardContainer />
            <Footer />
>>>>>>> 4399eb5800469442c28a8fd4efeb3d4c26fff57e
        </div>
    )
}

export default Home
