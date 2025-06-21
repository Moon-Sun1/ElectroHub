import Card from "./Card";

const CardContainer = ({data}) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 min-h-full  items-end">
      {data.map((product, index) => {
        return <Card data={product} key={index} />;
      })}
    </div>
  );
};

export default CardContainer;
