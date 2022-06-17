import "./AccessoryCard.scss";

const AccessoryCard = () => {
  return (
    <div className="accessory_card">
      <div className="accessory_card_container">
        <div className="accessory_card_img">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6N3_FV532?wid=532&hei=582&fmt=png-alpha&.v=1651860910311"
            alt=""
          />
        </div>

        <div className="accessory_card_content">
          <p className="card_new">New</p>
          <p className="card_title">Pride Edition Nike Sport Loop</p>
          <p className="card_price">49.00$</p>
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
