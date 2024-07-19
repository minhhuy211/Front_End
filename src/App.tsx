import Header from "./component/Header";
import Footer from "./component/Footer";
import "../src/vendors/bootstrap/bootstrap.min.css";
import "../src/vendors/owl-carousel/owl.theme.default.min.css";
import "../src/asset/style.scss";
import "../src/img/home/parallax-bg.png";
import logo from "../src/img/logo.png";
import React, {useState} from "react";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
import Home from "./component/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Guide from "./component/Guide";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import LogIn from "./component/LogIn";
import Register from "./component/Register";
import {AuthProvider} from "./component/AuthContext";

class App extends React.Component {
    render() {
        return (
            <AuthProvider> {/* Thêm dòng này */}
                <BrowserRouter>
                    <>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/products" element={<Products/>}/>
                            <Route path="/product/:id" element={<ProductDetail/>}/>
                            <Route path="/guide" element={<Guide/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/login" element={<LogIn/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Routes>
                        <Footer/>
                    </>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}

export default App;
