const NewsLetterjsx = () => {
  return (
    <div
      className="flex flex-col p-3 w-full items-center justify-evenly bg-slate-200 font-body  h-[250px]
                    md:px-10 md:flex-row md:justify-between"
    >
      <div
        className="p-2 
                      lg:w-[45%]"
      >
        <h1
          className="font-bold  text-2xl 
                       md:text-3xl"
        >
          Sign Up For NewsLetters
        </h1>
        <p className="text-sm mt-2">
          Get E-mail updates about our lastes shop and{" "}
          <span className="text-main-green">special offers</span>
        </p>
      </div>

      <div
        className="px-2 flex flex-col space-y-1 w-full
                      lg:w-[50%] lg:flex-row lg:items-start"
      >
        <input
          type="text"
          className="p-4 w-full outline-none border m-1 rounded-lg 
                   md:w-full
                   lg:w-[75%]"
          placeholder="Yout E-mail Adderss..."
        />
        <button
          className="text-white rounded-lg bg-main-green  hover:bg-green-500 py-2 
                              lg:px-4 lg:py-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NewsLetterjsx;
