import "./Watch.scss";

const Watch = () => {
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

      <div className="watch_display">
        <div className="watch_display_container">
          {/* <div className="watch_display_content_2_wrapper"> */}
          <div className="watch_content_2_left">
            <img
              className="content_2_title_img"
              src="https://www.apple.com/v/watch/ax/images/overview/display/display_s7__fj2bqp6brfiy_large.jpg"
              alt=""
            />
          </div>

          <div className="watch_content_2_right">
            <p>Our largest display yet.</p>
            <h3>Over 50% more screen area than Series 3.</h3>

            <div className="watch_content_toggle_buttons">
              <button>Series 7</button>
              <button>Series 3</button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Watch;
