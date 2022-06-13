import "./HeaderBook.css";

const HeaderBook = () => {
  return (
    <div className="header_book">
      <div className="header_book_wrapper">
        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipadpro_dark__175htbn6m76u_large.svg"
            alt=""
          />
          <p>iPad pro</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipadair_dark__gi1t1iqta1yu_large.svg"
            alt=""
          />
          <p>iPad Air</p>
          <p className="new">New</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipad_dark__fe8ocv9hktim_large.svg"
            alt=""
          />
          <p>iPad</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipadmini_dark__cdfcygd422uu_large.svg"
            alt=""
          />
          <p>iPad mini</p>
        </div>

        <div className={`header_book_items `}>
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipad_compare_dark__cxllw9w1tuy6_large.svg"
            alt=""
          />
          <p>Compare</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/apple_pencil_dark__c42qcvi9e802_large.svg"
            alt=""
          />
          <p>Apple Pencil</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/keyboard_dark__dtedyad0xnqu_large.svg"
            alt=""
          />
          <p>Keyboards</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/airpods_dark__ccoezo86z37m_large.svg"
            alt=""
          />
          <p>Airpod</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipad_acc_dark__bo0a4ftei9au_large.svg"
            alt=""
          />
          <p>Accessories</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/ipados_dark__emr7k8pfle4i_large.svg"
            alt=""
          />
          <p>iPadOS</p>
        </div>

        <div className="header_book_items">
          <img
            src="https://www.apple.com/v/ipad/home/bw/images/chapternav/shop_ipad_dark__ekfl60g78g4m_large.svg"
            alt=""
          />
          <p>Shop iPad</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBook;
