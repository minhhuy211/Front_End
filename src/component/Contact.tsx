import React from "react";
import "../styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  render() {
    return (
      <>
        <section className="blog-banner-area" id="category">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>Liên Hệ</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Trang Chủ</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Liên Hệ Với Chúng Tôi
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="section-margin--small">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4 mb-4 mb-md-0">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                  </span>
                  <div className="media-body">
                    <h3>Đại Học Nông Lâm</h3>
                    <p>
                      KP6, Phường Linh Trung, TP Thủ Đức, TP. Hồ Chí Minh, Việt
                      Nam.
                    </p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                  </span>
                  <div className="media-body">
                    <h3>
                      <a href="">+123 456 7890</a>
                    </h3>
                    <p>Từ 8:00 đến 17:00 Thứ 2 tới Thứ 7</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                  <div className="media-body">
                    <h3>
                      <a href="mailto:support@colorlib.com">
                        icancode@gmail.com
                      </a>
                    </h3>
                    <p>
                      Gửi phản hồi của bạn về chúng tôi bất cứ thời gian nào.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-8">
                <form
                  action="#/"
                  className="form-contact contact_form"
                  method="post"
                  id="contactForm"
                >
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Tên của bạn"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Địa chỉ email của bạn"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                          placeholder="Nhập chủ đề"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="form-group">
                        <textarea
                          className="form-control different-control w-100"
                          name="message"
                          id="message"
                          cols={30}
                          rows={5}
                          placeholder="Nội dung phản hồi"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-center text-md-right mt-3">
                    <button
                      type="submit"
                      className="button button--active button-contactForm"
                    >
                      Gửi Phản Hồi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        s
      </>
    );
  }
}

export default Contact;
