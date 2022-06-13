import "../../styles/iPhone/IphoneHeader.css";
import DevicesHeader from "../DevicesHeader";
import IphoneBanner from "./IphoneBanner";

const IphoneHeader = () => {
  return (
    <div className="iphone-container">
      <DevicesHeader
        iphone13ProImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg"
        iphone13Pro="iPhone 13 Pro"
        iphone13ProDesc="New"
        iphone13Image="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_13_light__ewo3e0sf67o2_large.svg"
        iphone13="iPhone 13"
        iphone13Desc="New"
        iphoneSEImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg"
        iphoneSE="iPhone SE"
        iphoneSEDesc="New"
        iphone12Image="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_12_light__cxh2ll1zwpw2_large.svg"
        iphone12="iPhone 12"
        iphone11Image="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_11_light__b9p04p2r2vqu_large.svg"
        iphone11="iPhone 11"
        compareImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg"
        compare="Compare"
        airPodsImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/airpods_light__8oj157p2476a_large.svg"
        airPods="AirPods"
        airTagImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/airtag_light__cb2bmnv6aoeu_large.svg"
        airTag="AirTag"
        iphoneAccessoriesImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg"
        iphoneAccessories="Accessories"
        appleCardImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_apple_card_light__dtut839e76c2_large.svg"
        appleCard="Apple Card"
        iphoneiOSImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/iphone_ios_light__b8s4ws8o77iq_large.svg"
        iphoneiOS="iOS 15"
        iphoneShopImage="https://www.apple.com/v/iphone/home/bf/images/chapternav/shop_iphone_light__b2toggskllle_large.svg"
        iphoneShop="Shop iPhone"
        classNameForNav="iphoneNav"
        classNameForItem="disable-header"
      />
    </div>
  );
};

export default IphoneHeader;
