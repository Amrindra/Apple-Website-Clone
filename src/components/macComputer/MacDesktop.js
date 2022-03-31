import "../../styles/mac/MacDesktop.css";

const MacDesktop = () => {
  return (
    <div className="mac-desktop-container">
      <div className="mac-desktop-top-section">
        <img
          src="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_imac24__bdgus6d1xqb6_large.png"
          alt=""
          className="computer-image"
        />
        <img
          src="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_multicolor__ese4oyi8w4mu_large.png"
          alt=""
          className="color-option-image"
        />
        <p className="mac-desktop-price">199</p>
        <h3 className="mac-desktop-title">desktop</h3>
        <button className="mac-desktop-buy-btn">Buy</button>
        <button className="mac-desktop-learnmore-btn">Learn more {">"}</button>
        <div className="mac-desktop-underline"></div>
      </div>
    </div>
  );
};

export default MacDesktop;
