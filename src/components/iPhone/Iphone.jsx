import "./Iphone.scss";

const Iphone = (props) => {
  return (
    <div className="iPhone">
      <div className="iphone_container">
        <div className="iphone_compare">
          <div className="iphone_compare_wrapper">
            <div className="iphone_compare_items">
              <img src={props.iphoneImg} alt="" className="iphone_img" />
              <img
                src={props.iphoneColorOption}
                alt=""
                className="color_option_img"
              />

              <div className="iphone_compare_content">
                <p className="iphone_new">New</p>
                <img src={props.iphoneTitleImg} alt="" className="title_img" />
                <p className="iphone_desc">{props.iphoneDesc}</p>
                <p className="price">{props.iphonePrice}</p>
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
