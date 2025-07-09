import Card from "../../../components/Card";
import ProductForm from "../../components/layout/ProductForm";
import { useState } from "react";


const AddProduct = () => {
 
  const [previewData, setPreviewData] = useState({
    name: "",
    price: 0,
    image_url: "", // Corrected property name
    description: "",
    company: "",
    category: "",
  });

  const [imageUrl, setImageUrl] = useState(null);

  function handlePreviewChange(newData) {
    setPreviewData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    } else {
      setImageUrl(null);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-2 sm:p-4 md:p-6 relative z-0">
      <h1 className="w-full text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">Add Product</h1>
      <div className="relative flex flex-col lg:flex-row w-full h-full items-center lg:items-start justify-between bg-white rounded-lg shadow-md p-2 sm:p-4 md:p-6 gap-6 lg:gap-0">
        <div className="hidden lg:block absolute w-[2px] h-3/4 bg-gray-200 left-[60%] top-[15%]"></div>
        <div className="w-full lg:w-[60%] flex flex-col items-center">
          <ProductForm
            handlePreview={handlePreviewChange}
          />
        </div>
        <div className="w-full mt-6 lg:mt-0 lg:w-[30%] flex justify-center">
          <Card data={previewData} />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
