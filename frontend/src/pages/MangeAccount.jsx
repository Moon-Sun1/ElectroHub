import { useForm } from "react-hook-form";
import Muslim from "../assets/about/mangers/Muslim_profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MangeAccount = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal_code: "",
      profileImg: Muslim,
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setValue("profileImg", imageUrl);
    }
  };

  const InputField = ({
    type,
    name,
    placeholder,
    register,
    pattern,
    required = false,
  }) => (
    <div className="mb-4">
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-green focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
        type={type}
        {...register(name, {
          required: required ? `${name} is required` : false,
          pattern: pattern,
        })}
        placeholder={placeholder}
        formNoValidate
      />
      {errors[name]?.type === "required" && (
        <p className="text-red-500 text-sm mt-1">{name} is required</p>
      )}
      {errors[name]?.type === "pattern" && (
        <p className="text-red-500 text-sm mt-1">{pattern?.message}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-manageAccount bg-cover bg-center bg-fixed">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center text-2xl font-bold text-gray-800 hover:text-main-green transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Manage Account
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Profile Image Section */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative">
                    <img
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-main-green shadow-lg"
                      src={register("profileImg").value || Muslim}
                      alt="profile"
                    />
                    <label
                      htmlFor="imageInput"
                      className="absolute bottom-0 right-0 bg-main-green text-white p-2 rounded-full cursor-pointer hover:bg-green-600 transition-colors duration-300 shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </label>
                    <input
                      onChange={handleImageChange}
                      className="hidden"
                      type="file"
                      id="imageInput"
                      accept="image/*"
                    />
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Personal Information
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <InputField
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        register={register}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <InputField
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        register={register}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <InputField
                        type="email"
                        placeholder="Email"
                        name="email"
                        register={register}
                        pattern={{
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        }}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <InputField
                        type="tel"
                        placeholder="Phone Number"
                        name="phone_number"
                        register={register}
                        pattern={{
                          value: /^\+?[\d\s-]{10,}$/,
                          message: "Please enter a valid phone number",
                        }}
                      />
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Address Information
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <InputField
                        type="text"
                        placeholder="Address"
                        name="address"
                        register={register}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <InputField
                          type="text"
                          placeholder="City"
                          name="city"
                          register={register}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <InputField
                          type="text"
                          placeholder="State"
                          name="state"
                          register={register}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <InputField
                          type="text"
                          placeholder="Country"
                          name="country"
                          register={register}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code
                        </label>
                        <InputField
                          type="text"
                          placeholder="Postal Code"
                          name="postal_code"
                          register={register}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-main-green text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangeAccount;
