import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="  font-headline flex m-auto px-2 my-2 md:px-0 md:my-0">

           <input
        className="pl-2 h-12 border rounded-md  md:border-none w-full sm:w-38  md:w-40 lg:w-52 outline-none"
        placeholder="..Search here"
        type="text"
      />
      <button className=" h-12  text-sm px-2    text-center space-x-1  bg-body-background hover:bg-main-green hover:text-white transition-colors duration-300">
        <FaSearch className="inline-block " /> <span >Search</span>
      </button> 

    </div>
  );
};

export default SearchBar;
