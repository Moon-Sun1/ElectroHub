import Nav from "../components/Nav";
import Footer from "../components/Footer";
import appleWatchImage from "../assets/Apple_Watch_Ultra_2-removebg-preview.png";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import CardContainer from "../components/CardContainer";

// Reusable Components
const ProductDetails = ({
  label,
  value,
  h4Color = "main-green",
  h4Size = "3xl",
  pSize = "xl",
}) => {
  // Map props to Tailwind classes
  const h4ColorClass = {
    "main-green": "text-main-green",
    white: "text-white",
  }[h4Color];

  const h4SizeClass = {
    xl: "text-xl",
    "3xl": "text-3xl",
  }[h4Size];

  const pSizeClass = {
    lg: "text-lg",
    xl: "text-xl",
  }[pSize];

  return (
    <div className="flex flex-col items-center">
      <h4 className={`font-bold ${h4SizeClass} ${h4ColorClass}`}>{label}</h4>
      <p className={`font-bold text-gray-900 ${pSizeClass}`}>{value}</p>
    </div>
  );
};

const PriceSection = ({ price }) => (
  <div className="flex w-full h-16 items-center justify-evenly rounded-lg bg-footer-background md:w-[60%] md:h-20 lg:relative lg:h-16 lg:w-[70%]">
    <p className="font-bold text-body-background text-xl md:text-3xl">
      ${price}
    </p>
    <div className="flex justify-center gap-1">
      <button className="text-white rounded-l-md bg-main-green px-4 py-2 text-xl md:text-3xl md:px-6">
        Add to Cart
      </button>
      <button className="text-white bg-main-green px-3 text-2xl rounded-r-md md:text-4xl font-bold">
        <GoArrowRight />
      </button>
    </div>
  </div>
);

const ProductPreView = () => {
  const { productId } = useParams();

  const data = [
    {
      id: 1,
      name: "Apple Watch Ultra 2",
      price: 500,
      image: appleWatchImage,
      description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings, delivering rich
                    bass and crystal-clear highs. `,
      company: "apple",
      category: "Accessories",
      insert_Date: "2025-01-14",
      rate: 4.5,
    },
    {
      id: 2,
      name: "Xbox series x",
      price: 500,
      image: appleWatchImage,
      description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings,`,
      company: "apple",
      category: "Gaming",
      insert_Date: "2025-01-21",
      rate: 4.5,
    },
    {
      id: 3,
      name: "Samsung gear camera",
      price: 500,
      image: appleWatchImage,
      description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings,`,
      company: "apple",
      category: "Camera",
      insert_Date: "2025-01-7",
      rate: 4.5,
    },
    {
      id: 4,
      name: "Apple Watch Ultra 2",
      price: 500,
      image: appleWatchImage,
      description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings, `,
      company: "apple",
      category: "Accessories",
      insert_Date: "2025-01-21",
      rate: 4.5,
    },
  ];

  const product = data.find((product) => product.id === parseInt(productId));

  if (!product) {
    return (
      <div className="text-center text-2xl font-bold mt-10">
        Product not found. Please check the URL and try again.
      </div>
    );
  }

  return (
    <div className="font-body">
      <Nav />
      <main className="w-full">
        {/* Product Preview Section */}
        <section className="relative w-full flex flex-col space-y-5 lg:flex-row">
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r to-green-400 from-blue-500"></div>
          <section className="relative flex justify-between p-4 lg:w-[40%]">
            {/* Product Details (Mobile) */}
            <section className="flex flex-col justify-center gap-2 z-10 w-[40%] md:items-center lg:hidden">
              <ProductDetails
                label="category"
                value={product.category}
                h4Color="white"
                h4Size="xl"
                pSize="lg"
              />
              <ProductDetails
                label="company"
                value={product.company}
                h4Color="white"
                h4Size="xl"
                pSize="lg"
              />
              <ProductDetails
                label="price"
                value={`$${product.price}`}
                h4Color="white"
                h4Size="xl"
                pSize="lg"
              />
            </section>
            {/* Product Image */}
            <section className="w-[50%] lg:w-full lg:flex lg:items-center lg:justify-center">
              <img
                className="object-cover w-[100%] z-10 md:w-[75%] lg:w-[65%]"
                src={product.image}
                alt={product.name}
              />
            </section>
          </section>
          {/* Product Info Section */}
          <section className="relative w-full flex flex-col space-y-3 rounded-t-3xl bg-body-background z-10 p-4 md:p-6 lg:rounded-t-none lg:rounded-tl-3xl lg:w-[60%] lg:rounded-bl-3xl">
            {/* Favorite Button (Mobile) */}
            <button className="absolute flex justify-center items-center rounded-full top-[-20px] left-5 border bg-body-background w-10 h-10 md:w-16 md:h-16 md:top-[-30px] lg:hidden">
              <FaRegHeart className="text-main-green text-xl hover:text-red-600 md:text-4xl" />
            </button>
            {/* Product Name and Description */}
            <h1 className="text-xl font-bold md:text-3xl">{product.name}</h1>
            <p className="md:text-2xl">{product.description}</p>
            {/* Product Details (Desktop) */}
            <section className="hidden justify-evenly gap-2 z-10 w-full py-5 pr-20 lg:flex">
              <ProductDetails label="category" value={product.category} />
              <ProductDetails label="company" value={product.company} />
              <ProductDetails label="price" value={`$${product.price}`} />
            </section>
            {/* Price and Add to Cart Section */}
            <PriceSection price={product.price} />
          </section>
        </section>
        {/* Related Products Section */}
        <section className="flex flex-col space-y-5 py-10 bg-body-background">
          <h3 className="font-bold text-center text-2xl md:text-4xl">
            Related Products
          </h3>
          <CardContainer data={data} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPreView;
