import "../styles/IpadAir.css";

const IpadAir = ({ title, desc, img, subtitle, titleImage }) => {
  return (
    <div className="ipad-air">
      <div className="ipad-air-body">
        {/* <h3>{title}</h3> */}
        <img className="title" src={title} alt="" />
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

export default IpadAir;
