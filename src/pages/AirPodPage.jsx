import AirPod from "../components/airPod/AirPod";
import AirPodHeader from "../components/airPod/AirPodsHeader";

const AirPodPage = () => {
  return (
    <div>
      <AirPodHeader />
      <AirPod
        img1="https://www.apple.com/v/airpods/r/images/overview/airpods_pro_left__bvanpj0ujnf6_medium_2x.png"
        img2="https://www.apple.com/v/airpods/r/images/overview/airpods_pro_right__fm0wwisa76em_large_2x.png"
        modelTitle="AirPods"
        pro="Pro"
        price="$299"
        className="airPod_pro"
      />

      <AirPod
        img1="https://www.apple.com/v/airpods/r/images/overview/airpods_max__f265q4g4ddym_large_2x.png"
        img2="https://www.apple.com/v/airpods/r/images/overview/airpods_max_logo__bdgdixidcqcy_large_2x.jpg"
        price="$299"
        className="airPod_max"
      />

      <AirPod
        img1="https://www.apple.com/v/airpods/r/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large_2x.png"
        img2="https://www.apple.com/v/airpods/r/images/overview/airpods_2ndgen_right__gahfggwvcx6q_medium_2x.png"
        modelTitle="AirPods"
        generation="2nd generation"
        price="$299"
        className="airPods_2nd_gen"
      />
    </div>
  );
};

export default AirPodPage;
