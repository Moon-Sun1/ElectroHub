import CardContainer from "../components/CardContainer";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import appleWatchImage from "../assets/Apple_Watch_Ultra_2-removebg-preview.png";
import xboxImage from "../assets/Xbox_series_x_slide-removebg-preview.png";
import samsungCameraImage from "../assets/samsung_gear_camera-removebg-preview.png";

// Import category-specific banner images
import accessoriesBanner from "../assets/accesoriesBanner.jpg";
import gamingBanner from "../assets/gamingBanner.jpg";
import smartPhonesBanner from "../assets/smartPhonesBanner.jpg";
import cameraBanner from "../assets/cameraBanner.jpg";
import laptopBanner from "../assets/laptopBanner.jpg";

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

const CategoryPage = () => {
  const { categoryName } = useParams();

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
