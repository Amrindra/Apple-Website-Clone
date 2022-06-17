import "./AccessoryCard.scss";

const AccessoryCard = (props) => {
  return (
    <div className={`accessory_card ${props.className}`}>
      <div className="accessory_card_container">
        <div className="accessory_card_img">
          <img src={props.img} alt="" />
        </div>

        <div className={`accessory_card_content `}>
          <p className="card_new">New</p>
          <p className="card_title">{props.title}</p>
          <p className="card_price">{props.price}</p>
          <div className="card_color_options">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602059"
              alt=""
              className=""
            />
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602059"
              alt=""
              className=""
            />
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602059"
              alt=""
              className=""
            />
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602059"
              alt=""
              className=""
            />
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1645232602059"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryCard;
