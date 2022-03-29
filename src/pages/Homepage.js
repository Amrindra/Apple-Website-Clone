import "../styles/Homepage.css";
import Banner from "../components/Banner";
import HomepageFeature from "../components/HomepageFeature";
import IpadAir from "../components/IpadAir";

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
          image="https://www.apple.com/v/home/an/images/heroes/tv-plus-oscar-coda/hero_coda__cv3jny7jpe6a_largetall.jpg"
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

        <IpadAir
          title="https://www.apple.com/v/home/an/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png"
          titleImage="https://www.apple.com/v/home/an/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png"
          desc="It's our largest display yet."
          img="https://www.apple.com/v/home/an/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_medium.jpg"
        />

        <HomepageFeature
          title="iPhone 13"
          icon="fa-brands fa-apple"
          desc="Your new super power."
          img="https://www.apple.com/v/home/an/images/promos/iphone-13/promo_iphone13_avail__frc36u35m0ii_large_2x.jpg"
        />

        <HomepageFeature
          title="WATCH"
          icon="fa-brands fa-apple"
          subtitle="SERIES 7"
          desc="It's our largest display yet."
          img="https://www.apple.com/v/home/an/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large_2x.jpg"
        />
        <HomepageFeature
          title="Card"
          icon="fa-brands fa-apple"
          desc="Get up to 3% Daily Cash back with every purchase"
          img="https://www.apple.com/v/home/an/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"
        />
      </div>
      {/* 
      <div className="homepage-tv-show-sections">
        <div className="tv-show-left">
          <div className="tvshow-top-title">
            <img
              src="https://www.apple.com/v/home/an/images/logos/apple-at-work-underdogs/promo_logo_aaw__dq7tgf4m5ieu_large.png"
              alt=""
            />
          </div>

          <div className="tvshow-bottom-title">
            <img
              src="https://www.apple.com/v/home/an/images/logos/apple-at-work-underdogs/promo_logo_efto__c391lzc975ua_large.png"
              alt=""
            />
          </div>
          <p className="tvshow-desc">
            Watch the film{" "}
            <span>
              <i className="fa-solid fa-circle-play"></i>
            </span>
          </p>
        </div>

        <div className="tv-show-right">
          <div className="tvshow-top-title">
            <img
              src="https://www.apple.com/v/home/an/images/logos/tv-plus/logo_light__cfvl40z2nzau_large.png"
              alt=""
              className="tvshow-top-title"
            />
          </div>

          <div className="tvshow-bottom-title">
            <img
              src="https://www.apple.com/v/home/an/images/logos/tv-plus-pachinko/promo_logo_pachinko__ec7gsyeb4uqa_large.png"
              alt=""
              className="tvshow-bottom-title"
            />
          </div>
          <p className="tvshow-desc tv-show-underline">
            Four generations. One destiny.
          </p>
          <p className="tvshow-desc ">
            Stream now{" "}
            <span>
              <i className="fa-solid fa-circle-play"></i>
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
