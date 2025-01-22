import { useState} from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Categories");
  const menuItems = [
    "All Categories",
    "Smartphones",
    "Laptops",
    "Gaming Center",
    "Accessories",
    "Camera",
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="  h-12  inline-flex items-center justify-center w-full px-3 py-1 text-sm font-medium text-gray-700 bg-white  border-r border-gray-300  hover:bg-gray-50 "
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selected}
        <FaChevronDown
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && ( //show menu if true
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transform opacity-100 scale-100 transition-all duration-200">
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Link
                to={item}
                key={index}
                className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                onClick={() => {
                  setSelected(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
