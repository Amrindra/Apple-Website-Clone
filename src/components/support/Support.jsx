import { useState } from "react";
import "./Support.css";

const Support = () => {
  const [showSearch, setShowSearch] = useState(false);

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
              <div
                className="support_search_input_wrapper"
                onClick={() => setShowSearch(!showSearch)}
              >
                <div className="support_search_input">
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <input type="text" placeholder="Search support" />
                </div>

                {/* This section will not show until user clicks on search input */}
                {showSearch && (
                  <div className="support_search_list_wrapper">
                    <h3>Quick Links</h3>
                    <ul className="support_search_lists">
                      <li>If you forgot your apple ID password</li>
                      <li>
                        If you forgot the passcode for your iPhone, iPad, or
                        iPod touch
                      </li>
                      <li>View, change, or cancel your subscriptions</li>
                      <li>Update iOS on your device</li>
                      <li>Contact Apple Support</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <hr />

          <div className="support_content_link">
            <div className="support_content_link_wrapper">
              <div className="support_content_link_item">
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/content-link-shareplay_2x.png"
                  alt=""
                />
                <div className="suport_content_link_block">
                  <h3>Stay connected with FaceTime</h3>
                  <p>
                    Share experiences, work together, join a FaceTime call from
                    any web browser, and more.
                  </p>
                  <span>Get started {">"}</span>
                </div>
              </div>

              <div className="support_content_link_item">
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/content-link-watch-workout_2x.png"
                  alt=""
                />
                <div className="suport_content_link_block">
                  <h3>Work out with your Apple Watch</h3>
                  <p>
                    Get started on your fitness and wellness journey, and track
                    all the ways you’re active.
                  </p>
                  <span>Start moving {">"}</span>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="support_virtual">
            <div className="support_virtual_wrapper">
              <div className="suport_content_link_block">
                <h3>Work out with your Apple Watch</h3>
                <p>
                  Get started on your fitness and wellness journey, and track
                  all the ways you’re active.
                </p>
                <span>Sign up {">"}</span>
              </div>
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-promo-todayatapple_2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="get_support">
        <div className="get_support_wrapper">
          <h3>Get support</h3>
          <p className="get_support_desc">
            Choose a product and we’ll find you the best solution.
          </p>
          <span>Sign up {">"}</span>
          <p className="get_support_button">
            Download the Apple Support app {">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
