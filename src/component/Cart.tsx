import React from "react";
import "../styles/Cart.scss";
import axios from "axios";
import Products from "./Products";


interface Product {
    id: number;
    name: string;
    code: string;
    description: string;
    price: string;
    originalPrice: string;
    image: string;
    category: string;
    programmingLanguage: string;
    version: string;
    requirements: string;
    like: number
}

interface ShoppingCart {
    product: Product;
    quantity: number;
}

interface State {
    listShoppingCart:ShoppingCart[];
}

class Cart extends React.Component<{}, State> {
    state: State = {
        listShoppingCart: []
    }

    //xử lí tăng số lượng
    handleAdd = (id: number) => {
        axios.put("http://localhost:4000/shoppingcarts/addQuantity/" + id)
        this.setState(prevState=>({
            listShoppingCart:prevState.listShoppingCart.map(s=>{
                if(s.product.id === id){
                    return {...s, quantity: s.quantity + 1};
                }
                return s;
            })
        }))
    }
    handleReduce = (id: number) => {
        let a = this.state.listShoppingCart.find(s => s.product.id === id);
        if (a) {
            if (a.quantity >= 1) {
                axios.put(`http://localhost:4000/shoppingcarts/reduceQuantity/${id}`);
                this.setState({
                    listShoppingCart: this.state.listShoppingCart.length > 0
                        ? this.state.listShoppingCart
                            .map(s => {
                                if (s.product.id === id) {
                                    if (s.quantity > 1) {
                                        return { ...s, quantity: s.quantity - 1 };
                                    }
                                    return null;
                                }
                                return s;
                            })
                            .filter(s => s !== null) as ShoppingCart[]
                        : []
                });
            }
        }
    }


    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:4000/shoppingcarts");


            this.setState({
                listShoppingCart: response?.data??[]
            }, () => {
                console.log(this.state.listShoppingCart,"llllllllllllllll");

            })
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }



    render() {
        let {listShoppingCart} = this.state;
        return (
            <>
                <section className="blog-banner-area" id="category">
                    <div className="container h-100">
                        <div className="blog-banner">
                            <div className="text-center">
                                <h1>Giỏ Hàng</h1>
                                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Trang Chủ</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Giỏ Hàng
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cart_area">
                    <div className="container">
                        <div className="cart_inner">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Sản Phẩm</th>
                                        <th scope="col">Đơn Giá</th>
                                        <th scope="col">Số Lượng</th>
                                        <th scope="col">Tổng Tiền</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*begin*/}
                                    {listShoppingCart.length>0?
                                    listShoppingCart.map((item, index) => {
                                        return (<>
                                            <tr key={item.product.id}>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            {/* <img src={item.product.image} alt="" /> */}
                                                        </div>
                                                        <div className="media-body">
                                                            <p>{item.product.name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>{item.product.price} VND</h5>
                                                </td>
                                                <td>
                                                    <button onClick={() => this.handleAdd(item.product.id)}>+</button>
                                                    <b>{item.quantity}</b>
                                                    <button onClick={() => this.handleReduce(item.product.id)}>-
                                                    </button>
                                                </td>
                                                <td>
                                                    <h5>{+item.product.price * item.quantity} VND</h5>
                                                </td>
                                            </tr>
                                            </>

                                        );
                                    })
                                        :
                                        <tr>
                                            <td>
                                                giỏ hang rong
                                            </td>
                                        </tr>
                                    }


                                    {/*end*/}
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="button" href="#">
                                                Update Cart
                                            </a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="cupon_text d-flex align-items-center">
                                                {/* <input type="text" placeholder="Coupon Code"> */}
                                                <a className="primary-btn" href="#">
                                                    Apply
                                                </a>
                                                <a className="button" href="#">
                                                    Have a Coupon?
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$2160.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td className="d-none d-md-block"></td>
                                        <td></td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li>
                                                        <a href="#">Flat Rate: $5.00</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Free Shipping</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Flat Rate: $10.00</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="#">Local Delivery: $2.00</a>
                                                    </li>
                                                </ul>
                                                <h6>
                                                    Calculate Shipping{" "}
                                                    <i
                                                        className="fa fa-caret-down"
                                                        aria-hidden="true"
                                                    ></i>
                                                </h6>
                                                <select className="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select className="shipping_select">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                {/* <input type="text" placeholder="Postcode/Zipcode"> */}
                                                <a className="gray_btn" href="#">
                                                    Update Details
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="out_button_area">
                                        <td className="d-none-l"></td>
                                        <td className=""></td>
                                        <td></td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <a className="gray_btn" href="#">
                                                    Continue Shopping
                                                </a>
                                                <a className="primary-btn ml-2" href="#">
                                                    Proceed to checkout
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Cart;