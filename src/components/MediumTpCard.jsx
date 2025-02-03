import { FaArrowRight } from "react-icons/fa6";

const MediumTpCard = () => {
  return (
    <div className="flex justify-between rounded-md px-1 py-2 bg bg-dark-purple-red items-center 
                    md:flex-col md:w-[22%] md:space-y-5 md:h-full
                    lg:py-3 px-3">
        <div className="flex flex-col w-[65%] text-start 
                        md:w-[100%]">
            <h3 className="text-body-background
                           lg:text-xl lg:font-bold
                           xl:text-3xl">Apple Watch Ultra</h3>
            <button className="flex space-x-1 text-special-element items-center
                               xl:text-xl">
                <span>Shop Now</span> <FaArrowRight />
            </button>
        </div>
        <div className="w-[30%] flex justify-center 
                        md:w-[100%]">
            <img className="object-cover w-[60%] 
                            md:w-[80%]" 
                 src="src\assets\Apple_Watch_Ultra_2-removebg-preview.png" alt="" />
        </div>
    </div>
  )
}

export default MediumTpCard