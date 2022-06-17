import "./BrowseByCategory.scss";

const BrowseByCategory = () => {
  return (
    <div className="accessories_browser_by_category">
      <div className="accessories_browser_by_category_wrapper">
        <div className="browse_category_item">
          <div className="browse_category_item_wrapper">
            <div className="browse_category_img_wrapper">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/category-icon-made-by-apple?wid=150&hei=150&fmt=png-alpha&.v=1526595684706"
                alt=""
              />
            </div>
          </div>
          <h3>Made by Apple</h3>
        </div>

        <div className="browse_category_item">
          <div className="browse_category_item_wrapper">
            <div className="browse_category_img_wrapper">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/category-icon-whats-new?wid=150&hei=150&fmt=png-alpha&.v=1523297510490"
                alt=""
              />
            </div>
          </div>
          <h3>What's New</h3>
        </div>

        <div className="browse_category_item">
          <div className="browse_category_item_wrapper">
            <div className="browse_category_img_wrapper">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha&.v=1523297977190"
                alt=""
              />
            </div>
          </div>
          <h3>Cases & Protection</h3>
        </div>

        <div className="browse_category_item">
          <div className="browse_category_item_wrapper">
            <div className="browse_category_img_wrapper">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha&.v=1470069181201"
                alt=""
              />
            </div>
          </div>
          <h3>
            Headphones <br /> & Speakers
          </h3>
        </div>

        <div className="browse_category_item">
          <div className="browse_category_item_wrapper">
            <div className="browse_category_img_wrapper">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-watch-bands?wid=150&hei=150&fmt=png-alpha&.v=1523304942327"
                alt=""
              />
            </div>
          </div>
          <h3>Apple Watch Bands</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
