import { FaArrowRight } from "react-icons/fa6";

const LargeTpCard = () => {
  return (
    <div className="flex justify-between rounded-md px-1 py-2 bg bg-radial-blue sm:items-center 
                    md:w-[77%] h-full md:px-3 md:py-4
                    lg:justify-evenly
                    ">
      <div className="w-[70%] space-y-2
                      lg:w-[50%]
                      xl:w-[60%] xl:space-y-3">
        <h3 className="text-body-background font-bold text-xl 
                          md:text-2xl
                          lg:text-3xl
                          xl:text-4xl">
          Apple HomePod 2nd Gen Speaker
        </h3>
        <p className="text-[10px] text-special-element 
                      md:text-sm
                      xl:text-xl">
          Experience immersive, high-fidelity audio with the Apple HomePod. This
          powerful smart speaker adapts to its surroundings, delivering rich
          bass and crystal-clear highs. 
        </p>
        <button className="flex items-center space-x-1 bg-body-background px-2 rounded-md 
                           md:py-1
                           xl:text-xl xl:p-2">
          <span>Shop Now</span> <FaArrowRight />
        </button>
      </div>
      <div className="w-[30%] flex items-center justify-end">
        <img
          className="object-cover w-[90%]
                     md:w-[75%]
                     lg:w-[65%]"
          src="src\assets\samsung_gear_camera-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LargeTpCard;
