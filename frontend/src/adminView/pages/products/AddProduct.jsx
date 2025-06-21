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
    <div className="w-full h-full flex flex-col items-center p-6 relative z-0">
      <h1 className="w-full text-2xl font-bold mb-4">Add Product</h1>
      <div className="relative flex w-full h-full items-center justify-between bg-white rounded-lg shadow-md p-6">
        <div className=" absolute w-[2px] h-3/4 bg-gray-400 left-[60%] top-[15%]"></div>
        <div className="w-[60%]">
          <ProductForm
            handlePreview={handlePreviewChange}
          />
        </div>
        <div className="w-[30%]">
          <Card data={previewData} />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
