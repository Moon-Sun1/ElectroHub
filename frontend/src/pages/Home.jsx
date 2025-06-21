import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cataegories from "../components/Cataegories";
import NewsLetter from "../components/NewsLetter";
import CardContainer from "../components/CardContainer";
import Nav from "../components/Nav";
import TrendProducts from "../components/TrendProducts";


import appleWatchImage from "../assets/Apple_Watch_Ultra_2-removebg-preview.png";
import xboxImage from "../assets/Xbox_series_x_slide-removebg-preview.png";
import samsungCameraImage from "../assets/samsung_gear_camera-removebg-preview.png";
// ... other image imports

const data = [
  {
    id: 1,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: appleWatchImage, // Corrected path
    description: "This is a description of the product",
    company: "apple",
    category: "Accessories",
    insert_Date: "2025-01-14",
    rate: 4.5,
  },
  {
    id: 2,
    name: "Xbox series x",
    price: 500,
    image: xboxImage, // Corrected path
    description: "This is a description of the product",
    company: "apple",
    category: "Gaming",
    insert_Date: "2025-01-21",
    rate: 4.5,
  },
  {
    id: 3,
    name: "Samsung gear camera",
    price: 500,
    image: samsungCameraImage, // Corrected path
    description: "This is a description of the product",
    company: "apple",
    category: "Camera",
    insert_Date: "2025-01-7",
    rate: 4.5,
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: appleWatchImage, // Corrected path
    description: "This is a description of the product",
    company: "apple",
    category: "Accessories",
    insert_Date: "2025-01-21",
    rate: 4.5,
  },
];


function Home() {
  return (
    <div className=" w-full h-full  font-body flex flex-col space-y-10 bg-body-background">
      <Nav />
      <main className=" px-2 space-y-10
                        xl:px-16 xl:space-y-20">
        <Hero />
        <Cataegories />
        <TrendProducts />
        <CardContainer data={data}/>
      </main>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;