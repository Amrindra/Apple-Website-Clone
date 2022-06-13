import IphoneBanner from "../components/iPhone/IphoneBanner";
import IphoneHeader from "../components/iPhone/IphoneHeader";
import Divider from "../components/Divider";

const Iphone = () => {
  return (
    <div>
      <IphoneHeader />
      <IphoneBanner
        title="iPhone 13 Pro"
        desc="Oh. So. Pro"
        price="From $41.62/mo. for 24 mo. or $999 before trade-in"
        image="https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_largetall.jpg"
        className="iphone-13-pro-banner"
      />
      <Divider />

      <IphoneBanner
        title="iPhone 13"
        desc="Your new superpower."
        price="From $29.12/mo. for 24 mo. or $699 before trade‑in1 **"
        image="https://www.apple.com/v/iphone/home/bf/images/overview/hero/iphone_13_hero__c7g09yt0mjcm_large.png"
        className="iphone-13-banner"
      />
    </div>
  );
};

export default Iphone;
