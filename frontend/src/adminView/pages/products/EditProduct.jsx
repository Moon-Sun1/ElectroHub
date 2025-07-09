import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import ProductForm from "../../components/layout/ProductForm";

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    // Fetch the product data by ID (replace with your actual API)
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Raw API response:", data);
        // If data is an array, use data[0]
        const product = Array.isArray(data) ? data[0] : data;
        if (!product || product.message) {
          // Handle not found or error
          setProduct(null);
          setPreviewData(null);
          return;
        }
        const mapped = {
          product_id: product.product_id,
          name: product.name || "",
          price: product.price || 0,
          description: product.description || "",
          company: product.company || "",
          category: product.category_id ? String(product.category_id) : "",
          image_url: product.image_url || "",
          stock: product.stock_quantity || 0,
        };
        setProduct(mapped);
        setPreviewData(mapped);
      });
  }, [productId]);

  function handlePreviewChange(newData) {
    setPreviewData((prev) => ({
      ...prev,
      ...newData,
    }));
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex flex-col items-center p-2 sm:p-4 md:p-6 relative z-0">
      <h1 className="w-full text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center lg:text-start">Edit Product</h1>
      <div className="relative flex flex-col md:flex-row w-full h-full items-center  justify-between bg-white rounded-lg shadow-md p-2 sm:p-4 md:p-6 gap-6 lg:gap-0">
        {/* Divider for large screens only */}
        <div className="hidden md:block absolute w-[2px] h-3/4 bg-gray-200 md:left-[52%] lg:left-[65%] lg:top-[15%]"></div>
        {/* Form Section */}
        <div className="w-full lg:w-[60%] flex flex-col items-center">
          <ProductForm
            handlePreview={handlePreviewChange}
            defaultValues={product}
            isEdit={true}
          />
        </div>
        {/* Preview Section */}
        <div className="w-full pb-10 lg:mt-0 lg:w-[30%] flex justify-center ">
          <Card data={previewData || product} />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
