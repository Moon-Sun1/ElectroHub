import React from "react";
import { NavLink } from "react-router-dom";
const Banner = ({ bannerInfo }) => {
  return (
    <div>
      {/* ------------------ #banner --------------------- */}
      <div className=" z-20 relative text-center text-white text-xl lg:text-2xl font-body">
        <img
          src={bannerInfo.bannerImage}
          alt={bannerInfo.bannerImage}
          className="object-cover w-full h-52 z-0 lg:h-96 "
        />
        <div className=" absolute inset-0 flex flex-col justify-center items-center gap-10">
          <div>
            <h1 className="text-4xl font-bold m-2">{bannerInfo.bannerTitle}</h1>
            <h2 className="text-gray-300">{bannerInfo.bannerText}</h2>
          </div>

          <div className="flex flex-row font-bold ">
            <NavLink className="" to={"/"}>
              Home
            </NavLink>
            /
            <NavLink
              className="  visited:text-main-green"
              to={`/${bannerInfo.pageLink}`}
            >
              {bannerInfo.bannerNamePage}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
