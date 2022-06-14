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

        <div className="support_repair_section">
          <hr />
          <div className="support_repair_wrapper">
            <div className="support_repair_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-homepage-password_2x.png"
                alt=""
              />
              <div className="support_repair_item_text_wrapper">
                <p>Forget Apple ID or</p>
                <p>password {">"}</p>
              </div>
            </div>

            <div className="support_repair_item middle">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-homepage-repair_2x.png"
                alt=""
              />
              <div className="support_repair_item_text_wrapper">
                <p>Apple Repair {">"} </p>
              </div>
            </div>

            <div className="support_repair_item">
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-homepage-subscriptions_2x.png"
                alt=""
              />
              <div className="support_repair_item_text_wrapper">
                <p>Billing and subscriptions {">"}</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="support_search">
            <div className="support_search_wrapper">
              <h1>Search for topics</h1>
              <div className="support_search_input_wrapper">
                <div className="support_search_input">
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <input type="text" placeholder="Search support" />
                </div>

                <div className="support_search_list_wrapper">
                  <h3>Quick Links</h3>
                  <ul className="support_search_lists">
                    <li>If you forgot your apple ID password</li>
                    <li>
                      If you forgot the passcode for your iPhone, iPad, or iPod
                      touch
                    </li>
                    <li>View, change, or cancel your subscriptions</li>
                    <li>Update iOS on your device</li>
                    <li>Contact Apple Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Support;
