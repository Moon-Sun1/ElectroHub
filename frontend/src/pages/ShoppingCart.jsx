/* IMPORT COMPONENTS*/
import CartMobileView from "../components/CartMobileView";
import CartLaptopView from "../components/CartLaptopView";
/* IMPORT IMAGES */
import appleWatchImage from "../assets/Apple_Watch_Ultra_2-removebg-preview.png";
import xboxImage from "../assets/Xbox_series_x_slide-removebg-preview.png";
import samsungCameraImage from "../assets/samsung_gear_camera-removebg-preview.png";

const cartItems = [
  {
    productName: "Scarlett Whitening",
    quantity: 1,
    price: 10.3,
    image: appleWatchImage,
  },
  {
    productName: "Ponds White",
    quantity: 1,
    price: 21.93,
    image: xboxImage,
  },
  {
    productName: "Emina Bright 1",
    quantity: 2,
    price: 11.56,
    image: samsungCameraImage,
  },

  {
    productName: "Emina Bright 2",
    quantity: 2,
    price: 11.56,
    image: samsungCameraImage,
  },

  {
    productName: "Emina Bright 3",
    quantity: 2,
    price: 11.56,
    image: samsungCameraImage,
  },
];

const ShoppingCart = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-slate-300 px-[2vh] font-body lg:hidden">
        <CartMobileView cartItems={cartItems} />
      </div>
      <div className="hidden lg:flex  p-[3vh] bg-slate-300 w-full h-full font-body">
        <CartLaptopView cartItems={cartItems} />
      </div>
    </>
  );
};

export default ShoppingCart;
