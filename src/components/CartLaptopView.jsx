import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaRegCreditCard,
  FaChevronLeft,
} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { BsPaypal } from "react-icons/bs";
import CreditCardForm from "./CreditCardForm";
import PayPal from "./PayPal";
import { Link } from "react-router-dom";

const CartTotalRow = ({ label, value, isBold = false }) => (
  <tr className={isBold ? "font-bold" : ""}>
    <td className="border p-1">{label}</td>
    <td className="border p-1">{value}</td>
  </tr>
);

/* HELPER FUNCTIONS */
const calculateCartSubtotal = (cartItems, quantities) =>
  cartItems.reduce(
    (total, item) => total + item.price * quantities[item.productName],
    0
  );

const CartLaptopView = ({ cartItems }) => {
  // State to manage quantities of items in the cart
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.productName] = item.quantity;
      return acc;
    }, {})
  );

  // State to track the selected filter
  const [filter, setFilter] = useState("name");

  // State to manage payment method
  const [isPayPal, setIsPayPal] = useState(true);

  // Function to handle increment
  const handleIncrement = (productName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productName]: prevQuantities[productName] + 1,
    }));
  };

  // Function to handle decrement
  const handleDecrement = (productName) => {
    if (quantities[productName] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productName]: prevQuantities[productName] - 1,
      }));
    }
  };

  //sort cart items based on the selected
  const sortedCartItems = [...cartItems].sort((a, b) => {
    if (filter === "price") {
      return a.price - b.price;
    } else if (filter === "quantity") {
      return quantities[b.productName] - quantities[a.productName]; // Sort by quantity
    } else {
      return a.productName.localeCompare(b.productName); // Sort by name (alphabetical order)
    }
  });

  // Dynamically calculate cart subtotal based on updated quantities
  const cartSubtotal = calculateCartSubtotal(sortedCartItems, quantities);

  const handleCardChoice = () => {
    setIsPayPal(!isPayPal);
  };

  return (
    <div className="relative flex gap-5 w-full h-full bg-header-background rounded-3xl p-4">
      {/* ITEM TABLE SECTION */}
      <section className="w-[70%] px-5 h-full">
        {/* CART HEADER */}
        <div className="flex justify-between w-full items-center">
          {/* CART TITLE */}
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">Shopping Cart</h1>
            <p className="text-gray-400">
              You have {sortedCartItems.length} items in Your Cart
            </p>
          </div>
          <div className="flex items-center h-full rounded-xl p-1 gap-1">
            <p className="text-gray-500">Sort by:</p>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none flex justify-center w-16"
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="quantity">Quantity</option>
            </select>
          </div>
        </div>
        {/* CART MAIN */}
        <section className="mt-8">
          {/* CART ITEM TABLE */}
          <div className="overflow-y-auto max-h-[275px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b sticky top-0 bg-white">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Quantity</th>
                  <th className="text-left p-2">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {sortedCartItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 mr-2"
                        />
                        <span>
                          <div>{item.productName}</div>
                          <div className="text-gray-600">Apple</div>
                        </span>
                      </div>
                    </td>
                    <td className="p-2">${item.price}</td>
                    <td className="p-2">
                      <div className="flex justify-between border border-gray-100 rounded-2xl w-full px-3 gap-1 py-1 shadow-sm">
                        <button
                          aria-label={`Increase ${item.productName} quantity`}
                          onClick={() => handleIncrement(item.productName)}
                          className="rounded-full"
                        >
                          <FaPlus className="text-main-green" />
                        </button>
                        <h6 className="text-gray-800">
                          {quantities[item.productName]}
                        </h6>
                        <button
                          aria-label={`Decrease ${item.productName} quantity`}
                          onClick={() => handleDecrement(item.productName)}
                          className={`rounded-full ${
                            quantities[item.productName] === 1
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-red-500"
                          }`}
                          disabled={quantities[item.productName] === 1}
                        >
                          <FaMinus />
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-5">
                      ${(item.price * quantities[item.productName]).toFixed(2)}
                    </td>
                    <td>
                      <IoClose className="text-2xl text-gray-400 hover:text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* CART FOOTER */}
          <div className="left-10 bottom-5 py-2 px-5 rounded-2xl border absolute hover:text-main-green">
            <Link to="/" className="flex gap-1 items-center">
              <FaChevronLeft /> Continue Shopping
            </Link>
          </div>
          <div className="py-5 w-full flex justify-center gap-3 flex-row items-start">
            {/* COUPON FORM */}
            <form className="w-full flex flex-col gap-1 md:text-xl">
              <input
                type="text"
                placeholder="Enter your coupon"
                className="border p-2 rounded-lg hover:border-main-green outline-main-green"
              />
              <button
                type="submit"
                className="bg-body-background text-main-green p-1 rounded-lg border border-main-green"
              >
                Apply
              </button>
            </form>
            {/* CART TOTALS */}
            <div className="w-full flex flex-col gap-2 border p-2">
              <h1 className="font-bold text-xl">Cart Total</h1>
              <table className="w-full md:text-xl">
                <tbody>
                  <CartTotalRow
                    label="Cart Subtotal"
                    value={`$${cartSubtotal.toFixed(2)}`}
                  />
                  <CartTotalRow label="Shipping" value="Free" />
                  <CartTotalRow
                    label="Total"
                    value={`$${cartSubtotal.toFixed(2)}`}
                    isBold
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
      <section className="w-1/4 h-full border border-black bg-footer-background rounded-xl text-body-background">
        {/* CARD INFO HEADER*/}
        <div className="py-3 px-8">
          <h1 className="font-bold text-3xl border-b border-gray-600 py-3">
            Payment Info
          </h1>
        </div>
        {/* payment section*/}
        <div className="space-y-4">
          <p className="px-8 pt-5 text-sm">Payment method:</p>
          <div className="flex justify-evenly">
            <div
              className={`flex items-center gap-2 border p-2 rounded-3xl cursor-pointer ${
                !isPayPal ? "border-gray-700" : ""
              }`}
              onClick={handleCardChoice}
            >
              <FaRegCreditCard className={``} /> Credit Card
            </div>
            <div
              className={`flex items-center gap-2 border py-2 px-3 rounded-3xl cursor-pointer ${
                isPayPal ? "border-gray-700" : ""
              }`}
              onClick={handleCardChoice}
            >
              <BsPaypal className="text-2xl" /> PayPal
            </div>
          </div>
          <div>{isPayPal ? <CreditCardForm /> : <PayPal />}</div>
        </div>
      </section>
    </div>
  );
};

export default CartLaptopView;
