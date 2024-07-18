import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful", data);
        // Lưu token và chuyển hướng hoặc thực hiện hành động khác
        navigate("/"); // Chuyển hướng sang trang chủ
      } else {
        // Xử lý lỗi từ backend
        if (data && data.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Login failed. Please try again later.");
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
                <h1>Login / Register</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Login/Register
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
                    <h4>New to our website?</h4>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <Link to="/register" className="button button-account">
                      Create an Account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_form_inner">
                  <h3>Log in to enter</h3>
                  {errorMessage && (
                      <div className="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                  )}
                  <form className="row login_form" onSubmit={handleLogin}>
                    <div className="col-md-12 form-group">
                      <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="name"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => (e.target.placeholder = "Username")}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="name"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => (e.target.placeholder = "Password")}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <button
                          type="submit"
                          value="submit"
                          className="button button-login w-100"
                      >
                        Log In
                      </button>
                      <a href="#">Forgot Password?</a>
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

export default LogIn;
