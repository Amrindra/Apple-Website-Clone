import IphoneBanner from "../components/iPhone/IphoneBanner";
import IphoneHeader from "../components/iPhone/IphoneHeader";

const Iphone = () => {
  return (
    <div>
      <IphoneHeader />
      <IphoneBanner
        title="iPhone 13 Pro"
        desc="Oh. So. Pro"
        price="From $41.62/mo. for 24 mo. or $999 before trade-in"
        image="https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_largetall.jpg"
      />
    </div>
  );
};

export default Iphone;
