import "./index.css";

const data = [
  {
    title: "Card 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, deleniti velit provident ullam enim labore sed aliquid doloribus aliquam autem.",
  },
  {
    title: "Card 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, deleniti velit provident ullam enim labore sed aliquid doloribus aliquam autem.",
  },
  {
    title: "Card 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, deleniti velit provident ullam enim labore sed aliquid doloribus aliquam autem.",
  },
];

const InfoCard = () => {
  return (
    <div className="info-card">
      {data?.map((item, index) => (
        <div key={index} className="info-single-card">
          <h2 className="info-single-card-title">{item?.title}</h2>
          <div className="info-card-single-divider"></div>
          <p className="info-single-card-description">{item?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
