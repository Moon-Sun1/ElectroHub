import React from "react";
import banner from "../assets/about/banner.png";
import f1 from "../assets/about/f1.png";
import f2 from "../assets/about/f2.png";
import f3 from "../assets/about/f3.png";
import f4 from "../assets/about/f4.png";
import f5 from "../assets/about/f5.png";
import f6 from "../assets/about/f6.png";
import Security from "../assets/about/lockimage.png";
import WhoWeAre from "../assets/about/ElectroHub-About_one-removebg-preview.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewsLetterjsx from "../components/NewsLetter";
import Banner from "../components/Banner";
const About = () => {
  const images = [
    { src: f1, title: "Modren " },
    { src: f2, title: "Free Coupons " },
    { src: f3, title: "Saffian " },
    { src: f4, title: "Free " },
    { src: f5, title: "Fast " },
    { src: f6, title: "Inexpensive " },
  ];
  const bannerInfo = {
    bannerImage: banner,
    bannerTitle: "#KnowUs",
    bannerText: "  Best and earned site to buy your electronic needs",
    bannerNamePage: "About",
    pageLink: "about",
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col w-full  font-body bg-body-background">
        {/* ------------------#KnowUs --------------------- */}
        <Banner bannerInfo={bannerInfo} />
        {/* ----------------------   Who We Are ? ---------------------------- */}
        <div className="flex flex-col md:flex-row justify-evenly items-center my-20 ">
          <img src={WhoWeAre} alt="" className="w-[600px]" />
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
        {/* ------------------ benfit section ---------------------------------- */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6  my-6 lg:my-20 m-4  px-4 sm:px-5 md:px-7 lg:px-9">
          {images.map((item, key) => (
            <div
              key={key}
              className="h-48 w-full  bg-white flex flex-col justify-center items-center rounded-2xl m-auto p-2 transition duration-300 hover:scale-105"
            >
              <li className="">
                <img src={item.src} alt={item.title} />
                <h1 className="m-1 text-xl font-bold text-gray-500 text-center">
                  {item.title}
                </h1>
              </li>
            </div>
          ))}
        </div>
        {/* -------------------------Security--------------------------- */}

        <div className="flex flex-col md:flex-row justify-evenly items-center  ">
          <img src={Security} alt="" className="w-full md:w-auto" />
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
        {/* ---------------------NewsLetter------------------------------- */}
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
