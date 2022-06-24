import "./OnlyOnApple.scss";
import OnlyOnAppleHeader from "./OnlyOnAppleHeader";
import Fade from "react-reveal/Fade";

const OnlyOnApple = () => {
  return (
    <div className="onlyOnApple">
      <OnlyOnAppleHeader />

      <div className="only_apple_intro">
        <div className="only_apple_intro_wrapper">
          <Fade bottom cascade>
            <h1>The best experiences.</h1>
          </Fade>
          <Fade bottom cascade>
            <h1>Only on Apple.</h1>
          </Fade>
          <Fade bottom cascade>
            <p>
              Get the most out of the devices you love with high‑quality content
              and services. Award‑winning series and films, amazing music in
              spatial audio, world-class workouts and meditations, trusted news
              publications, superfun games — even the ways you pay for things.
              And they’re only on Apple.
            </p>
          </Fade>
        </div>
      </div>

      <div className="only_apple_banner">
        <div className="only_apple_banner_wrapper">
          <img
            src="https://www.apple.com/v/services/e/images/services/overview/services/apple-one-banner/logo_apple_one__cftfcy53dtsi_large.png"
            alt=""
          />
          <p>Get up to six services in one subscription with Apple One.</p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default OnlyOnApple;
