import "../styles/Homepage.css";
import Banner from "../components/Banner";
import HomepageFeature from "../components/HomepageFeature";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="banner-sections">
        <Banner
          title="iPhone 13 Pro"
          desc="Oh. So. Pro."
          image="https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_largetall.jpg"
        />

        <Banner
          text="The new"
          title="iPhone SE"
          desc="Love the power. Love the price."
          image="https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_largetall.jpg"
        />

        <Banner
          title="iPad Air"
          desc="Light. Bright. Full of bright"
          image="https://www.apple.com/v/home/an/images/heroes/ipad-air/hero_ipadair_avail__dsqv5nn0tpsi_large_2x.jpg"
          className="banner-ipad-air"
        />
      </div>

      <div className="feature-sections">
        <HomepageFeature
          title="Studio Display"
          desc="A sight to be bold."
          img="https://www.apple.com/v/home/an/images/promos/studio-display/promo_studiodisplay_avail__d1cx9j73ooq6_large_2x.jpg"
        />
        <HomepageFeature
          title="Mac Studio"
          desc="Empower station"
          img="https://www.apple.com/v/home/an/images/promos/mac-studio/promo_macstudio_avail__byhwkp0o4gty_large_2x.jpg"
        />
        <HomepageFeature
          title="iPhone 3"
          desc="Your new super power."
          img="https://www.apple.com/v/home/an/images/promos/iphone-13/promo_iphone13_avail__frc36u35m0ii_large_2x.jpg"
        />
        <HomepageFeature
          title="WATCH"
          subtitle="SERIES 7"
          desc="It's our largest display yet."
          img="https://www.apple.com/v/home/an/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large_2x.jpg"
        />
      </div>
    </div>
  );
};

export default Homepage;
