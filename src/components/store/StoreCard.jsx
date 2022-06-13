import "../../styles/Store/StoreCard.css";

const StoreCard = ({ cardTitle, cardDesc, cardPrice, cardImg, className }) => {
  return (
    <div className="store-card-container">
      <div className={`store-card-desc ${className}`}>
        <h4>{cardTitle}</h4>
        <h3>{cardDesc}</h3>
        <p>{cardPrice}</p>
      </div>
      <img src={cardImg} alt="" />
    </div>
  );
};

export default StoreCard;
