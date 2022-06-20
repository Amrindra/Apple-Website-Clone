import Watch from "../components/watch/Watch";
import HeaderBook from "../components/headerBook/HeaderBook";

const WatchPage = () => {
  return (
    <div>
      <HeaderBook
        img1="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_nike_light__b7zt65jh0i76_large.svg"
        img2="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_se_light__c2mzuz6w15km_large.svg"
        img3="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_series_3_light__mmwjed73owia_large.svg"
        img4="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_nike_light__b7zt65jh0i76_large.svg"
        img5="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_hermes_light__danq731vuiy6_large.svg"
        img6="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_studio_light__btlmt8t0oe02_large.svg"
        img7="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_compare__b9nnoiqjkxki_large.svg"
        img8="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_bands__fyke1oo6sfyy_large.svg"
        img9="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_airpods__b481yj4nw0vm_large.svg"
        img10="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_accessories__bu98chbn5rea_large.svg"
        img11="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_fitness__gb78ob6kpiem_large.svg"
        img12="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_watch_os__bv24twycj3aq_large.svg"
        img13="https://www.apple.com/v/watch/aw/images/overview/icons/watch_nav_shop_watch_light__fkrdcz8nfwi2_large.svg"
        brandTitle="Apple Watch"
        model1="Series 7"
        model2="SE"
        model3="Series 3"
        model4="Nike"
        model5="Hermes"
        model6="Studio"
        compare="Compare"
        bands="Bands"
        airPods="AirPods"
        accessories="Accessories"
        appleFitness="Apple Fitness+"
        watch="watchOS"
        shopWatch="Shop Watch"
        className="watch_section"
      />
      <Watch />
    </div>
  );
};

export default WatchPage;
