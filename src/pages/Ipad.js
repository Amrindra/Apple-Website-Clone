import IpadChapterNav from "../components/ipad/IpadChapterNav";
import IpadBanner from "../components/ipad/IpadBanner";
import "../styles/iPad/Ipad.css";
import IpadFeature from "../components/ipad/IpadFeature";
import Divider from "../components/Divider";

const Ipad = () => {
  return (
    <div className="ipad-container">
      <IpadChapterNav />
      <IpadBanner
        current="New"
        model="iPad"
        logoImage="https://www.apple.com/v/ipad/home/bw/images/overview/hero/air_script__coyet2g7gkia_large.png"
        desc1="Light.Bright."
        desc2="Full of might."
        price="From $599"
        modelImage="https://www.apple.com/v/ipad/home/bw/images/overview/hero/ipad_air__d794tkovmk02_large.jpg"
      />

      <Divider />

      <IpadBanner
        model="iPad Pro"
        desc1="The ultimate"
        desc2="iPad experience"
        price="From $799"
        className="ipad-pro-container"
      />

      <Divider />

      <IpadBanner
        model="iPad"
        desc1="Delightfully capable."
        desc2="Surprisingly affordable."
        price="From $329"
        modelImage="https://www.apple.com/v/ipad/home/bw/images/overview/hero/ipad_10_2__7yowwyyrbmaa_small_2x.jpg"
        className="regular-ipad-conatiner"
      />

      <Divider />

      <IpadBanner
        model="iPad"
        logoImage="https://www.apple.com/v/ipad/home/bw/images/overview/hero/mini_script__bjahejz6luqa_small_2x.png"
        desc1="The ultimate"
        desc2="iPad experience"
        price="From $499"
        modelImage="https://www.apple.com/v/ipad/home/bw/images/overview/hero/ipad_mini__dn6g8b0hw8om_small_2x.jpg"
        className="ipad-mini-container"
      />
    </div>
  );
};

export default Ipad;
