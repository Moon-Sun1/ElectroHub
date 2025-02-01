
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const Hero = () => {
  // Setting up state for current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image objects with id, src, alt text, and title
  const images = [
    {
      id: 0,
      src: "src/assets/Apple_Watch_Ultra_2-removebg-preview.png", // Path to image (corrected path with leading slash)
      alt: "Apple Watch Ultra 2", // Descriptive alt text for accessibility
      title: "Apple Watch Ultra 2", // Title of the image
    },
    {
      id: 1,
      src: "src/assets/samsung_gear_camera-removebg-preview.png", // Path to image
      alt: "Samsung Gear Camera", // Descriptive alt text for accessibility
      title: "Samsung Gear Camera", // Title of the image
    },
    {
      id: 2,
      src: "src/assets/Xbox_series_x_slide-removebg-preview.png", // Path to image
      alt: "Xbox Series X", // Descriptive alt text for accessibility
      title: "Xbox Series X", // Title of the image
    },
  ];

  // Function to handle the next slide
  function handleNextSlide() {
    setCurrentSlide((c) => (c + 1) % images.length); // Increment current slide index, wrapping around with modulo operator
  }

  // Function to handle the previous slide
  function handlePrevSlide() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length); // Decrement current slide index, wrapping around with modulo operator
  }

  // useEffect hook to automatically advance slides every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 3000); // Slide transition interval set to 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); 

  // Hook to navigate to different routes
  const navigateTo = useNavigate();
  const handleNavigate = (location) => {
    navigateTo(location); // Function to navigate to specified route
  };

  // JSX structure of the Hero component
  return (
    <div className="overflow-auto my-10 w-full flex flex-col py-5 px-3 items-center font-body space-y-10 text-center
                    md:px-4
                    lg:flex-row lg:justify-between lg:items-end lg:h-[60vh] lg:px-12">
      <div className="flex flex-col space-y-4 
                      lg:items-start lg:w-[50%] lg:justify-center lg:space-y-10 lg:h-full">
        <h1 className="text-3xl font-headline font-bold mx-0 px-0
                       md:text-[50px]
                       lg:text-[50px]
                       lg:text-start">
          Your <span className="text-main-green">Electronics</span> Haven
        </h1>
        <p className="font-normal text-lg 
                      md:text-3xl 
                      lg:text-start lg:text-xl">
          Discover the latest gadgets and electronics.
          From smartphones and laptops to gaming consoles and smart home
          devices, we've got you covered.
        </p>
        <div className="flex justify-center space-x-4 md:space-x-6 lg:space-x-3">
          <button
            type="button"
            className="bg-main-green py-2 px-4 rounded-md text-white text-xl hover:bg-main-green/80 transition-colors duration-300 
            sm:text-3xl sm:py-4 sm:px-5 sm:rounded-xl
            md:text-2xl"
            onClick={() => handleNavigate("/contact")}
          >
            Contact Us
          </button>
          <button
            type="button"
            className="py-2 px-4 rounded-md border border-main-green text-main-green text-xl hover:bg-main-green/10 transition-colors duration-300
             md:text-3xl md:py-4 md:px-5 md:rounded-xl
             lg:text-xl"
            onClick={() => handleNavigate("/about")}
          >
            About Us
          </button>
        </div>
      </div>

      <div className="relative w-full h-64 overflow-hidden rounded-2xl 
                      lg:w-[45%] lg:h-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`flex justify-center items-center absolute w-full h-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain w-full h-[80%]"
            />
          </div>
        ))}
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-green-400 to-blue-500"></div>
        <FaChevronCircleLeft
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-3xl md:text-5xl z-20 text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
          onClick={handlePrevSlide}
        />
        <FaChevronCircleRight
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-3xl md:text-5xl z-20 text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
          onClick={handleNextSlide}
        />
      </div>
    </div>
  );
};

export default Hero;
