import CardContainer from "../components/CardContainer";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";

// Import category-specific banner images
import accessoriesBanner from "../assets/accesoriesBanner.jpg";
import gamingBanner from "../assets/gamingBanner.jpg";
import smartPhonesBanner from "../assets/smartPhonesBanner.jpg";
import cameraBanner from "../assets/cameraBanner.jpg";
import laptopBanner from "../assets/laptopBanner.jpg";

// test data for the category page
import data from "../../../backend/data/products.json";// Adjust the path as necessary

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch products from the server
    const fetchProducts = async () => {
      try{
        fetch(`http://localhost:3000/products`)
      }catch(error){
        console.error("Error fetching products:", error);
      }
    }
  }, []);

  const categoryProducts = data.filter((product) => {
    return product.category.toLowerCase() === categoryName.toLowerCase();
  });

  // 1. Determine the correct banner image based on categoryName:
  let bannerImage;
  switch (categoryName.toLowerCase()) {
    case "accessories":
      bannerImage = accessoriesBanner;
      break;
    case "gaming":
      bannerImage = gamingBanner;
      break;
    case "smartphones":
      bannerImage = smartPhonesBanner;
      break;
    case "camera":
      bannerImage = cameraBanner;
      break;
    case "laptops":
      bannerImage = laptopBanner;
      break;
    default:
      bannerImage = accessoriesBanner; // Default banner if category not found
      break;
  }

  return (
    <div className="relative font-body bg-body-background">
      <Nav />
      <main className="space-y-8">
        <div className="relative w-full">
          {/* 2. Use the dynamically determined bannerImage: */}
          <img
            src={bannerImage} // Use the variable here
            alt={`${categoryName} Banner`} // More descriptive alt text
            className="object-cover w-full h-52"
          />
          <nav className="text-body-background z-10 w-full  absolute top-[50%] flex justify-center gap-4 text-2xl font-bold font-headline">
            <Link
              to="/"
              className="text-body-background hover:text-main-green
                transition duration-300 ease-in-out"
            >
              Home
            </Link>
            /
            <Link
              to={`/category/${categoryName.toLowerCase()}`}
              className="text-body-background hover:text-main-green
                transition duration-300 ease-in-out"
            >
              {categoryName}
            </Link>
          </nav>
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
        </div>
        <section className="py-5">
          <CardContainer data={categoryProducts} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
