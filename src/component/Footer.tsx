import React from "react";
import logo from "../assets/logo.png";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="section_gap footer-container">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="#">
                <img src={logo} alt="" className="logo" />
              </a>
              <p>
                <span>Sharecode.vn</span> là một cộng đồng "download và chia sẻ
                source code" cho tất cả những ai yêu thích, quan tâm đến lĩnh
                vực công nghệ thông tin và muốn tìm hiểu kỹ năng lập trình, ở
                đây bạn có thể tìm kiếm và download miễn phí hoặc có phí các
                source code, đồ án,... dùng để tham khảo nâng cao kiến thức lập
                trình trong học tập cũng như công việc hoặc sử dụng để phát
                triển.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 footer-item">
              <h4 className="">Về Chúng Tôi</h4>
              <ul className="list">
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Quy định chung</a>
                </li>
                <li>
                  <a href="#">Chính sách bán code</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 footer-item">
              <h4 className="">Hướng Dẫn</h4>
              <ul className="list ">
                <li>
                  <a href="#">Tải code về miễn phí</a>
                </li>
                <li>
                  <a href="#">Tải code có phí</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn nạp tiền</a>
                </li>
                <li>
                  <a href="#">Hỗ trợ kỹ thuật</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-item">
              <h4 className="">Liên Hệ</h4>
              <textarea
                cols={35}
                rows={3}
                placeholder="Nội dung liên hệ của bạn..."
              ></textarea>
              <p>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                &nbsp; KP6, Phường Linh Trung, TP Thủ Đức, TP. Hồ Chí Minh, Việt
                Nam.
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                &nbsp; +123456 7890
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                &nbsp; icancode@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex">
              <p className="col-lg-12 footer-text text-center">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
