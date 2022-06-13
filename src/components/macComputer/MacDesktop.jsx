import "../../styles/mac/MacDesktop.css";

const MacDesktop = ({
  computerImage,
  colorOptionImage,
  price,
  desktopTitle,
  chipImage,
  chipTitle,
  cpuTitle,
  gpuLevel,
  gpuTitle,
  gpuDesc,
  ramMemoryDesc,
  storageTitle,
  retinaDisplayTitle,
  retinaDisplayDesc,
  facetimeImage,
  facetimeCameraDesc,
  weightTitle,
  touchIDImage,
  touchIdDesc,
  className
}) => {
  return (
    <div className="mac-desktop-container">
      <div className="mac-desktop-top-section">
        <img src={computerImage} alt="" className="computer-image" />
        <img src={colorOptionImage} alt="" className="color-option-image" />
        <h3 className="mac-desktop-title">{desktopTitle}</h3>
        <p className="mac-desktop-price">{price}</p>
        <button className="mac-desktop-buy-btn">Buy</button>
        <button className="mac-desktop-learnmore-btn">Learn more {">"}</button>
        <div className="mac-desktop-underline"></div>
      </div>

      <div className="desktop-bottom-section">
        <div className={`desktop-chip desktop-items ${className}`}>
          <img src={chipImage} alt="" />
          <p>{chipTitle}</p>
        </div>

        <div className="desktop-cpu desktop-items">
          <h3>{cpuTitle}</h3>
          <p>CPU</p>
        </div>

        <div className="desktop-gpu desktop-items">
          <p>{gpuLevel}</p>
          <h3>{gpuTitle}</h3>
          <p>{gpuDesc}</p>
        </div>

        <div className="desktop-ram-memory desktop-items">
          <img src="" alt="" />
          <p>{ramMemoryDesc}</p>
          <p>unified memory</p>
        </div>

        <div className="desktop-storage desktop-items">
          <h3>{storageTitle}</h3>
          <p>Maximum configurable storage</p>
        </div>

        <div className="desktop-retina-display desktop-items">
          <h3>{retinaDisplayTitle}</h3>
          <p>{retinaDisplayDesc}</p>
        </div>

        <div className="desktop-facetime-camera desktop-items">
          <img src={facetimeImage} alt="" />
          <p>{facetimeCameraDesc}</p>
        </div>

        <div className={`desktop-touch-id desktop-items ${className}`}>
          <img src={touchIDImage} alt="" />
          <p>{touchIdDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default MacDesktop;
