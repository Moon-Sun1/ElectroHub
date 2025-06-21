import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";

const Input = ({
  type,
  name,
  register,
  errors,
  labelText,
  style,
  onChange,
}) => {
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
        onChange={onChange}
        type={type}
        name={name}
        {...register(name, {
          required: { value: true, message: "This field is required" },
          ...(type === "number" && {
            min: { value: 0, message: "Value must be greater than 0" },
          }),
        })}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};

const ProductForm = ({ handlePreview }) => {
  const [imageUrl, setImageUrl] = useState("");
  const handlePreviewRef = useRef(handlePreview);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  // Update the ref when handlePreview changes
  useEffect(() => {
    handlePreviewRef.current = handlePreview;
  }, [handlePreview]);

  // Watch form values for real-time preview
  const watchedValues = watch();

  // Update preview when form values change - using ref to avoid dependency issues
  useEffect(() => {
    const updateData = {
      name: watchedValues.name || "",
      price: watchedValues.price || 0,
      description: watchedValues.description || "",
      company: watchedValues.company || "",
      category: watchedValues.category || "",
      image_url: watchedValues.image,
    };

    handlePreviewRef.current(updateData);
  }, [
    watchedValues.name,
    watchedValues.price,
    watchedValues.description,
    watchedValues.company,
    watchedValues.category,
    watchedValues.image,
  ]);

  // Handle file input changes

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <form className="w-full grid grid-cols-6 gap-4 items-center">
        <Input
          type="text"
          name="name"
          register={register}
          errors={errors}
          style={"col-span-3"}
          labelText="Product Name"
        />

        <select
          className={`col-span-2 mt-6 p-2 mr-10 rounded-md outline-0 bg-slate-50 border hover:border-main-green text-slate-800 duration-300 ${
            errors.category ? "border-red-500" : ""
          }`}
          {...register("category", {
            required: { value: true, message: "Category is required" },
          })}
        >
          <option value="">Select Category</option>
          <option value="4">Accessories</option>
          <option value="3">Gaming</option>
          <option value="5">Camera</option>
          <option value="1">Smartphone</option>
          <option value="2">Laptop</option>
        </select>
        {errors.category && (
          <span className="text-red-500 text-sm">
            {errors.category.message}
          </span>
        )}

        <Input
          type="number"
          name="price"
          register={register}
          errors={errors}
          style={"col-span-2"}
        />

        <Input
          type="file"
          name="image"
          register={register}
          errors={errors}
          style={"col-span-3"}
        />

        <Input
          type="text"
          name="description"
          register={register}
          errors={errors}
          style={"col-span-5"}
        />

        <Input
          type="text"
          name="company"
          register={register}
          errors={errors}
          style={"col-span-2"}
        />

        <Input
          type="number"
          name="stock"
          register={register}
          errors={errors}
          style={"col-span-2"}
        />

        <button
          type="submit"
          className="col-span-6 w-24 bg-main-green text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
