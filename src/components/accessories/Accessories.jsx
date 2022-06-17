import "./Accessories.scss";
import { useState } from "react";
import BrowseByProduct from "./BrowseByProduct";
import BrowseByCategory from "./BrowseByCategory";

const Accessories = () => {
  const [inputClick, setInputClick] = useState(true);
  const [showBrowseProductCategory, setShowBrowseProductCategory] = useState(
    true
  );
  return (
    <div className={inputClick ? "accessories" : " accessories active"}>
      <div className="accessories_container">
        <div className="accessories_hero_banner">
          <div className="accessories_hero_banner_intro">
            <div className="accessories_hero_banner_intro_wrapper">
              <h3>Mix. Match. MagSafe.</h3>
              <p>Snap on a case, wallet, wireless charger, or battery pack.</p>
              <span>Shop MagSafe {">"}</span>
            </div>
          </div>

          <div className="accessories_hero_banner_img">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/magsafe-202203?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1644980568536"
              alt=""
            />
          </div>
        </div>

        <div className={`accessories_search_section`}>
          <h1>Find the accessories you’re looking for.</h1>
          <div
            className={
              inputClick
                ? `accessories_search_input_wrapper`
                : `accessories_search_input_wrapper active`
            }
            onClick={() => setInputClick(!inputClick)}
          >
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input type="text" placeholder="Search accessories" />
          </div>
        </div>

        <div className="accessories_browse">
          <div className="accessories_browse_wrapper">
            <button
              onClick={() =>
                setShowBrowseProductCategory(!showBrowseProductCategory)
              }
            >
              Browser by Product
            </button>
            <button
              onClick={() =>
                setShowBrowseProductCategory(!showBrowseProductCategory)
              }
            >
              Browser by Category
            </button>
          </div>
        </div>

        {/* Browse by product and category section */}
        {showBrowseProductCategory ? <BrowseByProduct /> : <BrowseByCategory />}
      </div>
    </div>
  );
};

export default Accessories;
