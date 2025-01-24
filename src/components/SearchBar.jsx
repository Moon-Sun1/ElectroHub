import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="  font-headline flex m-auto">

           <input
        className="pl-2 h-12 w-32 sm:w-38  md:w-40 lg:w-52 outline-none"
        placeholder="..Search here"
        type="text"
      />
      <button className="  text-sm px-2  md:px-4 text-center h-12 space-x-1  bg-body-background hover:bg-main-green hover:text-white transition-colors duration-300">
        <FaSearch className="inline-block m-2" /> <span className="hidden sm:block">Search</span>
      </button> 

    </div>
  );
};

export default SearchBar;
