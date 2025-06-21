import { useForm } from "react-hook-form";

const CreditCardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-3 px-8">
      <div className="mb-2">
        <label htmlFor="nameOnCard" className="text-sm">
          Name On Card:
        </label>
        <input
          {...register("nameOnCard", { required: true })}
          type="text"
          id="nameOnCard"
          className={`w-full py-1 px-2 border-b border-gray-700 rounded bg-transparent outline-none ${
            errors.nameOnCard && "border-red-500"
          }`}
        />
        {errors.nameOnCard && (
          <span className="text-red-500">Name on card is required</span>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="cardNumber" className="text-sm">
          Card Number:
        </label>
        <input
          {...register("cardNumber", { required: true, pattern: /^\d{16}$/ })}
          type="text"
          id="cardNumber"
          className={`w-full py-1 px-2 border-b border-gray-700 rounded bg-transparent outline-none ${
            errors.cardNumber && "border-red-500"
          }`}
        />
        {errors.cardNumber && (
          <span className="text-red-500">Invalid card number</span>
        )}
      </div>

      <div className="flex items-start justify-center mb-10">
        <div className="w-[75%] flex flex-col">
          <label htmlFor="expirationMonth" className="text-sm">
            Expiration Date:
          </label>
          <div className="h-full flex gap-1 items-start">
            <select
              {...register("expirationMonth", { required: true })}
              id="expirationMonth"
              className={`w-[50%] text-sm py-2 px-2 border-b border-gray-700 rounded bg-transparent outline-none ${
                errors.expirationMonth && "border-red-500"
              }`}
            >
              <option value="">MM</option>
              <option className="text-black font-medium" value="01">January</option>
              <option className="text-black font-medium" value="02">February</option>
              <option className="text-black font-medium" value="03">March</option>
              <option className="text-black font-medium" value="04">April</option>
              <option className="text-black font-medium" value="05">May</option>
              <option className="text-black font-medium" value="06">June</option>
              <option className="text-black font-medium" value="07">July</option>
              <option className="text-black font-medium" value="08">August</option>
              <option className="text-black font-medium" value="09">September</option>
              <option className="text-black font-medium" value="10">October</option>
              <option className="text-black font-medium" value="11">November</option>
              <option className="text-black font-medium" value="12">December</option>
            </select>
            {errors.expirationMonth && (
              <span className="text-red-500">Expiration month is required</span>
            )}
            <select
              {...register("expirationYear", { required: true })}
              id="expirationYear"
              className={`text-sm py-2 px-2 border-b border-gray-700 rounded bg-transparent outline-none ${
                errors.expirationYear && "border-red-500"
              }`}
            >
              <option value="">YYYY</option>
              {/* Generate years from current year to next 10 years */}
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() + i;
                return (
                  <option key={year} value={year} className="text-black font-medium">
                    {year}
                  </option>
                );
              })}
            </select>
            {errors.expirationYear && (
              <span className="text-red-500">Expiration year is required</span>
            )}
          </div>
        </div>
        <div className="py-1 h-full w-[25%] flex flex-col items-start">
          <label htmlFor="cvv" className="text-sm">
            CVV:
          </label>
          <div className="">
            <input
              {...register("cvv", { required: true, pattern: /^\d{3}$/ })}
              type="text"
              id="cvv"
              className={`py-1 w-[90%] px-2 border-b border-gray-700 rounded bg-transparent outline-none ${
                errors.cvv && "border-red-500"
              }`}
            />
            {errors.cvv && <span className="text-red-500">Invalid CVV</span>}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Check Out
      </button>
    </form>
  );
};

export default CreditCardForm;
