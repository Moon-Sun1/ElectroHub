import React from "react";
import banner from "../assets/about/banner.png";
import f1 from "../assets/about/f1.png";
import f2 from "../assets/about/f2.png";
import f3 from "../assets/about/f3.png";
import f4 from "../assets/about/f4.png";
import f5 from "../assets/about/f5.png";
import f6 from "../assets/about/f6.png";
import lockimage from "../assets/about/lockimage.png";
import ElectroHub from "../assets/about/ElectroHub-About_one-removebg-preview.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import NewsLetterjsx from "../components/NewsLetter";
import { MdDescription } from "react-icons/md";

const About = () => {
  const images = [
    { src: f1, title: "modren " },
    { src: f2, title: "Free Coupons " },
    { src: f3, title: "Saffian " },
    { src: f4, title: "Free " },
    { src: f5, title: "Fast " },
    { src: f6, title: "Inexpensive " },
  ];

  return (
    <>
      <Nav />
      <div className="flex flex-col w-full  font-body bg-body-background">
        {/* --------------------------------------- */}
        <div className=" z-20 relative text-center text-white text-xl lg:text-2xl">
          <img
            src={banner} // Use the variable here
            alt={banner} // More descriptive alt text
            className="object-cover w-full h-52 z-0 lg:h-80 "
          />
          <div className=" absolute inset-0 flex flex-col justify-center items-center gap-10">
            <div>
              <h1>#KnowUs</h1>
              <h2 className="text-gray-300">
                Best and earned site to buy your electronic needs
              </h2>
            </div>

            <div className="flex flex-row font-bold ">
              <NavLink className="" to={"/"}>
                Home
              </NavLink>
              /
              <NavLink className="  visited:text-main-green" to={"/About"}>
                About Us
              </NavLink>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------- */}
        <div className="flex flex-col md:flex-row justify-evenly items-center my-20 ">
          <img src={ElectroHub} alt="" className="w-[600px]" />
          <div className="w-full p-4 md:w-[40%]">
            <h1 className="font-bold text-2xl lg:text-4xl mb-6">
              Who We Are ?
            </h1>
            <p className="text-sm lg:text-xl ">
              ElectroHub is your trusted destination for purchasing the latest
              electronic and electrical devices. Established with the goal of
              providing the best technological solutions for everyday needs, we
              offer a wide variety of products, from home appliances to
              cutting-edge electronics, from the most reputable brands in the
              market. We believe that technology is an integral part of everyday
              life, which is why we strive to showcase the latest innovations
              and technological advancements in electronic devices. Through our
              technology news section, we bring you the latest updates and
              insights to help you make informed purchasing decisions.
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6  my-6 lg:my-20 ">
          {images.map((item, key) => (
            <div className="h-48 w-64 md:w-44 bg-white  flex  flex-col justify-center items-center rounded-2xl m-auto ">
              <li className="" key={key}>
                <img src={item.src} alt={`Image ${key}`} />
                <h1 className="m-1 text-xl font-bold text-gray-500 text-center">
                  {item.title}
                </h1>
              </li>
            </div>
          ))}
        </div>
        {/* ---------------------------------------------------- */}

        <div className="flex flex-col md:flex-row justify-evenly items-center  ">
          <img src={lockimage} alt="" className="w-full md:w-auto" />
          <div className="w-full p-4 md:w-[40%]">
            <h1 className="font-bold text-2xl lg:text-4xl mb-6">Security</h1>
            <p className="text-sm lg:text-xl ">
              At ElectroHub, the safety of our customers is our top priority. We
              use the latest encryption technologies to protect your personal
              and financial information at every stage of your shopping
              experience. We are committed to delivering a secure shopping
              experience that protects your data from any threats or breaches.
              Additionally, we regularly review and enhance our security
              measures to ensure that our platform remains one of the most
              secure. You can shop with complete confidence.
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className="my-10">
          {" "}
          <NewsLetterjsx />{" "}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
