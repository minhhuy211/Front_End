import React, { useState } from "react";
import "../styles/Header.scss";
import "../styles/style.scss";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [header, setHeader] = useState("home");

  return (
    <div className="header">
      <a href="#">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className="header-list">
        <li
          onClick={() => setHeader("home")}
          className={header === "home" ? "action" : ""}
        >
          Trang Chủ
        </li>
        <li
          onClick={() => setHeader("products")}
          className={header === "products" ? "action" : ""}
        >
          Code Tham Khảo
        </li>
        <li
          onClick={() => setHeader("guide")}
          className={header === "guide" ? "action" : ""}
        >
          Hướng Dẫn
        </li>
        <li
          onClick={() => setHeader("contact")}
          className={header === "contact" ? "action" : ""}
        >
          Liên Hệ
        </li>
      </ul>
      <div className="header-right">
        <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        <FontAwesomeIcon icon={faUser} className="icon-user" />
      </div>
    </div>
  );
};

export default Header;
