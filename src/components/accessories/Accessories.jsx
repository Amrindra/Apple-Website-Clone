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
                    optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6M3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1651774758181"
                    optionImg2="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML2V3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1630367855000"
                    optionImg3="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML2U3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1630367855000"
                    optionImg4="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML2W3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1630367856000"
                  />
                </div>
                <div className="feature_card2">
                  <AccessoryCard
                    className="feature_card_2"
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6N3_FV532?wid=532&hei=582&fmt=png-alpha&.v=1651860910311"
                    title="Pride Edition Sport Loop"
                    price="$49.00"
                    optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6K3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1652803215931"
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
                optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN663_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602096"
                optionImg2="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN653_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232601954"
                optionImg3="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN673_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232601875"
                optionImg4="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602059"
                optionImg5="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM2H3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1630023672000"
                optionImg6="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM2J3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1630023673000"
              />
              <AccessoryCard
                className="feature_card_4"
                img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833"
                title="Magic Keyboard with Touch ID and Numeric Keypad"
                price="$199.00"
                optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2C3T_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645887772551"
                optionImg2="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3UA_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1649699610746"
              />
              <AccessoryCard
                className="feature_card_5"
                img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_FV102?wid=532&hei=582&fmt=png-alpha&.v=1645214428592"
                title="Smart Folio for iPad Air"
                price="$79.00"
                optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645154299730"
                optionImg2="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645154298745"
                optionImg3="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645154298746"
                optionImg4="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645154298023"
                optionImg5="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645154298746"
                optionImg6="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1598908026000"
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
                  optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1604622935000"
                  optionImg2="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846873000"
                  optionImg3="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846873000"
                  optionImg4="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846873000"
                  optionImg5="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846875000"
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
                  optionImg1="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1604622935000"
                  optionImg2="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846873000"
                  optionImg3="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846873000"
                  optionImg4="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846873000"
                  optionImg5="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1603846875000"
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
