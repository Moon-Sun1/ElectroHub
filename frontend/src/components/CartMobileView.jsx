/* IMPORT REACT HOOKS */
import { useState } from "react";
import { Link } from "react-router-dom";

/* IMPORT ICONS */
import { CiSquareChevLeft, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { GoTrash } from "react-icons/go";

/* HELPER FUNCTIONS */
const calculateCartSubtotal = (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

/* REUSABLE COMPONENTS */
const CartItem = ({ item, onIncrement, onDecrement }) => (
  <tr className="flex items-center justify-between py-3 px-2 border-t">
    <td className="flex gap-2 items-center">
      <div className="flex items-center justify-center bg-[#0e9b9162] rounded-xl p-2">
        <img
          src={item.image}
          alt={item.productName}
          className="w-[50px] h-[50px]
                     md:w-[75px] md:h-[75px]"
        />
      </div>
      <div>
        <div className="md:text-xl">{item.productName}</div>
        <div className="md:text-xl">${item.price.toFixed(2)}</div>
        <div className="text-gray-600
                          md:text-lg">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </td>
    <td className="flex flex-col justify-between items-center h-full">
      <button
        aria-label={`Increase ${item.productName} quantity`}
        className="rounded-full"
        onClick={onIncrement}
      >
        <CiCirclePlus className="text-gray-600 bg-[#98e7e234] rounded-full text-2xl
                                   md:text-3xl" />
      </button>
      <h6 className="md:text-xl">{item.quantity}</h6>
      <button
        aria-label={`Decrease ${item.productName} quantity`}
        className="rounded-full"
        onClick={onDecrement}
      >
        <CiCircleMinus className="text-gray-600 bg-[#98e7e234] rounded-full text-2xl
                                    md:text-3xl" />
      </button>
    </td>
  </tr>
);

const CartTotalRow = ({ label, value, isBold = false }) => (
  <tr className={isBold ? "font-bold" : ""}>
    <td className="border p-1">{label}</td>
    <td className="border p-1">{value}</td>
  </tr>
);

/* MAIN COMPONENT */
const CartMobileView = ({ cartItems: initialCartItems }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const cartSubtotal = calculateCartSubtotal(cartItems);

  const handleIncrementQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="w-full h-full rounded-3xl my-3 p-[2vh] bg-header-background">
      {/* CART HEADER */}
      <div className="w-full flex justify-between items-center">
        <Link to={"/"}>
          <CiSquareChevLeft className="text-4xl text-main-green
                                       md:text-5xl" />
        </Link>

        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#3b9b94] via-[#111827] to-[#4ec7bf]
                       md:text-4xl">
          Cart
        </h1>
        <button aria-label="Clear Cart">
          <GoTrash className="text-2xl text-main-green
                              md:text-3xl" />
        </button>
      </div>

      {/* CART MAIN */}
      <div className="h-full w-full pt-10 pb-5">
        <table className="w-full">
          <tbody>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onIncrement={() => handleIncrementQuantity(index)}
                onDecrement={() => handleDecrementQuantity(index)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* CART FOOTER */}
      <div className="w-full p-2 flex flex-col items-center justify-center gap-3 
                      md:flex-row md:items-start">
        {/* COUPON FORM */}
        <form className="w-full flex flex-col gap-1
                         md:text-xl">
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
          <table className="w-full 
                            md:text-xl">
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
          <button className="text-body-background bg-main-green rounded-xl p-1
                               md:text-xl">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMobileView;
