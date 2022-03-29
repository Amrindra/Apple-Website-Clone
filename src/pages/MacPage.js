import "../styles/mac/MacPage.css";
import MacHeader from "../components/macComputer/MacHeader";
import MacBanner from "../components/macComputer/MacBanner";

const MacPage = () => {
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
          img="https://www.apple.com/v/mac/home/bl/images/overview/hero/macbook_pro_14_16__dmqm5vr9l7yq_large_2x.jpg"
        />
      </div>
    </div>
  );
};

export default MacPage;
