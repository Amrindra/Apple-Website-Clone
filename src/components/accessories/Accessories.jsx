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
                  <AccessoryCard
                    className="feature_card_1"
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6N3_FV532?wid=532&hei=582&fmt=png-alpha&.v=1651860910311"
                    title="Pride Edition Nike Sport Loop"
                    price="$49.00"
                  />
                </div>
                <div className="feature_card2">
                  <AccessoryCard
                    className="feature_card_2"
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6L3_FV402?wid=1420&hei=930&fmt=png-alpha&.v=1651856288917"
                    title="Pride Edition Sport Loop"
                    price="$49.00"
                  />
                </div>
              </div>
            </div>
            <div className="accessories_card_feature_bottom">
              <AccessoryCard
                className="feature_card_3"
                img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN653_AV3?wid=532&hei=582&fmt=png-alpha&.v=1645998988412"
                title="iPhone 13 Pro Silicone Case With MagSage"
                price="$49.00"
              />
              <AccessoryCard
                className="feature_card_4"
                img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833"
                title="Magic Keyboard with Touch ID and Numeric Keypad"
                price="$199.00"
              />
              <AccessoryCard
                className="feature_card_5"
                img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_FV102?wid=532&hei=582&fmt=png-alpha&.v=1645214428592"
                title="Smart Folio for iPad Air"
                price="$79.00"
              />
            </div>

            {/* Wireless Headphones Section */}
            <div className="accessories_card_headphone_section">
              <h3>Wireless Headphones</h3>
              <div className="accessories_card_headphone">
                <AccessoryCard
                  className="feature_card_3"
                  img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000"
                  title="AirPods (3rd generation)"
                  price="$179.00"
                />
                <AccessoryCard
                  className="feature_card_4"
                  img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=532&hei=582&fmt=png-alpha&.v=1591634795000"
                  title="AirPods Pro"
                  price="$249.00"
                />
                <AccessoryCard
                  className="feature_card_5"
                  img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=532&hei=582&fmt=png-alpha&.v=1604021221000"
                  title="AirPods Max - Silver"
                  price="$549.00"
                />
              </div>
            </div>

            <div className="accessories_card_headphone_section">
              <h3>AirTag</h3>
              <div className="accessories_card_headphone">
                <AccessoryCard
                  className="feature_card_3"
                  img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761671000"
                  title="AirTag"
                  price=""
                />
                <AccessoryCard
                  className="feature_card_4"
                  img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-4pack-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761669000"
                  title="AirTag 4 pack"
                  price=""
                />
                <AccessoryCard
                  className="feature_card_5"
                  img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX4A2?wid=532&hei=582&fmt=png-alpha&.v=1618028917000"
                  title="AirTag Leather Loop - Saddle Brown"
                  price="$39.00"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accessories;
