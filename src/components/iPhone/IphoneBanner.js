import "../../styles/iPhone/IphoneBanner.css";

const IphoneBanner = ({ title, desc, image, price, className }) => {
  return (
    <div className={`iphone-banner-container`}>
      <div className="iphone-banner-body">
        <h3>{title}</h3>
        <h1>{desc}</h1>
        <p className="price">{price} </p>

        <div className="iphone-button-wrappers">
          <button className="iphone-buy-btn">Buy </button>
          <button className="iphone-learn-more">Learn more {">"} </button>
        </div>
      </div>

      <img src={image} alt="" />
    </div>
  );
};

export default IphoneBanner;
