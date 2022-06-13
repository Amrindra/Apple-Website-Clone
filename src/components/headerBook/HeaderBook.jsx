import "./HeaderBook.css";

const HeaderBook = (props) => {
  return (
    <div className={`header_book ${props.className}`}>
      <div className="header_book_wrapper">
        <div className="header_book_items">
          <img src={props.img1} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.Series7}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img2} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.SeriesSE}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img3} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.Series3}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img4} alt="" />
          <p>{props.brandTitle}i</p>
          <p>{props.SeriesNike}</p>
        </div>

        <div className={`header_book_items `}>
          <img src={props.img5} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.SeriesHermes}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img6} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.SeriesStudio}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img7} alt="" />
          <p></p>
        </div>

        <div className="header_book_items">
          <img src={props.img8} alt="" />
          <p>Airpod</p>
        </div>

        <div className="header_book_items">
          <img src={props.img9} alt="" />
          <p>Accessories</p>
        </div>

        <div className="header_book_items">
          <img src={props.img10} alt="" />
          <p>iPadOS</p>
        </div>

        <div className="header_book_items">
          <img src={props.img11} alt="" />
          <p>Shop iPad</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBook;
