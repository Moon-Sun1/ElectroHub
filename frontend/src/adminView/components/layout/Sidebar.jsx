import { NavLink } from "react-router-dom";
import { MdSecurity, MdDashboard, MdOutlineListAlt } from "react-icons/md";

import { GiCardboardBox } from "react-icons/gi";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import logo from "../../../assets/logo.png";

const sideBarElements = [
  { name: "Authentication", path: "/admin/authentication", icon: MdSecurity },
  { name: "Dashboard", path: "/admin/dashboard", icon: MdDashboard },
  { name: "Products", path: "/admin/products", icon: GiCardboardBox },
  { name: "Orders", path: "/admin/orders", icon: MdOutlineListAlt },
  { name: "Customers", path: "/admin/Customers", icon: LiaUsersCogSolid },
  { name: "Settings", path: "/admin/settings", icon: IoSettingsSharp },
  { name: "Logout", path: "/admin/logout", icon: FiLogOut },
];

const Sidebar = () => {
  return (
    <div
      className="flex flex-col h-screen text-gray-800 bg-slate-50 p-6 fixed top-0 left-0 rounded-lg z-50
                      lg:w-[25%]
                      xl:w-[20%]"
    >
      <div className="flex items-center mr-5 mb-5">
        <img className="h-10" src={logo} alt="Logo" />
        <div className="flex flex-col ml-2">
          <h1
            className="text font-bold 
                           lg:text-2xl"
          >
            Electro<span className="text-main-green">Hub</span>
          </h1>
          <h2 className="lg:text-sm font-bold text-main-green">Admin Panel</h2>
        </div>
      </div>

      <hr className="bg-gray-300 w-full mb-10 h-[2px]" />
      <ul className="space-y-2">
        {sideBarElements.map((item, index) => (
          <li
            key={index}
            className="text-lg rounded border-b border-gray-300 transition-colors duration-300 text-black shadow-md  "
          >
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 font-bold p-2
          ${
            isActive
              ? "bg-main-green text-white " // Active state: Apply hover styles and invert icon
              : "text-black hover:bg-main-green hover:text-white" // Inactive state: Apply hover styles
          }`
              }
            >
              <item.icon className="text-xl" />{" "}
              {/* No direct icon color here */}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
