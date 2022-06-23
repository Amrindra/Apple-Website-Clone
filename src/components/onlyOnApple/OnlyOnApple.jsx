import "./OnlyOnApple.scss";
import OnlyOnAppleHeader from "./OnlyOnAppleHeader";
import Fade from "react-reveal/Fade";
import { Player } from "video-react";

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

      <div className="only_apple_music_feature">
        <div className="only_apple_music_feature">
          <div className="only_apple_music_feature_content">
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/77/c8/8b/77c88b73-ca42-55b0-4d6c-c04870421ccf/e11f10c8-9e13-46ff-a3b0-ad436724b4a1.png/234x234SC.DN01.jpg?l=en-US"
              alt=""
            />
            <p>today hits music</p>
            <p>Apple Music</p>
          </div>
          <div className="only_apple_music_feature_button">
            <button>Listen Now</button>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyOnApple;
