import "../../styles/Store/StoreCard.css";

const StoreCard = () => {
  return (
    <div className="store-card-container">
      <div className="store-card-desc">
        <h4>IPHONE</h4>
        <h3>Oh. SO. PRO.</h3>
        <p>Get $100–$650 off when you trade in an iPhone 8 or newer◊◊</p>
      </div>
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645052290504"
        alt=""
      />
    </div>
  );
};

export default StoreCard;
