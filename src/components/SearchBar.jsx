import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate();
  const [search , setSearch] = useState("")

  function handleSearchValue(e){
    setSearch(e.target.value)
  }

  function handleSearchButton(){
    navigate(`/search/${search}`)
  }


  return (
    <div className="  font-headline flex m-auto px-2 my-2 md:px-0 md:my-0">

           <input
        className="pl-2 h-12 border rounded-md  md:border-none w-full 
         md:w-64 lg:w-52 outline-none"
        placeholder="..Search here"
        type="text"
        value={search}
        onChange={handleSearchValue}
      />
      <button className=" h-12  text-sm px-2    text-center space-x-1  bg-body-background hover:bg-main-green hover:text-white transition-colors duration-300"
            onClick={handleSearchButton}            
                        >
        <FaSearch className="inline-block " /> <span >Search</span>
      </button> 

    </div>
  );
};

export default SearchBar;
