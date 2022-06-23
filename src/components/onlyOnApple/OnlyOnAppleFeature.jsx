import "./OnlyOnAppleFeature.scss";

const OnlyOnAppleFeature = () => {
  return (
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
  );
};

export default OnlyOnAppleFeature;
