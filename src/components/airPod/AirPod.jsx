import "./airpod.css";
import AirPodHeader from "./AirPodsHeader";

const AirPod = () => {
  return (
    <div className="airPod_container">
      <AirPodHeader />

      <div className="airPod_hero_banner">
        {/* <video autoplay loop muted plays-inline>
          <source
            src="https://www.apple.com/105/media/us/airpods/2022/7052f60e-c8a4-4a32-b278-0d0348fbcd0a/anim/spatial/large_2x.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="airPod_banner_img">
          <div className="airPod_banner_img_wrapper">
            <img
              src="https://www.apple.com/v/airpods/r/images/overview/airpods_pro_left__bvanpj0ujnf6_medium_2x.png"
              alt=""
            />
            <img
              src="https://www.apple.com/v/airpods/r/images/overview/airpods_pro_right__fm0wwisa76em_large_2x.png"
              alt=""
            />
          </div>

          <div className="airPod_banner_content">
            <div className="airPod_banner_content_wrapper">
              <div className="airPod_banner_content_top">
                <h1>
                  AirPods <span>Pro</span>
                </h1>
                <p>$269</p>
              </div>

              <div className="airPod_banner_content_bottom">
                <button>Buy</button>
                <p>Learn more {">"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirPod;
