import React from "react";
import "../styles/Guide.scss";
class Guide extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid services py-5">
          <div className="container text-center py-5">
            <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
              <h2 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
                Hướng Dẫn Mua Hàng
              </h2>
            </div>
            <div className="row g-5">
              <div
                className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="bg-light rounded p-5 services-item">
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="mb-4 rounded-circle services-inner-icon">
                      <i className="fa fa-spider fa-3x text-primary" />
                    </div>
                  </div>
                  <h4>Tải code có phí</h4>
                  <p className="fs-5">
                    Hướng dẫn chi tiết giúp bạn mua code có phí.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
              <div
                className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="bg-light rounded p-5 services-item">
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="mb-4 rounded-circle services-inner-icon">
                      <i className="fa fa-spider fa-3x text-primary" />
                    </div>
                  </div>
                  <h4>Tải code miễn phí</h4>
                  <p className="fs-5">
                    Hướng dẫn chi tiết giúp bạn tải code về miễn phí.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
              <div
                className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="bg-light rounded p-5 services-item">
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="mb-4 rounded-circle services-inner-icon">
                      <i className="fa fa-spider fa-3x text-primary" />
                    </div>
                  </div>
                  <h4 className="text-center">Nạp tiền</h4>
                  <p className="text-center fs-5">
                    Hướng dẫn cách bạn nạp tiền vào webb để mua code.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
              <div
                className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="bg-light rounded p-5 services-item">
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="mb-4 rounded-circle services-inner-icon">
                      <i className="fa fa-spider fa-3x text-primary" />
                    </div>
                  </div>
                  <h4 className="text-center">Chính sách bán code</h4>
                  <p className="text-center fs-5">
                    Mô tả chi tiết các chính sách về bán code của trang web.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
              <div
                className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="bg-light rounded p-5 services-item">
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="mb-4 rounded-circle services-inner-icon">
                      <i className="fa fa-spider fa-3x text-primary" />
                    </div>
                  </div>
                  <h4 className="text-center">Qui định</h4>
                  <p className="text-center fs-5">
                    Các qui định của trang web về việc mua và bán code.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
              <div
                className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="bg-light rounded p-5 services-item">
                  <div
                    className="d-flex"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="mb-4 rounded-circle services-inner-icon">
                      <i className="fa fa-spider fa-3x text-primary" />
                    </div>
                  </div>
                  <h4 className="text-center">Hỗ trợ kỹ thuật</h4>
                  <p className="text-center fs-5">
                    Hỗ trợ khách hàng về thông tin tác giả tư vấn tốt hơn.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp"
              data-wow-delay=".3s"
            >
              Xem Thêm
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Guide;
