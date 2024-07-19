import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./AuthContext"; // Nhập AuthContext từ file tương ứng

class Header extends React.Component {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>; // Đảm bảo context được kiểu hóa chính xác

  render() {
    const { user } = this.context;

    return (
        <div className="header-area">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <NavLink to="/">
                <img src={logo} alt="" className="logo" />
              </NavLink>

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
                  <FontAwesomeIcon icon={faSearch} />
                </li>
                <li className="nav-item">
                  <NavLink to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </NavLink>
                </li>
                <li className="nav-item">
                  {user ? (
                      <span className="button button-header">
                    <FontAwesomeIcon icon={faUser} className="header-icon-button" />
                        {user.username}
                  </span>
                  ) : (
                      <NavLink to="/login">
                        <a className="button button-header">
                          <FontAwesomeIcon icon={faUser} className="header-icon-button" />
                          Đăng nhập
                        </a>
                      </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

export default Header;
