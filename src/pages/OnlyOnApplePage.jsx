import "../styles/OnlyOnApplePage.css";
import OnlyOnApple from "../components/onlyOnApple/OnlyOnApple";
import OnlyOnAppleFeature from "../components/onlyOnApple/OnlyOnAppleFeature";

const OnlyOnApplePage = () => {
  return (
    <div>
      <OnlyOnApple />

      <section className="only_on_apple_feature_section">
        <OnlyOnAppleFeature />
        <OnlyOnAppleFeature />
        <OnlyOnAppleFeature />
        <OnlyOnAppleFeature />
        <OnlyOnAppleFeature />
        <OnlyOnAppleFeature />
        <OnlyOnAppleFeature />
      </section>
    </div>
  );
};

export default OnlyOnApplePage;
