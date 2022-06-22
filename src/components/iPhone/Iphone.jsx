import "./Iphone.scss";

const Iphone = () => {
  return (
    <div className="iPhone">
      <div className="iphone_container">
        <div className="iphone_compare">
          <h2>Which iPhone is right for you? </h2>
          <div className="iphone_compare_wrapper">
            <div className="iphone_compare_items">
              <img
                src="https://www.apple.com/v/iphone/home/bh/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large.jpg"
                alt=""
                className="iphone_img"
              />
              <img
                src="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13_pro__dwe0m1kjylsi_small.png"
                alt=""
                className="color_option_img"
              />

              <div className="iphone_compare_content">
                <p className="iphone_new">New</p>
                <img
                  src="https://www.apple.com/v/iphone/home/bh/images/overview/compare/logo_iphone_13_pro__cweli4ej4gk2_large.png"
                  alt=""
                  className="title_img"
                />
                <p className="iphone_desc">The ultimate iPhone.</p>
                <p className="price">From $400</p>
                <button>Buy</button>
                <p className="iphone_learn_more">Learn more {">"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
