import "../styles/mac/MacPage.css";
import MacHeader from "../components/macComputer/MacHeader";
import MacBanner from "../components/macComputer/MacBanner";
import { useState } from "react";
import MacNotebook from "../components/macComputer/MacNotebook";
import MacDesktop from "../components/macComputer/MacDesktop";

const MacPage = () => {
  const [showComputer, setShowComputer] = useState(true);

  return (
    <div className="mac-page">
      <MacHeader />

      <div className="mac-banner-sections">
        <MacBanner
          generation="New"
          model="Mac Studio"
          desc="Empower station."
          price="From $1999"
          img="https://www.apple.com/v/mac/home/bl/images/overview/hero/mac_studio__c2wojtx43pw2_medium_2x.jpg"
        />
        <div className="underline" />

        <MacBanner
          generation="New"
          model="Studio Display"
          desc="A sight to be bold."
          price="From $1599"
          img="https://www.apple.com/v/mac/home/bl/images/overview/hero/studio_display__cn9qj5umkwya_large_2x.jpg"
        />
        <div className="underline"></div>

        <MacBanner
          model="MacBook Pro"
          desc="Supercharged for pros."
          price="From $1999"
          img="https://www.apple.com/v/mac/home/bl/images/overview/hero/macbook_pro_14_16__dmqm5vr9l7yq_large.jpg"
        />
      </div>

      <div className="mac-comparing-wrapper">
        <h3 className="mac-comparing-title">Which Mac is right for you?</h3>
        <div className="mac-comparing-spans">
          <span
            className="notebook-btn"
            onClick={() => setShowComputer(true)}
            style={{ color: showComputer ? "red" : "black" }}
          >
            Notebook
          </span>
          <span
            onClick={() => setShowComputer(!showComputer)}
            style={{ color: showComputer ? "black" : "red" }}
          >
            Desktop
          </span>
        </div>

        <div className="mac-compare-section">
          {showComputer ? (
            <>
              <MacNotebook
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_mba__fchj615oz0yi_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png"
                price="From $999"
                macTitle="MacBook Air"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large_2x.png"
                chipTitle="Apple M1 chip"
                cpuTitle="8-core"
                gpuLevel="Up to"
                gpuTitle="8-Core"
                ramMemoryDesc="Up to 16GB"
                storageTitle="2TB"
                retinaDisplayTitle="13.3"
                retinaDisplayDesc="Retina display"
                batteryDesc="Up to 18 hours battery life"
                facetimeCameraDesc="720p Facetime HD camera"
                weightTitle="2.8lb."
                touchIDImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large_2x.png"
                touchIdDesc="Touch ID"
              />
              <MacNotebook
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_mbp13__euj5z15300om_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_two_colors_mac_mini__ftd28sgtl52e_large.png"
                price="From $1299"
                macTitle="MacBook Air"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large_2x.png"
                chipTitle="Apple M1 chip"
                cpuTitle="8-core"
                gpuLevel="Up to"
                gpuTitle="8-Core"
                ramMemoryDesc="Up to 16GB"
                storageTitle="2TB"
                retinaDisplayTitle="13.3"
                retinaDisplayDesc="Retina display"
                batteryDesc="Up to 20 hours battery life"
                facetimeCameraDesc="720p Facetime HD camera"
                weightTitle="2.8lb."
                touchIDImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_touch_id_touch_bar__e6rwp5pfboae_large_2x.png"
                touchIdDesc="Touch Bar and Touch ID"
              />
              <MacNotebook
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_mbp14_and_16__f2dhysusb5im_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_two_colors_mac_mini__ftd28sgtl52e_large.png"
                price="From $1999"
                macTitle="MacBook Air"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_m1_pro_max__d1toavnfl1m6_large_2x.png"
                chipTitle="Apple M1 Pro chip or Apple M1 Max chip"
                cpuTitle="8-core"
                gpuLevel="Up to"
                gpuTitle="32-Core"
                ramMemoryDesc="Up to 64GB"
                storageTitle="8TB"
                retinaDisplayTitle="14.2 or 16.2"
                retinaDisplayDesc="Retina display"
                batteryDesc="Up to 21 hours battery life"
                facetimeCameraDesc="720p Facetime HD camera"
                weightTitle="3.5 lb. or 4.7 lb."
                touchIDImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large_2x.png"
                touchIdDesc="Touch ID"
                className="pro-max-chip"
              />
            </>
          ) : (
            <>
              <MacDesktop
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_imac24__bdgus6d1xqb6_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_multicolor__ese4oyi8w4mu_large.png"
                desktopTitle="iMac 24"
                price="From $1999"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large_2x.png"
                chipTitle="Apple M1 chip"
                cpuTitle="8-core"
                gpuLevel="Up to"
                gpuTitle="8-core"
                gpuDesc="GPU"
                ramMemoryDesc="Up to 16GB unified memory For increased performance and power efficiency"
                storageTitle="2TB"
                retinaDisplayTitle="4.5k"
                retinaDisplayDesc="Retina display"
                facetimeImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_camera__dlxow9r3leie_large_2x.png"
                facetimeCameraDesc="1080p FaceTime HD camera With the image signal processor of M1 for drastically improved performance"
                touchIDImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_imac24_keyboard__dgffd78l4dsi_large.png"
                touchIdDesc="Configurable with Magic Keyboard with Touch ID and Numeric Keypad"
                className=""
              />
              <MacDesktop
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_macmini__b77zzeep1s6a_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_two_colors_mac_mini__ftd28sgtl52e_large.png"
                price="From $1999"
                desktopTitle="Mac mini"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large_2x.png"
                chipTitle="Apple M1 chip Also available with Intel Core i5 or i7 processor"
                cpuTitle="8-core"
                gpuLevel="Up to"
                gpuTitle="8-core"
                gpuDesc="GPU"
                ramMemoryDesc="Up to 16GB unified memory For increased performance and power efficiency"
                storageTitle="2TB"
                retinaDisplayTitle="---"
                facetimeCameraDesc="---"
                touchIdDesc="---"
                className=""
              />
              <MacDesktop
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_macstudio__dg371ccau70i_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_one_color__fk3qx0i2y96y_large.png"
                price="From $1999"
                desktopTitle="MacBook Air"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_m1_max_ultra__b1fqr4b8b1o2_large.png"
                chipTitle="Apple M1 Pro chip or Apple M1 Max chip"
                cpuTitle="20-core"
                gpuLevel="Up to"
                gpuTitle="64-core"
                gpuDesc="GPU"
                ramMemoryDesc="Up to 16GB unified memory For increased performance and power efficiency"
                storageTitle="8TB"
                retinaDisplayTitle="---"
                facetimeCameraDesc="---"
                touchIdDesc="---"
                className="desktop-twin-chip"
              />
              <MacDesktop
                computerImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_macpro__cj3i514iwpua_large.png"
                colorOptionImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_swatches_one_color__fk3qx0i2y96y_large.png"
                price="From $1999"
                desktopTitle="MacBook Air"
                chipImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_intel__fmgvvgs5jy2y_large.png"
                chipTitle="Apple M1 Pro chip or Apple M1 Max chip"
                cpuTitle="28-core"
                gpuLevel="Up to"
                gpuTitle="AMD"
                gpuDesc="GPU"
                ramMemoryDesc="Up to 16GB unified memory For increased performance and power efficiency"
                storageTitle="8TB"
                retinaDisplayTitle="---"
                facetimeCameraDesc="---"
                touchIDImage="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_icon_keyboard__gkxt65itjamq_large.png"
                touchIdDesc="Magic Keyboard with Numeric Keypad"
                className="desktop-keyboard"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MacPage;
