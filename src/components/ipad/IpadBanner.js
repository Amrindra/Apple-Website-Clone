import "../../styles/iPad/IpadBanner.css";

const IpadBanner = (props) => {
  return (
    <div className={`ipad-banner-container ${props.className}`}>
      <div className={`ipad-banner-wrapper `}>
        <p className="ipad-new">{props.current}</p>

        <div className="ipad-banner-title">
          <h1>{props.model}</h1>
          <img src={props.logoImage} alt="" />
        </div>

        <h3>
          {props.desc1}
          <br />
          {props.desc2}
        </h3>

        <div className="ipad-price">{props.price}</div>

        <div className="ipad-button-wrappers">
          <button className="ipad-buy-btn">Buy </button>
          <button className="ipad-learn-more">Learn more {">"} </button>
        </div>
      </div>

      <img src={props.modelImage} alt="" />
    </div>
  );
};

export default IpadBanner;
