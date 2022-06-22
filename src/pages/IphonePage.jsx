import "../styles/iPhone/IphonePage.css";
import IphoneBanner from "../components/iPhone/IphoneBanner";
import IphoneHeader from "../components/iPhone/IphoneHeader";
import Iphone from "../components/iPhone/Iphone";
import Divider from "../components/Divider";

const IphonePage = () => {
  return (
    <div>
      <IphoneHeader />
      <IphoneBanner
        title="iPhone 13 Pro"
        desc="Oh. So. Pro"
        price="From $41.62/mo. for 24 mo. or $999 before trade-in"
        image="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large.png"
        className="iphone-13-pro-banner"
      />
      <Divider />

      <IphoneBanner
        title="iPhone 13"
        desc="Your new superpower."
        price="From $29.12/mo. for 24 mo. or $699 before trade‑in1 **"
        image="https://www.apple.com/v/iphone/home/bf/images/overview/hero/iphone_13_hero__c7g09yt0mjcm_large.png"
        className="iphone_13_banner"
      />

      <Divider />

      <IphoneBanner
        title="iPhone SE"
        desc="Love the power. Love the price."
        price="From $17.87/mo. for 24 mo. or $429 before trade‑in1"
        image="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_se_hero__gd586pazxqqa_large.jpg"
        className="iphone_se_banner"
      />

      <section className="iphone_comparing_section">
        <h2>Which iPhone is right for you? </h2>
        <div className="iphone_comparing_section_wrapper">
          <Iphone
            iphoneImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large_2x.jpg"
            iphoneColorOption="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13__cr1wl9d1b5aq_large_2x.png"
            iphoneTitleImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/logo_iphone_13_pro__cweli4ej4gk2_large_2x.png"
            iphoneDesc="The ultimate iPhone."
            iphonePrice="From $999"
          />
          <Iphone
            iphoneImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large_2x.jpg"
            iphoneColorOption="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13__cr1wl9d1b5aq_medium.png"
            iphoneTitleImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/logo_iphone_13__2eze52plyky6_large_2x.png"
            iphoneDesc="A total powerhouse."
            iphonePrice="From $699**"
          />
          <Iphone
            iphoneImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large_2x.jpg"
            iphoneColorOption="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13__cr1wl9d1b5aq_medium.png"
            iphoneTitleImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/logo_iphone_se__m265le0wq0q6_large_2x.png"
            iphoneDesc="Serious power."
            iphonePrice="From $429"
          />
          <Iphone
            iphoneImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/compare_iphone_12__dz3sv9lzdzu6_large_2x.jpg"
            iphoneColorOption="https://www.apple.com/v/iphone/home/bh/images/overview/compare/swatch_iphone_13__cr1wl9d1b5aq_medium.png"
            iphoneTitleImg="https://www.apple.com/v/iphone/home/bh/images/overview/compare/logo_iphone_12__cctwzbt7tsmq_large_2x.png"
            iphoneDesc="As amazing as ever."
            iphonePrice="From $599**"
          />
        </div>
      </section>
    </div>
  );
};

export default IphonePage;
