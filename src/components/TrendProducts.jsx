import SmallTpCard from "./SmallTpCard";
import MediumTpCard from "./MediumTpCard";
import LargeTpCard from "./LargeTpCard";

const TrendProducts = () => {
  return (
    <div className="px-2 space-y-5 
                    md:px-4 md:h-[75vh] 
                    lg:h-[95vh] lg:px-10">
      <h2 className="text-center text-3xl font-bold font-headline">Trend Products</h2>
      <div className="flex flex-col space-y-3 
                      md:h-[60%]">
        <div className="flex flex-col space-y-2 
                        md:flex-row md:justify-between md:items-end">
          <LargeTpCard />
          <MediumTpCard />
        </div>
        <div className="flex space-x-2 
                        md:h-[40%]">
          <SmallTpCard bgColor="bg-orange-brown"/>
          <SmallTpCard bgColor="bg-green-blue"/>
          <SmallTpCard bgColor="bg-dark-gray-light-gray"/>
        </div>
      </div>
    </div>
  );
};

export default TrendProducts;
