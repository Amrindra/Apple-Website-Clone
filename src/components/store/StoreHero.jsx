import "../../styles/Store/StoreHero.css";

const StoreHero = ({ storeHeroImg, storeHeroTitle }) => {
  return (
    <div className="store-hero-container">
      <img src={storeHeroImg} alt="" />
      <p className="store-title">{storeHeroTitle}</p>
    </div>
  );
};

export default StoreHero;
