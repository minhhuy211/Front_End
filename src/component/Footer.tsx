import React from "react";
import "../styles/Footer.scss";
import "../styles/style.scss";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="#">
            <img src={logo} alt="" className="footer-logo" />
          </a>
          <p>
            <span>I CAN CODE</span> ra đời với sứ mệnh trở thành một cộng đồng
            cho tất cả những ai yêu thích, quan tâm đến lĩnh vực công nghệ thông
            tin và muốn tìm hiểu kỹ năng lập trình, ở đây bạn có thể tìm kiếm và
            download miễn phí hoặc có phí các source code, đồ án, mã nguồn...
            dùng để tham khảo nâng cao kiến thức lập trình trong học tập cũng
            như công việc hoặc sử dụng để phát triển thêm những bộ code mới hay
            và chất lượng.
          </p>
          <div className="footer-social-icon">
            <FontAwesomeIcon
              icon={faFacebook}
              id="footer-icon"
              className="icon-Fb"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              id="footer-icon"
              className="icon-Youtube"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              id="footer-icon"
              className="icon-Tw"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              id="footer-icon"
              className="icon-Ln"
            />
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-center-one">
            <h2>Về chúng tôi</h2>
            <ul>
              <li>Giới thiệu</li>
              <li>Qui định chunh</li>
              <li>Chính sách bán code</li>
              <li>Bảo mật</li>
            </ul>
          </div>
          <div className="footer-center-two">
            <h2>Hướng dẫn</h2>
            <ul>
              <li>Tải code miễn phí</li>
              <li>Tải code có phí</li>
              <li>Hướng dẫn nạp tiền</li>
              <li>Hỗ trợ kĩ thuật</li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h2>Liên Hệ - Góp Ý</h2>
          <input type="text" placeholder="Nội dung & Liên hệ của bạn" />
          <button>Gửi nhanh</button>
          <p>Hotline : 038993556</p>
          <p>Email : icancode@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
