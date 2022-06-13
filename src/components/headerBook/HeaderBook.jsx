import "./HeaderBook.css";

const HeaderBook = (props) => {
  return (
    <div className={`header_book ${props.className}`}>
      <div className="header_book_wrapper">
        <div className="header_book_items">
          <img src={props.img1} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.model1}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img2} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.model2}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img3} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.model3}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img4} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.model4}</p>
        </div>

        <div className={`header_book_items `}>
          <img src={props.img5} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.model5}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img6} alt="" />
          <p>{props.brandTitle}</p>
          <p>{props.model6}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img7} alt="" />
          <p>{props.compare}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img8} alt="" />
          <p>{props.bands}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img9} alt="" />
          <p>{props.accessories}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img10} alt="" />
          <p>{props.appleFitness}</p>
        </div>

        <div className="header_book_items">
          <img src={props.img11} alt="" />
          <p>{props.shopWatch}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBook;
