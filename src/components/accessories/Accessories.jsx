import "./Accessories.scss";

const Accessories = () => {
  return (
    <div className="accessories">
      <div className="accessories_container">
        <div className="accessories_hero_banner">
          <div className="accessories_hero_banner_img">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/magsafe-202203?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1644980568536"
              alt=""
            />
          </div>

          <div className="accessories_hero_banner_intro">
            <h3>Mix. Match. MagSafe.</h3>
            <p>Snap on a case, wallet, wireless charger, or battery pack.</p>
            <span>Shop MagSafe {">"}</span>
          </div>
        </div>

        <div className="accessories_search_section">
          <h1>test</h1>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
