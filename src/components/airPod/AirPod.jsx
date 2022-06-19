import "./airpod.css";

const AirPod = (props) => {
  return (
    <div className="airPod_container">
      <div className={`airPod_hero_banner ${props.className}`}>
        {/* <video autoplay loop muted plays-inline>
          <source
            src="https://www.apple.com/105/media/us/airpods/2022/7052f60e-c8a4-4a32-b278-0d0348fbcd0a/anim/spatial/large_2x.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className={`airPod_banner_img ${props.className}`}>
          <div className="airPod_banner_img_wrapper">
            <img src={props.img1} alt="" className="airPod_img_1" />
            <img src={props.img2} alt="" className="airPod_img_2" />
          </div>

          <div className="airPod_banner_content">
            <div className="airPod_banner_content_wrapper">
              <div className="airPod_banner_content_top">
                <h1>
                  {props.modelTitle} <span>{props.pro}</span>
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
