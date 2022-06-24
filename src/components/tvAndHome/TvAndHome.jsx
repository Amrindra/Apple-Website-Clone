import "./TvAndHome.css";
import TvAndHomeHeader from "./TvAndHomeHeader";
import Fade from "react-reveal/Fade";

const TvAndHome = () => {
  return (
    <div className="tvAndHome">
      <TvAndHomeHeader />

      <div className="tvAndHome_wrapper">
        <Fade top cascade>
          <img
            className="apple_tv_banner_img"
            src="https://www.apple.com/v/tv-home/d/images/overview/hero_tv__d8nngabrofue_large.png"
            alt=""
          />
        </Fade>

        <div className="tvAndHome_hero">
          <Fade top cascade>
            <img
              src="https://www.apple.com/v/tv-home/d/images/overview/hero_homepod_appletv_lockup__ecxlvf764zu6_large.png"
              alt=""
            />
          </Fade>

          <Fade top cascade>
            <h1 className="tvAndHome_hero_title">The future hits home.</h1>
            <p className="tvAndHome_hero_desc">
              Simply connect your favorite devices and transform your house into
              a remarkably smart, convenient, and entertaining home. Control
              lights, locks, and thermostats with your iPhone — or just your
              voice. Play any song, in any room, from anywhere. And elevate
              movie night with theater-like picture and sound. All with the
              security and privacy of Apple.
            </p>
          </Fade>
        </div>

        <div className="tvAndHome_card_container">
          <div className="tvAndHome_card_wrapper">
            <div className="tvAndHome_card_left">
              <h3 className="card_left_title">HomePod mini</h3>
              <h1 className="card_left_desc">
                Room-filling sound in every room.
              </h1>
              <p className="card_left_price">$99</p>

              <div className="button_learn_more">
                <button>Buy</button>
                <span>Learn more {">"} </span>
              </div>
              <img
                src="https://www.apple.com/v/tv-home/d/images/overview/room_filling_sound__zagu3551kwyi_large.jpg"
                alt=""
                className="home_img"
              />
            </div>

            <div className="tvAndHome_card_right">
              <img
                src="https://www.apple.com/v/tv-home/d/images/overview/apple_tv_4k_logo__vyjj7uki3tui_large.png"
                alt=""
              />
              <h1 className="card_right_desc">
                A higher definition of home entertainment.
              </h1>
              <p className="card_right_price">Starting $99</p>

              <div className="button_learn_more">
                <button>Buy</button>
                <span>Learn more {">"} </span>
              </div>
              <img
                src="https://www.apple.com/v/tv-home/d/images/overview/higher_definition__hfivribdc3ue_large.jpg"
                alt=""
                className="home_img"
              />
            </div>
          </div>

          <div className="tvAndHome_card_home_wrapper">
            <div className="tvAndHome_card_home">
              <div className="tvAndHome_card_home_left">
                <img
                  className="tvAndHome_card_home_img"
                  src="https://www.apple.com/v/tv-home/d/images/overview/your_home_at_your_command__b1w2tomy2wia_large.jpg"
                  alt=""
                />
              </div>

              <div className="tvAndHome_card_home_right">
                <img
                  src="https://www.apple.com/v/tv-home/d/images/overview/home_icon__9u57pp0qahea_large.png"
                  alt=""
                />
                <p>Home</p>
                <h1>Your home at your command.</h1>
                <p className="learn_more">Learn more {">"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvAndHome;
