import IpadChapterNav from "../components/ipad/IpadChapterNav";
import IpadBanner from "../components/ipad/IpadBanner";
import "../styles/iPad/Ipad.css";

const Ipad = () => {
  return (
    <div>
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

      <IpadBanner
        model="iPad Pro"
        desc1="The ultimate"
        desc2="iPad experience"
        price="From $799"
        modelImage="https://www.apple.com/v/ipad/home/bw/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_small.jpg"
        className="ipad-pro-container"
      />
    </div>
  );
};

export default Ipad;
