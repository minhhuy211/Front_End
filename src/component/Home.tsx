import React from "react";
import banner from "../assets/banner.jpg";
import "../styles/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFile,
  faMoneyCheck,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
class Home extends React.Component {
  render() {
    return (
      <>
        <section className="hero-banner">
          <div className="container">
            <div className="row no-gutters align-items-center pt-60px">
              <div className="col-5 d-none d-sm-block">
                <div className="hero-banner__img">
                  <img className="img-fluid" src={banner} alt="" />
                </div>
              </div>
              <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                <div className="hero-banner__content">
                  <h1>Thư Viện Source Code Đa Dạng</h1>
                  <p>
                    Với số lượng source code được rất nhiều thành viên chia sẻ
                    trên ICanCode.vn, hy vọng sẽ giúp ích được nhiều cho mọi
                    người. Nếu như có các code khác hay và chất lượng, các bạn
                    có thể đăng lên chia sẻ trên ICanCode.vn. Vừa là có thể kiếm
                    thêm chút thu nhập, vừa có thể tạo thêm giá trị cộng đồng.
                  </p>
                  <a className="button button-hero" href="#">
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nav-inf">
          <div className="nav-inf-list">
            <div className="nav-inf-item">
              <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
              <div className="nav-inf-res">
                <h4>Code phong phú</h4>
                <p>Đầy đủ các thể loại...</p>
              </div>
            </div>
            <div className="nav-inf-item">
              <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              <div className="nav-inf-res">
                <h4>Code Chất Lượng</h4>
                <p>Cam kết hổ trợ và liên hệ</p>
              </div>
            </div>
            <div className="nav-inf-item">
              <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
              <div className="nav-inf-res">
                <h4>Hỗ trợ 24/7</h4>
                <p>Giao dịch và download code</p>
              </div>
            </div>
            <div className="nav-inf-item">
              <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon>
              <div className="nav-inf-res">
                <h4>Thanh Toán</h4>
                <p>Thanh toán đảm bảo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-margin calc-60px">
          <div className="container">
            <div className="section-intro pb-60px">
              <h2>SOURCE CODE</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product4.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Room Flash Light</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product5.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Man Office Bag</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product6.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Charging Car</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-margin calc-60px">
          <div className="container">
            <div className="section-intro pb-60px">
              <h2>WEBSITE NỔI BẬT</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product4.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Room Flash Light</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product5.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Man Office Bag</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product6.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Charging Car</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-margin calc-60px">
          <div className="container">
            <div className="section-intro pb-60px">
              <h2>PHẦN MỀM - ỨNG DỤNG NỔI BẬT</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product4.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Room Flash Light</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product5.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Man Office Bag</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product6.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Charging Car</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-margin calc-60px">
          <div className="container">
            <div className="section-intro pb-60px">
              <h2>GAME NỔI BẬT</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product4.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Room Flash Light</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product5.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Man Office Bag</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    {/* <img className="card-img" src="img/product/product6.png" alt=""> */}
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart"></i>
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Charging Car</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
