import backgroundImage from "../assets/RegisterImg2.jpg";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaSignOutAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";


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
const InputField = ({ type, name, placeholder, register, errors }) => (
  <div className="w-full md:w-[60%] lg:w-[80%]">
    <input
      className={`w-full border p-2 rounded-md outline-0 bg-slate-100 hover:border-main-green text-slate-800 duration-300 ${
        errors[name] ? "border-red-500" : ""
      }`}
      type={type}
      {...register(name, {
        required: {
          value: true,
          message: "This field is required",
        },
        ...(name === "email" && {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email format",
          },
        }),
        ...(name === "password" && {
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            message:
              "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
          },
        }),
      })}
      placeholder={placeholder}
      aria-invalid={!!errors[name]}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

const Register = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const [step, setStep] = useState(1); // 1: required, 2: optional

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setStep(1);
    reset();
  };

  // Handles the first step (required fields)
  const handleNext = async () => {
    const valid = await trigger(["firstName", "lastName", "email", "password"]);
    if (valid) setStep(2);
  };

  // Handles the second step (optional fields)
  const handleFinish = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Registration successful:', result);
        // Redirect or show success message
      } else {
        console.error('Registration failed:', result.message);
        // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error message
    }
  };

  // Handles skipping optional fields
  const handleSkip = async () => {
    const requiredData = (({ firstName, lastName, email, password }) => ({ firstName, lastName, email, password }))(getValues());
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requiredData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Registration successful (required only):', result);
        // Redirect or show success message
      } else {
        console.error('Registration failed:', result.message);
        // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error message
    }
  };

  return (
    <div
      className="relative w-full flex justify-center items-center font-body h-screen
                  lg:bg-gradient-to-r from-gray-950 via-slate-800 to-teal-900"
    >
      <Link
        to="/"
        className="hidden lg:flex items-center gap-1 text-body-background absolute top-6 left-6 text-xl cursor-pointer hover:text-main-green"
      >
        <p>Home</p>
        <FaSignOutAlt />
      </Link>
      <Link
        to="/"
        className="lg:hidden flex items-center text-body-background  font-bold absolute top-3 left-3 text-3xl cursor-pointer hover:text-main-green z-20"
      >
        <HiHome />
      </Link>
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
            onSubmit={handleSubmit(handleFinish)}
          >
            {isSignUp && step === 1 && (
              <>
                <div className="flex w-full md:w-[60%] lg:w-[80%] gap-2">
                  <InputField
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    register={register}
                    errors={errors}
                  />
                </div>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  register={register}
                  errors={errors}
                />
                <InputField
                  type="password"
                  name="password"
                  placeholder="Password"
                  register={register}
                  errors={errors}
                />
                <button
                  type="button"
                  className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white w-28 p-2 rounded-lg"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}
            {isSignUp && step === 2 && (
              <>
                <InputField
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number (optional)"
                  register={register}
                  errors={errors}
                />
                <InputField
                  type="text"
                  name="address"
                  placeholder="Address (optional)"
                  register={register}
                  errors={errors}
                />
                <div className="flex w-full md:w-[60%] lg:w-[80%] gap-2">
                  <InputField
                    type="text"
                    name="city"
                    placeholder="City (optional)"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    type="text"
                    name="state"
                    placeholder="State (optional)"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="flex w-full md:w-[60%] lg:w-[80%] gap-2">
                  <InputField
                    type="text"
                    name="country"
                    placeholder="Country (optional)"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code (optional)"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="flex gap-4 mt-2">
                  <button
                    type="submit"
                    className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white w-28 p-2 rounded-lg"
                  >
                    Finish
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-800 w-28 p-2 rounded-lg"
                    onClick={handleSkip}
                  >
                    Skip
                  </button>
                </div>
              </>
            )}
            {!isSignUp && (
              <>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  register={register}
                  errors={errors}
                />
                <InputField
                  type="password"
                  name="password"
                  placeholder="Password"
                  register={register}
                  errors={errors}
                />
                <Link
                  to={"/Password Reset"}
                  className="text-center text-sm text-slate-800"
                >
                  Forget Your Password?
                </Link>
                <button
                  className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white w-28 p-2 rounded-lg"
                  aria-label="Sign in"
                >
                  Sign in
                </button>
              </>
            )}
          </form>

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
