import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Header.scss";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
class Header extends React.Component {
  render() {
    return (
      <div className="header-area">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a href="#">
              <img src={logo} alt="" className="logo" />
            </a>
            <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Code Tham Khảo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/guide"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Hướng Dẫn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Liên Hệ
                </NavLink>
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
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
