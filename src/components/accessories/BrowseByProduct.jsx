import "./BrowseByProduct.scss";

const BrowseByProduct = () => {
  return (
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
  );
};

export default BrowseByProduct;
