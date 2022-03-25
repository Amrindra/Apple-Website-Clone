import "../styles/Banner.css";

const Banner = ({ title, desc, image, text, className }) => {
  return (
    <div className={`banner-container ${className}`}>
      <div className="banner-body">
        <p>{text}</p>
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="button-wrappers">
          <button>Learn more {">"} </button>
          <button>Buy {">"} </button>
        </div>
      </div>

      <img src={image} alt="" />
    </div>
  );
};

export default Banner;
