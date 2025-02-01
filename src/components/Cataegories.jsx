import { Link } from "react-router-dom";
import laptop from "../assets/Categories/laptop.png";
import mobile from "../assets/Categories/mobile.png";
import other from "../assets/Categories/other.png";
import camera from "../assets/Categories/camera.png";
import controller from "../assets/Categories/controller.png";

const Categories = () => {
  const categories = [
    { name: "Laptop", image: laptop, path: "laptop" },
    { name: "Mobile", image: mobile, path: "mobile" },
    { name: "Camera", image: camera, path: "camera" },
    { name: "Controller", image: controller, path: "controller" },
    { name: "Other", image: other, path: "other" },
  ];

  return (
    <div
      className="font-headline px-3 space-y-5
                    md:space-y-7"
    >
      <h1
        className="text-center text-3xl font-serif font-bold m-1 block w-full
                     md:text-4xl"
      >
        Categories
      </h1>

      <div
        className="flex flex-wrap justify-center space-x-3  space-y-2 items-end font-semibold w-full bg-white rounded-3xl p-3
                      md:justify-evenly"
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="rounded-lg  hover:text-main-green  w-[30%] flex flex-col items-center transition duration-300 hover:scale-110
            md:w-1/4
            lg:w-1/6"
          >
            <div
              className="rounded-full w-full flex flex-col items-center justify-center py-3 px-3 

            "
            >
              <img
                className="object-cover m-1 p-3   w-32
                            
                           
                      "
                src={category.image}
                alt={category.name}
              />
              <p
                className="text-center mt-4 
                          md:text-xl"
              >
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
