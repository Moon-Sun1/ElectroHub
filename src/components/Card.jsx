import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Card = (props) => {
  //temp Data

  const trapezoidStyle = {
    WebkitClipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
    clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
  };

  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const date = new Date(props.data.insert_Date);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    if (date > twoWeeksAgo) {
      setIsNew(true);
    }
  }, [props.data.insert_Date]);

  return (
    <div className="flex flex-col w-[275] space-y-2 py-5 px-5 shadow-custom bg-header-background rounded-lg lg:w-[280px]">
      <div className="flex justify-between">
        {isNew ? (
          <div className="bg-main-green text-body-background w-12 h-6 text-center">
            New
          </div>
        ) : (
          <div className="text-slate-400 font-bold text-xl">
            {props.data.rate}
          </div>
        )}
        <FaHeart className="text-slate-400 text-xl hover:text-red-400 cursor-pointer" />
      </div>
      <div className="bg-neutral-200 w-full h-full rounded-xl flex justify-center items-center max-h-40">
        <img
          src={props.data.image}
          alt={props.data.description}
          className="object-fill w-[60%] h-40"
        />
      </div>
      <div>
        <p className="text-slate-400 font-bold text-md">{props.data.company}</p>
        <p className="font-bold text-xl">{props.data.name}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">${props.data.price}</p>
        <button
          style={trapezoidStyle}
          className="bg-main-green py-2 px-10 rounded-md"
        >
          <FaCartShopping className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Card;
