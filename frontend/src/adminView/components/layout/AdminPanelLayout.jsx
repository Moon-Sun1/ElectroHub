import { useState } from "react"; // Import useState
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

const AdminPanelLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the state
  };

  return (
    <div className="h-screen w-screen p-4 bg-gray-100 flex justify-between items-center relative font-body overflow-y-scroll">
      {/* This icon is for mobile view to toggle the sidebar */}
      <div
        className="absolute top-4 left-4 z-40 text-3xl font-bold text-gray-900 cursor-pointer bg-white rounded-lg shadow-lg p-1
        md:top-5 md:left-5 md:text-4xl md:font-extrabold
        lg:hidden" // Only visible on small/medium screens
      >
        <IoMenuOutline onClick={toggleSidebar} />
      </div>

      {/* Sidebar - Conditional rendering for mobile, always visible on large screens */}
      <div
        className={`
          h-screen
          ${
            isSidebarOpen
              ? "flex fixed top-0 left-0 w-64 z-50 transform translate-x-0 transition-transform duration-300"
              : "hidden transform -translate-x-full transition-transform duration-300"
          }
          lg:flex lg:static lg:transform-none lg:translate-x-0 lg:transition-none lg:w-auto // Always visible on large screens
        `}
      >
        <Sidebar/>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      <div
        className="w-full h-[85%] flex justify-center items-center mt-8
                   md:h-[100%]
                   lg:w-[80%] lg:h-[100%] lg:flex lg:justify-center lg:items-center
                   xl:w-[80%] xl:h-[100%]"
      >
          <Outlet />
      </div>
    </div>
  );
};

export default AdminPanelLayout;
