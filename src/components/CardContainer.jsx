import Card from "./Card";

const data = [
  {
    id: 1,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: "src/assets/Apple_Watch_Ultra_2-removebg-preview.png",
    description: "This is a description of the product",
    company: "apple",
    category: "Electronics",
    insert_Date: "2025-01-14",
    rate: 4.5,
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: "src/assets/Xbox_series_x_slide-removebg-preview.png",
    description: "This is a description of the product",
    company: "apple",
    category: "Electronics",
    insert_Date: "2025-01-21",
    rate: 4.5,
  },

  {
    id: 3,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: "src/assets/samsung_gear_camera-removebg-preview.png",
    description: "This is a description of the product",
    company: "apple",
    category: "Electronics",
    insert_Date: "2025-01-7",
    rate: 4.5,
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: "src/assets/Apple_Watch_Ultra_2-removebg-preview.png",
    description: "This is a description of the product",
    company: "apple",
    category: "Electronics",
    insert_Date: "2025-01-21",
    rate: 4.5,
  },
];

const CardContainer = () => {
  return (
    <div className="flex flex-wrap justify-center space-y-5 space-x-8 min-h-full items-end">
      {data.map((product, index) => {
        return <Card data={product} key={index} />;
      })}
    </div>
  );
};

export default CardContainer;
