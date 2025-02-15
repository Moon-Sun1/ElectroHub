import { Link } from "react-router-dom";
import laptop from "../assets/Categories/laptop.png";
import mobile from "../assets/Categories/mobile.png";
import other from "../assets/Categories/other.png";
import camera from "../assets/Categories/camera.png";
import controller from "../assets/Categories/controller.png";

const Categories = () => {
  const categories = [
    { name: "Laptop", image: laptop, path: "laptops" },
    { name: "Mobile", image: mobile, path: "smartphones" },
    { name: "Camera", image: camera, path: "camera" },
    { name: "Gaming", image: controller, path: "Gaming" },
    { name: "Other", image: other, path: "Accessories" },
  ];


  return (
    <div className="font-headline px-3 space-y-5
                    md:space-y-7">
      <h1 className="text-center text-3xl font-serif font-bold m-1 block w-full
                     md:text-4xl">
        Categories
      </h1>

      <div className="flex flex-wrap justify-center space-x-3 items-end font-semibold w-full space-y-2
                      md:justify-evenly">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.path.toLowerCase()}`}
            className="rounded-lg hover:text-main-green hover:opacity-80 w-[30%] flex flex-col items-center
            md:w-1/4
            lg:w-1/6"
          >
            <div className="bg-white rounded-full w-full flex items-center justify-center py-3 px-3 h-24 shadow-custom
            md:h-32 md:w-[70%]
            lg:h-32 lg:w-[80%]">
              <img
                className="object-cover w-[90%] 
                          md:w-[70%]
                          lg:w-3/5"
                src={category.image}
                alt={category.name}
              />
            </div>
            <p className="text-center mt-4 
                          md:text-xl">
                            {category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;