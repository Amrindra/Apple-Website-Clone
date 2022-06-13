import "../styles/DevicesHeader.css";

const DevicesHeader = (props) => {
  return (
    <div className={`devices-header ${props.classNameForNav}`}>
      <div className="charpter-nav-wrapper">
        <div className="devices-header-items">
          <img src={props.iphone13ProImage || props.macbookAirImage} alt="" />
          <p>{props.macbookAir || props.iphone13Pro}</p>
          <p className="new">{props.iphone13ProDesc}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.macbookProImage || props.iphone13Image} alt="" />
          <p>{props.macbookPro || props.iphone13}</p>
          <p className="new">{props.iphone13Desc}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.iMacImage || props.iphoneSEImage} alt="" />
          <p>{props.iMac || props.iphoneSE}</p>
          <p className="new">{props.iphoneSEDesc}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.macMiniImage || props.iphone12Image} alt="" />
          <p>{props.macMini || props.iphone12}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.macStudioImage || props.iphone11Image} alt="" />
          <p>{props.macStudio || props.iphone11}</p>
          <p className="new">{props.macStudioDesc}</p>
        </div>

        <div className={`devices-header-items ${props.classNameForItem}`}>
          <img src={props.macProImage} alt="" />
          <p>{props.macPro}</p>
        </div>

        <div className={`devices-header-items `}>
          <img src={props.compareImage} alt="" />
          <p>{props.compare}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.displayImage || props.airPodsImage} alt="" />
          <p>{props.display || props.airPods}</p>
          <p className="new">{props.displayDesc}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.airTagImage} alt="" />
          <p>{props.airTag}</p>
        </div>

        <div className="devices-header-items">
          <img
            src={props.accessoriesImage || props.iphoneAccessoriesImage}
            alt=""
          />
          <p>{props.accessories || props.iphoneAccessories}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.appleCardImage} alt="" />
          <p>{props.appleCard}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.macOSImage || props.iphoneiOSImage} alt="" />
          <p>{props.macOSName || props.iphoneiOS}</p>
        </div>

        <div className="devices-header-items">
          <img src={props.shopImage || props.iphoneShopImage} alt="" />
          <p>{props.shop || props.iphoneShop}</p>
        </div>
      </div>
    </div>
  );
};

export default DevicesHeader;
