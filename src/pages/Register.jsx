import backgroundImage from "../assets/RegisterImg2.jpg";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// Social Media Icons Component
const SocialMediaIcons = () => (
  <ul className="flex justify-center items-center gap-2">
    <SocialIcon icon={<FaGoogle />} />
    <SocialIcon icon={<FaFacebookF />} />
    <SocialIcon icon={<FaGithub />} />
    <SocialIcon icon={<FaLinkedinIn />} />
  </ul>
);

// Individual Social Icon Component
const SocialIcon = ({ icon }) => (
  <li className="border flex items-center justify-center w-10 h-9 rounded-md border-gray-500 hover:text-main-green duration-300 cursor-pointer">
    {icon}
  </li>
);

// Input Field Component
const InputField = ({ type, name, placeholder, register, message }) => (
  <input
    className="w-full border p-2 rounded-md outline-0 bg-slate-100 hover:border-main-green text-slate-800 duration-300
               md:w-[60%] lg:w-[80%]"
    type={type}
    {...register(
      name,
      {
        required: `${name} is required`,
      },
      {
        pattern: {},
      }
    )}
    placeholder={placeholder}
    formNoValidate
  />
);

const Register = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  const [isSignUp, setIsSignUp] = useState(false); // State to track sign-up mode

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between sign-in and sign-up modes
  };

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  return (
    <div
      className="relative w-full flex justify-center items-center font-body h-screen
                  lg:bg-gradient-to-r from-gray-950 via-slate-800 to-teal-900"
    >
      <div
        className="bg-transparent w-full h-full relative flex flex-col justify-end
                     lg:w-[60%] lg:h-[80%] lg:flex-row lg:justify-center lg:items-center lg:bg-header-background lg:rounded-3xl overflow-hidden"
      >
        {/* Image Section */}
        <div
          className={`absolute h-40 w-full top-0 left-0 z-0 transition-all duration-500 ease-in-out
                      lg:h-full lg:w-[50%] lg:relative ${
                        isSignUp ? "lg:translate-x-[100%]" : "lg:translate-x-0"
                      }`}
        >
          <img
            src={backgroundImage}
            alt="background"
            className="object-cover w-full h-full lg:rounded-r-3xl"
          />
        </div>

        {/* Form Section */}
        <div
          className={`flex flex-col h-[73%] w-full p-2 space-y-5 z-20 bg-header-background justify-center rounded-t-2xl
                      lg:w-[50%] lg:h-full lg:items-center transition-all duration-500 ease-in-out ${
                        isSignUp ? "lg:-translate-x-[100%]" : "lg:translate-x-0"
                      }`}
        >
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827]">
            {isSignUp ? "Sign up" : "Sign in"}
          </h1>

          {/* Social Media Icons */}
          <SocialMediaIcons />

          {/* Form */}
          <form
            className="flex flex-col gap-3 w-full py-[2vh] px-[2vh] items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {isSignUp && (
              <InputField
                type="text"
                placeholder="Name"
                name={"name"}
                register={register}
              />
            )}
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              register={register}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              register={register}
            />
            {/* Conditionally Render Forget Password Link */}
            {!isSignUp && (
              <Link
                to={"/Password Reset"}
                className="text-center text-sm text-slate-800"
              >
                Forget Your Password?
              </Link>
            )}
            <button
              className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white w-28 p-2 rounded-lg"
              aria-label={isSignUp ? "Sign up" : "Sign in"}
            >
              {isSignUp ? "Sign up" : "Sign in"}
            </button>
          </form>
          <DevTool control={control} />

          {/* Toggle Button */}
          <div>
            <h6 className="text-center flex justify-center items-center">
              <p className="text-sm text-slate-800">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>
              <button
                className="text-main-green font-bold ml-1"
                onClick={toggleForm}
                aria-label={
                  isSignUp ? "Switch to Sign in" : "Switch to Sign up"
                }
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
