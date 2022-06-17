import "./Accessories.scss";
import { useState } from "react";

const Accessories = () => {
  const [inputClick, setInputClick] = useState(true);
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
            <button>Browser by Product</button>
            <button>Browser by Category</button>
          </div>
        </div>

        {/* Browse by product section */}

        <div className="accessories_browser_by_product">
          <div className="accessories_browser_by_product_wrapper">
            <div className="browse_product_item">
              <div className="browse_product_item_wrapper">
                <div className="browse_product_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
                    alt=""
                  />
                </div>
              </div>
              <h3>Mac</h3>
            </div>

            <div className="browse_product_item">
              <div className="browse_product_item_wrapper">
                <div className="browse_product_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-ipad?wid=150&hei=150&fmt=png-alpha&.v=1544482382704"
                    alt=""
                  />
                </div>
              </div>
              <h3>iPad</h3>
            </div>

            <div className="browse_product_item">
              <div className="browse_product_item_wrapper">
                <div className="browse_product_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-iphone?wid=150&hei=150&fmt=png-alpha&.v=1544482382650"
                    alt=""
                  />
                </div>
              </div>
              <h3>iPhone</h3>
            </div>

            <div className="browse_product_item">
              <div className="browse_product_item_wrapper">
                <div className="browse_product_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-watch?wid=150&hei=150&fmt=png-alpha&.v=1544482383418"
                    alt=""
                  />
                </div>
              </div>
              <h3>Watch</h3>
            </div>

            <div className="browse_product_item">
              <div className="browse_product_item_wrapper">
                <div className="browse_product_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-tv?wid=150&hei=150&fmt=png-alpha&.v=1544482382741"
                    alt=""
                  />
                </div>
              </div>
              <h3>TV & Home</h3>
            </div>
          </div>
        </div>

        {/* Browse by category section */}
        <div className="accessories_browser_by_category">
          <div className="accessories_browser_by_category_wrapper">
            <div className="browse_category_item">
              <div className="browse_category_item_wrapper">
                <div className="browse_category_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
                    alt=""
                  />
                </div>
              </div>
              <h3>Mac</h3>
            </div>

            <div className="browse_category_item">
              <div className="browse_category_item_wrapper">
                <div className="browse_category_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
                    alt=""
                  />
                </div>
              </div>
              <h3>Mac</h3>
            </div>

            <div className="browse_category_item">
              <div className="browse_category_item_wrapper">
                <div className="browse_category_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
                    alt=""
                  />
                </div>
              </div>
              <h3>Mac</h3>
            </div>

            <div className="browse_category_item">
              <div className="browse_category_item_wrapper">
                <div className="browse_category_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
                    alt=""
                  />
                </div>
              </div>
              <h3>Mac</h3>
            </div>

            <div className="browse_category_item">
              <div className="browse_category_item_wrapper">
                <div className="browse_category_img_wrapper">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
                    alt=""
                  />
                </div>
              </div>
              <h3>Mac</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
