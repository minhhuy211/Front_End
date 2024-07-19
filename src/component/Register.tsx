import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful", data);
        // Chuyển hướng đến trang đăng nhập khi đăng ký thành công
        navigate("/login");
      } else {
        // Xử lý lỗi từ backend
        if (data && data.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Registration failed. Please try again later.");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Đăng Nhập/ Đăng Ký</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Trang Chủ</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Đăng Ký
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="login_box_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <div className="hover">
                  <h4>Bạn đã có tài khoản?</h4>
                  <p>Nếu bạn đã có tài khoản, hãy tiến hành đăng nhập.</p>
                  <NavLink to="/login" className="button button-account">
                    Đăng Nhập Ngay
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner register_form_inner">
                <h3>Tạo Tài Khoản</h3>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <form className="row login_form" onSubmit={handleRegister}>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Tài khoản"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Username")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Địa chỉ Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Email Address")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Password")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Xác nhận mật khẩu"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) =>
                        (e.target.placeholder = "Confirm Password")
                      }
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      type="submit"
                      className="button button-register w-100"
                    >
                      Đăng Ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
