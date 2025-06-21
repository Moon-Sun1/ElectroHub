import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import authenticationImage from "../../../assets/admin/home_admin-removebg-preview.png";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="flex flex-col w-full p-6 bg-white rounded-lg shadow-xl relative h-full
                    lg:flex-row lg:items-center lg:justify-between
                    md:w-[60%]  md:h-[90%] md:rounded-lg md:shadow-lg lg:h-[80%] lg:w-[75%]
                    xl:w-[80%] xl:h-[80%]"
    >
      <div className="flex justify-center items-center w-full 
                      lg:w-[45%] lg:h-full lg:px-4">
        <img
          src={authenticationImage}
          alt="Logo"
          className=" w-3/6 h-24 mb-8
                      md:h-32 md:w-2/5
                      lg:w-full lg:h-[60%]"
        />
      </div>
      <div
        className="absolute top-36 bg-main-green rounded-lg shadow-lg w-14 h-1 z-10
                      md:top-44
                      lg:left-[52%] lg:top-28"
      ></div>
      <div className="hidden lg:flex absolute top-[25%] left-[47%] bg-gray-400 rounded-lg shadow-lg w-[2px] h-60 z-50">

      </div>
      <div className="w-full lg:w-[50%] flex flex-col lg:px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Login as Admin
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4
                                                         lg:flex flex-col"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-900" />
              </div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main-green focus:border-transparent"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-900" />
              </div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main-green focus:border-transparent"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-main-green text-white py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
