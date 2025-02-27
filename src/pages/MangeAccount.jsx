import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Muslim from "../assets/about/mangers/Muslim_profile.jpg";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const MangeAccount = () => {
  const [userData, setUserData] = useState({
    name: "Goghst",
    email: "Goghst@gmail.co",
    profileImg: Muslim,
    password: 1234,
    phoneNumber: 999,
  });

  const {
    register,
    handleSubmit,
    onChange,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData.name,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    },
  });

  // const handleNameChange = (e) => {
  //   setUserData({ ...userData, name: e.target.value });
  //   setValue("name", e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setUserData({ ...userData, email: e.target.value });
  //   setValue("email", e.target.value);
  // };

  // const handlePhoneChange = (e) => {
  //   setUserData({ ...userData, phoneNumber: e.target.value });
  //   setValue("phoneNumber", e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setUserData({ ...userData, password: e.target.value });
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData({ ...userData, profileImg: imageUrl });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  const InputField = ({
    type,
    name,
    placeholder,
    register,
    value,
    onChange,
    pattern,
  }) => (
    <>
      <input
        className="w-96 border p-2 rounded-md outline-0 bg-slate-100 hover:border-main-green text-slate-800 duration-300 mb-3"
        onChange={onChange}
        value={value}
        type={type}
        {...register(name, {
          required: `${name} is required`,
          pattern: pattern,
          onChange: (e) => onChange && onChange(e),
        })}
        placeholder={placeholder}
        formNoValidate
      />
      {errors[name]?.type === "required" && (
        <p className="text-error"> {name} is required</p>
      )}
      {errors[name]?.type === "pattern" && (
        <p className="text-error"> {pattern?.message}</p>
      )}
    </>
  );

  return (
    <>
      <div className="bg-manageAccount bg-cover bg-center ">
        <Link to={"/"} className=" text-2xl md:text-3xl font-bold m-3">
          {" "}
          <FaArrowLeft className=" text-2xl mr-1 inline " />
          home
        </Link>
        <div className=" h-[100vh] w-full flex flex-col items-center justify-center font-body">
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            className="w-[700px] lg:w-1/2  p-6 py-32  items-center flex justify-evenly flex-col sm:flex-row shadow-lg shadow-black bg-[rgba(138, 153, 180, 0.308);]"
          >
            {/* -------------chane user image --------------*/}
            <div className=" flex   flex-col  items-start ">
              {/* <h1 className="text-2xl font-bold block w-full h-10 my-5 text-black ">
                Mange Account
              </h1> */}
              <img
                className="w-44  h-44 rounded-full "
                src={userData.profileImg}
                alt="profileImg"
              />
              <label
                className=" p-4 rounded-3xl text-white  my-3  cursor-pointer   hover:bg-main-green bg-green-700"
                htmlFor="imageInput"
              >
                Chosse Image
              </label>
              <input
                onChange={(e) => handleImageChange(e)}
                className="hidden"
                type="file"
                id="imageInput"
                accept="image/*"
              />
            </div>

            {/*----------- chane user data ----------------*/}
            <div className="text-xl flex flex-col ">
              <label className=" font-bold mr-4" htmlFor="name ">
                FullName:
              </label>

              <InputField
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Name"
                name="name"
                register={register}
                value={userData.name}
              />
              <label className=" font-bold mr-4" htmlFor="email ">
                Email:
              </label>
              <InputField
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="email"
                name="email"
                register={register}
                value={userData.email}
                pattern={{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }}
              />
              <label className=" font-bold " htmlFor="password ">
                New password:
              </label>
              <InputField
                type="password"
                placeholder="Enter new password"
                name="password"
                onChange={(e) => handleChange(e)}
                register={register}
                pattern={{
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "must be at least 8 characters long and include letters",
                }}
              />
              <label className=" font-bold " htmlFor="phoneNumber ">
                Phone Number:
              </label>
              <InputField
                value={userData.phoneNumber}
                type="number"
                placeholder="Enter Phone Numberr"
                name="phoneNumber"
                register={register}
                onChange={(e) => handleChange(e)}
              />
              <button
                type="submit"
                className="w-96  p-2 rounded-md  text-white bg-main-green hover:bg-blue-600  duration-300 mb-3"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
    </>
  );
};

export default MangeAccount;
