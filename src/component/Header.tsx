import React, { useState } from "react";
// import "../asset/style.css";
import logo from "../assets/logo.png";
import "../styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [header, setHeader] = useState("home");

  return (
    <div className="header-area">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="#">
            <img src={logo} alt="" className="logo" />
          </a>
          <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
            <li
              onClick={() => setHeader("home")}
              className={header === "home" ? "active" : ""}
            >
              Trang Chủ
            </li>
            <li
              onClick={() => setHeader("products")}
              className={header === "products" ? "active" : ""}
            >
              Code Tham Khảo
            </li>
            <li
              onClick={() => setHeader("guide")}
              className={header === "guide" ? "active" : ""}
            >
              Hướng Dẫn
            </li>
            <li
              onClick={() => setHeader("contact")}
              className={header === "contact" ? "active" : ""}
            >
              Liên Hệ
            </li>
          </ul>
          <ul className="nav-shop">
            <li className="nav-item">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </li>
            <li className="nav-item">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </li>
            <li className="nav-item">
              <a className="button button-header" href="#">
                <FontAwesomeIcon
                  icon={faUser}
                  className="header-icon-button"
                ></FontAwesomeIcon>
                Sing In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
