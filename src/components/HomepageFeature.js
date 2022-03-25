import "../styles/HomeFeature.css";

const HomeFeature = ({ title, desc, img, subtitle }) => {
  return (
    <div className="homepage-feature">
      <div className="feature-body">
        <h3>{title}</h3>
        <p className="subtitle">{subtitle}</p>
        <p>{desc}</p>

        <div className="button-wrappers">
          <button>Learn more {">"} </button>
          <button>Buy {">"} </button>
        </div>
      </div>

      <img src={img} alt="" />
    </div>
  );
};

export default HomeFeature;
