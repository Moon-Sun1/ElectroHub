import { FaArrowRight } from "react-icons/fa6";


function SmallTpCard (props) {

  return (
    <div className={`flex flex-col items-center rounded-md px-2 py-2 ${props.bgColor} space-y-1 h-[200px] 
                     md:flex-row md:h-[100%] md:justify-evenly
                     
                     `}>
        <div className="flex flex-col space-y-1 h-[53%] w-full 
                        md:h-full md:w-[50%]
                        lg:w-[50%] lg:h-[100%] lg:space-y-0 lg:justify-center
                        ">
            <h3 className="text-body-background text-[14px] font-bold
                           text-sm
                           lg:text-lg
                           xl:text-2xl">
                Samsung Gear Camera
            </h3>
            <button className="flex gap-2 text-special-element text-sm hover:text-body-background duration-300
                               xl:text-xl xl:items-center">
                <span>Shop Now</span> <FaArrowRight />
            </button>
        </div>
        <div className="h-[40%] w-[100%] flex items-center justify-center 
                        md:w-[40%]
                        lg:w-[30%]">
            <img className="object-cover w-[70%] 
                            md:w-[70%]
                            xl:w-[80%]"
                 src="src\assets\samsung_gear_camera-removebg-preview.png" alt="" />
        </div>
    </div>
  )
}

export default SmallTpCard