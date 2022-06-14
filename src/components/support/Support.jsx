import "./Support.css";

const Support = () => {
  return (
    <div className="support">
      <div className="support_container">
        <header className="support_header">
          <h1 className="support_title">Apple Support</h1>
        </header>

        <div className="support_proudct_nav">
          <div className="support_proudct_nav_warpper">
            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png"
                alt=""
              />
              <p>iPhone</p>
            </div>

            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_family_2x.png"
                alt=""
              />
              <p>Mac</p>
            </div>

            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png"
                alt=""
              />
              <p>iPad</p>
            </div>

            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png"
                alt=""
              />
              <p>Watch</p>
            </div>

            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage-productdrawer-airpods-dark_2x.png"
                alt=""
              />
              <p>AirPods</p>
            </div>

            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_applemusic_2x.png"
                alt=""
              />
              <p>Music</p>
            </div>

            <div className="support_proudct_nav_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/homepage-productdrawer-appletv_2x.png"
                alt=""
              />
              <p>TV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
