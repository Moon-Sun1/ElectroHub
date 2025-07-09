import { useState, useEffect } from "react";
import { IoPersonOutline, IoShieldOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlineWorkHistory } from "react-icons/md";
import LoginForm from "../../components/auth/LoginForm";
import adminImage from "../../../assets/about/mangers/Muslim_profile.jpg"; // Adjust the path as necessary
import authenticationImage from "../../../assets/admin/home_admin-removebg-preview.png";
import { FaCircle } from "react-icons/fa";

const Authentication = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [adminInfo, setAdminInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        // Check if token is expired
        if (payload.exp && Date.now() < payload.exp * 1000) {
          setIsSignedIn(true);
          const roleName = "admin"; // Assuming the role is always 'admin' for this example
          setAdminInfo({
            name : payload.full_name,
            email: payload.email,
            role: roleName,
            lastLogin: new Date(payload.iat * 1000).toLocaleString(),
          });
        }
      } catch {
        console.error("Invalid token format");
        // If the token is invalid, clear it
        localStorage.removeItem("jwtToken");
        setIsSignedIn(false);
        setAdminInfo(null);
      }
    }
  }, []);

  const handleLogin = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });
      const result = await response.json();
      if (response.ok && result.token) {
        // Store JWT in localStorage
        localStorage.setItem("jwtToken", result.token);
        setAdminInfo({
          name: result.user.first_name + " " + result.user.last_name,
          email: result.user.email,
          role: result.user.role,
          lastLogin: new Date().toLocaleString(),
        });
        setIsSignedIn(true);
      } else {
        // Show error message (could use a toast or state)
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwtToken");
    setIsSignedIn(false);
    setAdminInfo(null);
  };

  if (isSignedIn && adminInfo) {
    return (
      <div
        className="flex flex-col h-full w-full p-6  bg-white rounded-lg shadow-lg relative
                      md:w-[60%]  md:h-[90%] md:rounded-lg md:shadow-lg
                      lg:justify-between lg:flex-row lg:items-center lg:h-[80%] lg:w-[75%]
                      xl:w-[80%] xl:h-[80%]"
      >
        <div className="hidden lg:flex absolute top-[13%] left-[47%] bg-gray-400 rounded-lg shadow-lg w-[2px] h-80 z-50"></div>
        <div className="hidden lg:flex justify-center items-center w-[45%] h-full px-4">
          <img
            src={authenticationImage}
            alt="Logo"
            className=" mb-8 lg:w-full lg:h-[60%]"
          />
        </div>
        <div className="lg:flex lg:w-[50%] lg:flex-col ">
          <div className="lg:flex lg:justify-between lg:items-center lg:relative lg:w-full lg:border-b-2 lg:border-gray-300 lg:h-20 ">
            <h3 className="hidden lg:flex justify-center items-center text-xl font-semibold text-gray-800">
              Status :online
              <FaCircle className="ml-1 text-main-green w-3 h-3" />
            </h3>
            <div className="w-full h-14 flex justify-center mb-1 items-end lg:w-[25%] lg:justify-end lg:items-center lg:h-12">
              <img
                src={adminImage}
                alt=""
                className="w-[23%] h-auto rounded-full md:mb-4 lg:mb-0 lg:w-[70%]"
              />
            </div>

            <div className="w-11 h-1 top-[18%] absolute bg-main-green"></div>
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Admin Information
          </h1>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <IoPersonOutline className="text-gray-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold">{adminInfo.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdOutlineMail className="text-gray-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{adminInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <IoShieldOutline className="text-gray-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold">{adminInfo.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdOutlineWorkHistory className="text-gray-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Last Login</p>
                <p className="font-semibold">{adminInfo.lastLogin}</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return <LoginForm onSubmit={handleLogin} />;
};

export default Authentication;
