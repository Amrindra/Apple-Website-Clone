import "../../styles/mac/MacNotebook.css";
import NotebookSpecs from "./NotebookSpecs";

const MacNotebook = ({
  computerImage,
  colorOptionImage,
  price,
  macTitle,
  chipImage,
  chipTitle,
  cpuTitle,
  gpuLevel,
  gpuTitle,
  ramMemoryDesc,
  storageTitle,
  retinaDisplayTitle,
  retinaDisplayDesc,
  batteryDesc,
  facetimeCameraDesc,
  weightTitle,
  touchIDImage,
  touchIdDesc,
  className
}) => {
  return (
    <div className="noteboook-container">
      <div className="notebook-top-section">
        <img src={computerImage} alt="" className="computer-image" />
        <img src={colorOptionImage} alt="" className="color-option-image" />
        <p className="mac-notebook-price">{price}</p>
        <h3 className="mac-notebook-title">{macTitle}</h3>
        <button className="mac-notebook-buy-btn">Buy</button>
        <button className="mac-notebook-learnmore-btn">Learn more {">"}</button>
        <div className="notebook-underline"></div>
      </div>

      <div className="notebook-bottom-section">
        <div className={`notebook-chip notebook-items ${className}`}>
          <img src={chipImage} alt="" />
          <p>{chipTitle}</p>
        </div>

        <div className="notebook-cpu notebook-items">
          <h3>{cpuTitle}</h3>
          <p>CPU</p>
        </div>

        <div className="notebook-gpu notebook-items">
          <p>{gpuLevel}</p>
          <h3>{gpuTitle}</h3>
          <p>GPU</p>
        </div>

        <div className="notebook-ram-memory notebook-items">
          <img
            src="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large_2x.png"
            alt=""
          />
          <p>{ramMemoryDesc} </p>
          <p>unified memory</p>
        </div>

        <div className="notebook-storage notebook-items">
          <h3>{storageTitle}</h3>
          <p>Maximum configurable storage</p>
        </div>

        <div className="notebook-retina-display notebook-items">
          <h3>{retinaDisplayTitle}"</h3>
          <p>{retinaDisplayDesc}</p>
        </div>

        <div className="notebook-battery notebook-items">
          <img
            src="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large_2x.png"
            alt=""
          />
          <p>{batteryDesc}</p>
        </div>

        <div className="notebook-facetime-camera notebook-items">
          <img
            src="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_camera__dlxow9r3leie_large_2x.png"
            alt=""
          />
          <p>{facetimeCameraDesc}</p>
        </div>

        <div className="notebook-weight notebook-items">
          <h3>{weightTitle}</h3>
          <p>Weight</p>
        </div>

        <div className="notebook-touch-id notebook-items">
          <img src={touchIDImage} alt="" />
          <p>{touchIdDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default MacNotebook;
