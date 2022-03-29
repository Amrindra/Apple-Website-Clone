import "../styles/HomeFeature.css";

const HomeFeature = ({ title, desc, img, subtitle, icon, button }) => {
  return (
    <div className="homepage-feature">
      <div className="feature-body">
        <h3>
          <span>
            <i className={icon}></i>
          </span>{" "}
          {title}
        </h3>
        <p className="subtitle">{subtitle}</p>
        <p>{desc}</p>

        <div className="button-wrappers">
          <button>Learn more {">"} </button>
          <button>
            {button} {">"}{" "}
          </button>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default HomeFeature;
