import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cataegories from "../components/Cataegories";
import NewsLetter from "../components/NewsLetter";
import CardContainer from "../components/CardContainer";
import Nav from "../components/Nav";
import TrendProducts from "../components/TrendProducts";

function Home() {
  return (
    <div className=" w-full h-full  font-body flex flex-col space-y-10 bg-body-background">
      <Nav />
      <main className=" px-2 space-y-10
                        xl:px-16 xl:space-y-20">
        <Hero />
        <Cataegories />
        <TrendProducts />
        <CardContainer />
      </main>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
