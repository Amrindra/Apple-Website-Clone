import "./Accessories.scss";
import { useState } from "react";
import BrowseByProduct from "./BrowseByProduct";
import BrowseByCategory from "./BrowseByCategory";
import AccessoryCard from "./AccessoryCard";

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
              className={showBrowseProductCategory && "current"}
              onClick={() =>
                setShowBrowseProductCategory(!showBrowseProductCategory)
              }
              disabled={showBrowseProductCategory}
            >
              Browser by Product
            </button>
            <button
              className={showBrowseProductCategory ? "notActive" : "current"}
              onClick={() =>
                setShowBrowseProductCategory(!showBrowseProductCategory)
              }
              disabled={!showBrowseProductCategory}
            >
              Browser by Category
            </button>
          </div>
        </div>
        {/* <hr /> */}

        {/* Browse by product and category section */}
        {showBrowseProductCategory ? <BrowseByProduct /> : <BrowseByCategory />}

        <section className="accessories_card_feature_section">
          <div className="accessories_card_feature_section_container">
            <h1>Featured Apple Accessories</h1>
            <div className="accessories_card_feature_section_wrapper">
              <div className="accessories_card_feature_top">
                <div className="feature_card1">
                  <AccessoryCard className="feature_card_1" title="" />
                </div>
                <div className="feature_card2">
                  <AccessoryCard className="feature_card_2" />
                </div>
              </div>
            </div>
            <div className="accessories_card_feature_bottom">
              <AccessoryCard className="feature_card_3" />
              <AccessoryCard className="feature_card_4" />
              <AccessoryCard className="feature_card_5" />
            </div>

            <div className="accessories_card_headphone_section">
              <h3>Wireless Headphones</h3>
              <div className="accessories_card_headphone">
                <AccessoryCard className="feature_card_3" />
                <AccessoryCard className="feature_card_4" />
                <AccessoryCard className="feature_card_5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accessories;
