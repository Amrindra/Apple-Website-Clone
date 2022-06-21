import { useState } from "react";
import "./Watch.scss";

const Watch = () => {
  const [changeImg, setChangeImg] = useState(true);

  const handleClick = () => {
    setChangeImg(!changeImg);
  };

  return (
    <div className="watch">
      <div className="watch_container">
        <div className="watch_content_1_wrapper">
          <img
            className="title_img"
            src="https://www.apple.com/v/watch/ax/images/overview/series-7/logo_watch_s7__dnxp9zoaom82_medium_2x.png"
            alt=""
          />
          <h3>Full screen ahead.</h3>
          <p>From $399</p>

          <div className="watch_content_links">
            <button>Buy</button>
            <div className="watch_content_link_item">
              <span>Learn more</span>
              <span>Watch Film</span>
            </div>
          </div>

          <img
            src="https://www.apple.com/v/watch/ax/images/overview/series-7/hero_s7__ep2maoos292e_large.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="watch_display_section">
        <div className="watch_display">
          <div className="watch_display_container">
            <div className="watch_content_2_left">
              <img
                className="content_2_title_img"
                src={
                  changeImg
                    ? "https://www.apple.com/v/watch/ax/images/overview/display/display_s7__fj2bqp6brfiy_large.jpg"
                    : "https://www.apple.com/v/watch/ax/images/overview/display/display_s3__f9n138ohv7e6_large.jpg"
                }
                alt=""
              />
            </div>

            <div className="watch_content_2_right">
              <p>Our largest display yet.</p>
              <h3>Over 50% more screen area than Series 3.</h3>

              <div className="watch_content_toggle_buttons">
                <button
                  onClick={handleClick}
                  disabled={changeImg}
                  className={changeImg ? "button active" : "button"}
                >
                  Series 7
                </button>
                <button
                  onClick={handleClick}
                  disabled={!changeImg}
                  className={changeImg ? "button" : "button active"}
                >
                  Series 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="watch_se_display">
        <div className="watch_se_display_container">
          <div className="watch_se_display_left">
            <img
              src="https://www.apple.com/v/watch/ax/images/overview/se/logo-watch-se__soyna2pegxeq_large_2x.png"
              alt=""
            />
            <h3>Heavy on features. Light on price.</h3>
            <p>From $279</p>

            <div className="watch_left_content">
              <button>Buy</button>
              <span>Learn more</span>
            </div>
          </div>

          <div className="watch_se_display_right">
            <img
              src="https://www.apple.com/v/watch/ax/images/overview/se/tile-watch-se__knji2d25x8qe_large_2x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
