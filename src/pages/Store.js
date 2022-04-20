import StoreCard from "../components/store/StoreCard";
import StoreHero from "../components/store/StoreHero";
import "../styles/Store/Store.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Store = () => {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  return (
    <div className="store-container">
      <section className="store-introduction-and-shopping-help">
        <div className="introduction">
          <h3>
            Store. <span>The best way to buy the products you love.</span>
          </h3>
        </div>

        <div className="shoping-help-and-location">
          <div className="shopping-help">
            <div className="icon">
              <i className="fa-solid fa-user-tie fa-2xl"></i>
            </div>

            <div className="shopping-help-desc">
              <p>Need shopping help?</p>
              <nav>Ask a Specialist</nav>
            </div>
          </div>

          <div className="shopping-help">
            <div className="icon">
              <i className="fa-solid fa-location-pin fa-2xl"></i>
            </div>

            <div className="shopping-help-desc">
              <p>Visit an Apple Store</p>
              <nav>Find one near you {">"}</nav>
            </div>
          </div>
        </div>
      </section>

      <div className="slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={sliderLeft}
        />
        <section className="store-hero-section" id="slider">
          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490"
            storeHeroTitle="Mac"
          />

          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1630706116000"
            storeHeroTitle="iPhone"
          />

          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783381000"
            storeHeroTitle="iPad"
          />

          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=400&hei=260&fmt=png-alpha&.v=1645052537409"
            storeHeroTitle="Apple Watch"
          />
          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1633718741000"
            storeHeroTitle="AirPods"
          />
          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000"
            storeHeroTitle="AirTag"
          />
          <StoreHero
            storeHeroImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783378000"
            storeHeroTitle="Apple TV"
          />
        </section>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={sliderRight}
        />
      </div>

      <div className="card-introduction-title">
        <h3>
          The latest. <span>Take a look at what’s new, right now.</span>
        </h3>
      </div>

      <div className="slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={sliderLeft}
        />
        <section className="store-card-section" id="slider">
          <StoreCard
            cardTitle="IPHONE 13 PRO"
            cardDesc="Oh. So. Pro."
            cardPrice="Now in Alpine Green. From $999.00 or $41.62/mo. for 24 mo.*"
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645052290504"
          />

          <StoreCard
            cardTitle="MOTHER'S DAY"
            cardDesc="Discover gifts that will make Mom's year"
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-mothersdayfeature-202204?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1648062161957"
          />

          <StoreCard
            cardTitle="IPAD AIR"
            cardDesc="Light. Bright. Full of might."
            cardPrice="From $599 or $49.91/mo. for 12 mo."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374"
            className="card-ipad-air"
          />

          <StoreCard
            cardTitle="MAC STUDIO"
            cardDesc="Empower station."
            cardPrice="From $1999 or $166.58/mo. for 12 mon"
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-mac-studio-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645043848581"
          />

          {/* <StoreCard cardTitle="" cardDesc="" cardPrice="" /> */}
        </section>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={sliderRight}
        />
      </div>

      <div className="card-introduction-title">
        <h3>
          Do more with Apple products. <span>Here’s where the fun begins.</span>
        </h3>
      </div>

      <div className="slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={sliderLeft}
        />
        <section className="store-card-section" id="slider">
          <StoreCard
            cardTitle="WATCH AND LEARN"
            cardDesc="Join a Today at Apple virtual session."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-todayatapple-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1625788042000d"
          />

          <StoreCard
            cardDesc="Six apple services. One easy subcription"
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000"
          />

          <StoreCard
            cardDesc="Discover all the ways to use Apple Pay"
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202203?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1645052537753"
          />
        </section>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={sliderRight}
        />
      </div>

      <div className="card-introduction-title">
        <h3>
          Shop by group.
          <span>Get special pricing for students, businesses, and more.</span>
        </h3>
      </div>

      <div className="slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={sliderLeft}
        />
        <section className="store-card-section " id="slider">
          <StoreCard
            cardTitle="EDUCATION"
            cardDesc="Save on Mac or iPad with education pricing."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-edu-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627492399000"
          />

          <StoreCard
            cardTitle="BUSINESS"
            cardDesc="Six apple services. One easy subcription"
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-small-business-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627318784000"
            className="card-ipad-air"
          />

          <StoreCard
            cardTitle="GOVERNMENT"
            cardDesc="Special pricing is available for state, local, and federal agencies."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1632870676000"
          />

          <StoreCard
            cardTitle="GOVERNMENT"
            cardDesc="Special pricing is available for state, local, and federal agencies."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1632870676000"
          />
          <StoreCard
            cardTitle="GOVERNMENT"
            cardDesc="Special pricing is available for state, local, and federal agencies."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1632870676000"
          />
          <StoreCard
            cardTitle="GOVERNMENT"
            cardDesc="Special pricing is available for state, local, and federal agencies."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1632870676000"
          />
          <StoreCard
            cardTitle="GOVERNMENT"
            cardDesc="Special pricing is available for state, local, and federal agencies."
            cardImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1632870676000"
          />
        </section>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={sliderRight}
        />
      </div>
    </div>
  );
};

export default Store;
