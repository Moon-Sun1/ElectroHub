import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewsLetterjsx from "../components/NewsLetter";
import Banner from "../components/Banner";
import banner from "../assets/about/banner.png";
import profileImg from "../assets/gohgst.webp";
import { useForm } from "react-hook-form";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa"; // Note: react-icons/fa

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const bannerInfo = {
    bannerImage: banner,
    bannerTitle: "#Let's_talk",
    bannerText: " LEAVE A MESSAGE. We love to hear from you!",
    bannerNamePage: "Contact Us",
    pageLink: "contact",
  };
  const MarketingManager = [
    {
      name: "Muntazir Mohammed",
      phone: " (+964) 774 493 3034",
      email: "Muntazir923@gmail.co",
      profileImage: profileImg,
    },
    {
      name: "Mohammed Daher",
      phone: " (+964) 773 790 3820",
      email: "Mohammed934@gmail.",
      profileImage: profileImg,
    },
    {
      name: "MuslimAbd Al-Ali",
      phone: "(+964) 782 141 0095",
      email: " Musliam24@gmail.co",
      profileImage: profileImg,
    },
  ];
  return (
    <>
      <Nav />
      <div className="  flex flex-col w-full  bg-body-background font-body ">
        {/* ------------------banner components --------------------- */}
        <Banner bannerInfo={bannerInfo} />
        {/* --------------------- map section ----------------------------- */}
        <div
          className=" my-16 flex  justify-between items-center 
         flex-col 
        md:flex-row
        px-4 sm:px-5 md:px-7 lg:px-9"
        >
          <div className="  py-3  ">
            <p className="text-sm  my-3">GET IN TOUCH</p>
            <p className="text-3xl font-bold  my-3 ">
              Visit one of our agency locations or contact us today
            </p>

            <div className=" flex flex-col gap-5 text-xl text-gray-500">
              <p className="text-2xl font-bold  text-gray-700">Head Office</p>

              <div>
                <FaMapMarkerAlt className="inline m-2" />
                Basra, Al-Jazair Street
              </div>
              <div>
                <FaPhoneAlt className="inline m-2" />
                (+964)77 4493 3034
              </div>
              <div>
                <FaEnvelope className="inline m-2" />
                ElectroHub@gmail.com
              </div>
              <div>
                <FaRegClock className="inline m-2" />
                10:10-18:00, Man-sat
              </div>
            </div>
          </div>
          <iframe
            className=" w-[580px] md:w-[750px] h-[500px] px-4 sm:px-5 md:px-7 lg:px-9 "
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1954.8302198268661!2d47.833983896313406!3d30.499261855866237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1728323748106!5m2!1sar!2siq"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* ------------------ form---------------------------------- */}
        <div
          className="  px-4 sm:px-5 md:px-7  my-6 lg:px-9 w-full
              flex-col 
        md:flex-row
        "
        >
          <p>LEAVE A MESSAGE</p>
          <h1 className=" font-bold text-3xl  my- ">
            {" "}
            We Love to hear from you
          </h1>
        </div>
        <div
          className="flex justify-between px-4 sm:px-5 md:px-7 lg:px-9              
            flex-col 
            lg:flex-row
            md:gap-8"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[60%] border-2 rounded-lg"
          >
            <input
              className="w-full h-16 outline-none  border-2 rounded-lg border-gray-500  p-4 my-4n text-xl my-3"
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder="Your Name"
            />
            {errors?.firstName?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
            <input
              className="w-full h-16 outline-none  border-2 rounded-lg border-gray-500  p-4 my-4n text-xl my-3"
              type="email"
              id="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Basic email regex
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
            <br />
            <input
              className="w-full h-16 outline-none  border-2 rounded-lg border-gray-500  p-4 my-4n text-xl my-3"
              type="text"
              placeholder="Subject"
              {...register("Subject", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Subject?.type === "required" && (
              <p className="text-error">This field is required</p>
            )}
            <textarea
              className="w-full outline-gray-600  border-2 rounded-lg border-gray-500  p-4 my-4n text-xl my-3"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              {...register("textarea", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            ></textarea>{" "}
            {errors?.textarea?.type === "required" && (
              <p className="text-error"> This field is required</p>
            )}
            <br />
            <button
              type="submit"
              className="text-white rounded-lg bg-main-green hover:bg-green-500 py-2 w-36 text-center
                              lg:px-4 lg:py-4"
            >
              Submit
            </button>
          </form>

          {/* ------------------ Marketing Manager display data ---------------------------------- */}

          <div className="flex flex-col gap-10 justify-start h-full w-full   md:w-[35%] my-5">
            {MarketingManager.map((Manager, key) => (
              <div className="flex   items-center  gap-6 w-full " key={key}>
                <img
                  className="w-32 h-32 rounded-full inline"
                  src={Manager.profileImage}
                  alt=""
                />

                <div className=" flex flex-col  w-[200px] text-sm">
                  <p className="font-bold text-xl mb-3 "> {Manager.name} </p>

                  <p className="   ">Sentor Marketing Manager</p>
                  <p className="my-1  ">Phone :{Manager.phone}</p>
                  <p className="my-1 "> Email:{Manager.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ NewsLetter components----------------- */}
        <div className="my-16">
          <NewsLetterjsx />
        </div>

        {/* ------------------ footer components----------------- */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;
