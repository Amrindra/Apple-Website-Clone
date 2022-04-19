import "../styles/Store/Store.css";

const Store = () => {
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
    </div>
  );
};

export default Store;
