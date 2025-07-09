import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ type, name, register, errors, labelText, style, step, required, onChange }) => {
  return (
    <div className={" " + style}>
      <label className="text-sm text-gray-600">{labelText || name}</label>
      <input
        className={`w-full p-2 rounded-md outline-0 bg-slate-50  border hover:border-main-green  text-slate-800 duration-300 ${
          errors[name] ? "border-red-500" : ""
        }`}
        placeholder={labelText || name}
        accept={type === "file" ? "image/*" : ""}
        autoComplete="off"
        type={type}
        name={name}
        step={step}
        {...register(name, {
          required: required ? { value: true, message: "This field is required" } : false,
          ...(type === "number" && {
            min: { value: 0, message: "Value must be greater than 0" },
          }),
        })}
        onChange={onChange}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};

const ProductForm = ({ handlePreview, defaultValues, isEdit }) => {
  const [imageUrl, setImageUrl] = useState(defaultValues?.image_url || "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const handlePreviewRef = useRef(handlePreview);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({ mode: "onChange", defaultValues });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
      setImageUrl(defaultValues.image_url || "");
    }
  }, [defaultValues, reset]);

  useEffect(() => {
    handlePreviewRef.current = handlePreview;
  }, [handlePreview]);

  const watchedValues = watch();

  // Update preview when form values change
  useEffect(() => {
    const updateData = {
      name: watchedValues.name || "",
      price: watchedValues.price || 0,
      description: watchedValues.description || "",
      company: watchedValues.company || "",
      category: watchedValues.category || "",
      image_url: imageUrl, // Use the uploaded image URL
    };
    handlePreviewRef.current(updateData);
  }, [watchedValues.name, watchedValues.price, watchedValues.description, watchedValues.company, watchedValues.category, imageUrl]);

  // Custom handler for image input to update preview immediately
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl("");
    }
  };

  // Custom handler for text/number input to update preview immediately
  const handleFieldChange = (field) => (e) => {
    setValue(field, e.target.value);
    setTimeout(() => {
      handlePreviewRef.current({
        ...watch(),
        [field]: e.target.value,
        image_url: imageUrl,
      });
    }, 0);
  };

  // Submission handler
  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", Number(data.category));
      formData.append("company", data.company);
      formData.append("stock_quantity", Number(data.stock));
      // Only append image if a file is selected
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      } else if (defaultValues?.image_url) {
        formData.append("image_url", defaultValues.image_url);
      }
      let response;
      const token = localStorage.getItem("jwtToken");
      const fetchOptions = {
        method: isEdit ? "PUT" : "POST",
        body: formData,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      };
      if (isEdit) {
        response = await fetch(`http://localhost:5000/api/products/${defaultValues.product_id}`, fetchOptions);
      } else {
        response = await fetch("http://localhost:5000/api/products", fetchOptions);
      }
      if (!response.ok) throw new Error("Failed to save product");
      alert("Product saved successfully!");
      navigate("/admin/products");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <form className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4 items-center" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <Input
          type="text"
          name="name"
          register={register}
          errors={errors}
          style={"col-span-1 sm:col-span-2 lg:col-span-3"}
          labelText="Product Name"
          onChange={handleFieldChange("name")}
        />

        <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col">
          <label className="text-sm text-gray-600 mt-2 lg:mt-0">Category</label>
          <select
            className={`w-full p-2 rounded-md outline-0 bg-slate-50 border hover:border-main-green text-slate-800 duration-300 ${
              errors.category ? "border-red-500" : ""
            }`}
            {...register("category", {
              required: { value: true, message: "Category is required" },
            })}
          >
            <option value="">Select Category</option>
            <option value="4">Accessories</option>
            <option value="3">Gaming</option>
            <option value="5">Cameras</option>
            <option value="1">SmartPhones</option>
            <option value="2">Laptops</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category.message}</span>
          )}
        </div>

        <Input
          type="number"
          name="price"
          register={register}
          errors={errors}
          style={"col-span-1 sm:col-span-2 lg:col-span-2"}
          step="0.01"
          onChange={handleFieldChange("price")}
        />

        <Input
          type="file"
          name="image"
          register={register}
          errors={errors}
          style={"col-span-1 sm:col-span-2 lg:col-span-3"}
          required={!isEdit}
          onChange={handleImageChange}
        />

        <Input
          type="text"
          name="description"
          register={register}
          errors={errors}
          style={"col-span-1 sm:col-span-2 lg:col-span-5"}
          onChange={handleFieldChange("description")}
        />

        <Input
          type="text"
          name="company"
          register={register}
          errors={errors}
          style={"col-span-1 sm:col-span-2 lg:col-span-2"}
          onChange={handleFieldChange("company")}
        />

        <Input
          type="number"
          name="stock"
          register={register}
          errors={errors}
          style={"col-span-1 sm:col-span-2 lg:col-span-2"}
          onChange={handleFieldChange("stock")}
        />

        <button
          type="submit"
          className="col-span-1 sm:col-span-3  w-full bg-main-green text-white p-2 rounded-md hover:bg-green-600 transition duration-300 text-base font-semibold mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={submitting || uploading}
        >
          {submitting ? (isEdit ? "Saving..." : "Adding...") : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
