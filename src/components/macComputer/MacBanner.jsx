import "../../styles/mac/MacBanner.css";

const MacBanner = ({ generation, model, desc, price, img }) => {
  return (
    <div className={`mac-banner-wrapper`}>
      <div className="mac-banner-body">
        <p className="new">{generation}</p>
        <h1>{model}</h1>
        <h3 className="desc">{desc}</h3>
        <p className="price">{price}</p>

        <div className="mac-button-wrapper">
          <button className="buy-btn">Buy </button>
          <button className="learn-more-btn">Learn more {">"} </button>
        </div>
      </div>

      <img src={img} alt="" />
    </div>
  );
};

export default MacBanner;
