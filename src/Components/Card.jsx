import "./Card.css";

const Card = ({ img, heading, description, price }) => {
  return (
    <div className="card-box">
      <img src={img} alt="" />
      <div className="description">
        <h2>{heading}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Card;
