import "../../styles/mac/MacNotebook.css";

const MacNotebook = ({ computerImage, colorOptionImage, price, macTitle }) => {
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
        <div className="notebook-chip">
          <img src="" alt="" />
          <p>Apple M1 chip</p>
        </div>

        <div className="notebook-cpu">
          <h3>8-core</h3>
          <p>CPU</p>
        </div>

        <div className="notebook-gpu">
          <p>Up to</p>
          <h3>8-core</h3>
          <p>GPU</p>
        </div>

        <div className="notebook-ram-memory">
          <img src="" alt="" />
          <p>Up to 16GB </p>
        </div>

        <div className="notebook-storage">
          <h3>2TB</h3>
          <p>Maximum configurable storage</p>
        </div>

        <div className="notebook-retina-display">
          <h3>13.3"</h3>
          <p>Retina display</p>
        </div>

        <div className="notebook-battery">
          <img src="" alt="" />
          <p>Up to 18 hours battery life</p>
        </div>

        <div className="notebook-facetime-camera">
          <img src="" alt="" />
          <p>720p Facetime HD camera</p>
        </div>

        <div className="notebook-weight">
          <h3>2.8lb.</h3>
          <p>Weight</p>
        </div>

        <div className="notebook-touch-id">
          <img src="" alt="" />
          <p>Touch ID</p>
        </div>
      </div>
    </div>
  );
};

export default MacNotebook;
