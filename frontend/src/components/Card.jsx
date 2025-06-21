import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Card = ({data}) => {
  
  const navigate = useNavigate()

  function handleClick(){
    navigate(`/ProductPreview/${data.product_id}`)
  }

  const trapezoidStyle = {
    WebkitClipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
    clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
  };

  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const date = new Date(data.created_at);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    if (date > twoWeeksAgo) {
      setIsNew(true);
    }
  }, [data.created_at]);

  return (
    <div className="flex flex-col w-[185px] space-y-2 py-2 px-3 shadow-custom bg-header-background rounded-lg transition duration-300 hover:scale-105 cursor-pointer
                   md:w-[225px]
                   xl:w-[275px] xl:space-y-3">
      <div className="flex justify-between">
        {isNew ? (
          <div className="bg-main-green text-body-background w-12 h-6 text-center
                          xl:text-sm xl:h-5 xl:w-12">
            New
          </div>
        ) : (
          <div className="text-slate-400 font-bold text-xl
                          xl:text-xl">
            {data.is_featured ? "Featured" : ""}
          </div>
        )}
        <FaHeart className="text-slate-400 text-xl hover:text-red-400 cursor-pointer
                           xl:text-xl" />
      </div>
      <div className=" w-full h-24 bg-card-main rounded-xl flex justify-center items-center
                        md:h-32
                        lg:h-36
                        xl:h-48"
                        onClick={handleClick}
                        >   
        <img
          src={data.image_url}
          alt={data.description}
          className="object-fill w-[55%]"
        />
      </div>
      <div>
        <p className="text-slate-400 font-bold text-md">{data.company}</p>
        <p className="font-bold text-xl">{data.name}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">${data.price}</p>
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