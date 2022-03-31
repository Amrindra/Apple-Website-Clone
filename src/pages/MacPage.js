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
        <div className="mac-comparing-buttons">
          <button
            className="notebook-btn"
            onClick={() => setShowComputer(true)}
          >
            Notebook
          </button>
          <button onClick={() => setShowComputer(!showComputer)}>
            Desktop
          </button>
          <div className="mac-comparing-unerline"></div>
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
            <MacDesktop />
          )}
        </div>
      </div>
    </div>
  );
};

export default MacPage;
