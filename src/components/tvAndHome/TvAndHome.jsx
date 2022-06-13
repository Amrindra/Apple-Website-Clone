import "./TvAndHome.css";
import TvAndHomeHeader from "./TvAndHomeHeader";

const TvAndHome = () => {
  return (
    <div className="tvAndHome">
      <TvAndHomeHeader />

      <div className="tvAndHome_wrapper">
        <img
          className="apple_tv_banner_img"
          src="https://www.apple.com/v/tv-home/d/images/overview/hero_tv__d8nngabrofue_large.png"
          alt=""
        />

        <div className="tvAndHome_hero">
          <img
            src="https://www.apple.com/v/tv-home/d/images/overview/hero_homepod_appletv_lockup__ecxlvf764zu6_large.png"
            alt=""
          />
          <h1 className="tvAndHome_hero_title">The future hits home.</h1>
          <p className="tvAndHome_hero_desc">
            Simply connect your favorite devices and transform your house into a
            remarkably smart, convenient, and entertaining home. Control lights,
            locks, and thermostats with your iPhone — or just your voice. Play
            any song, in any room, from anywhere. And elevate movie night with
            theater-like picture and sound. All with the security and privacy of
            Apple.
          </p>
        </div>

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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvAndHome;
