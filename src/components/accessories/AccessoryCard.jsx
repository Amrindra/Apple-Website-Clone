import "./AccessoryCard.scss";

const AccessoryCard = (props) => {
  return (
    <div className={`accessory_card ${props.className}`}>
      <div className="accessory_card_container">
        <div className="accessory_card_img">
          <img src={props.img} alt="" />
        </div>

        <div className={`accessory_card_content`}>
          <p className="card_new">New</p>
          <p className="card_title">{props.title}</p>
          <p className="card_price">{props.price}</p>
          <div className={`card_color_options`}>
            <img src={props.optionImg1} alt="" />
            <img src={props.optionImg2} alt="" />
            <img src={props.optionImg3} alt="" />
            <img src={props.optionImg4} alt="" />
            <img src={props.optionImg5} alt="" />
            <img src={props.optionImg6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryCard;
