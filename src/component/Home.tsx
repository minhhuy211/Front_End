import React from "react";
import banner from "../assets/banner.jpg";
import "../styles/Home.scss";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faFile, faHeart,
    faMoneyCheck,
    faPhoneVolume, faSearch, faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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

interface State {
    listProducts: Product[];
    listWeb: Product[];
    listPM: Product[];
    listUD: Product[];
    listGame: Product[];

}

class Home extends React.Component <{}, State> {
    state: State = {
        listProducts: [],
        listWeb: [],
        listGame: [],
        listPM: [],
        listUD: []

    }
    //xư lí hanh đông nhấn tim
    handleLikeClick = (id: number) => {
        let res = axios.put("http://localhost:4000/products/like/" + id);
        this.setState(prevState => ({
            listProducts: prevState.listProducts.map(p => {
                if (p.id === id) {
                    return {...p, like: p.like + 1};
                }
                return p;
            })
        }))
        this.getDataList();
    }
    //sự kiện thêm giỏ hàng
    handleAddShoppingCart=async (id:number)=>{
        await axios.post("http://localhost:4000/shoppingcart/"+id);
        // let response = await axios.get("http://localhost:4000/shoppingcarts");
        // console.log(response.data)
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:4000/products");

            if (!response || !response.data || response.data.length === 0) {
                console.log("No products found.");
                return;
            }
            this.setState({
                listProducts: response.data
            }, () => {
                console.log(this.state.listProducts);
                this.getDataList();
            })
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    getDataList = () => {
        let all = []
        let pWeb = this.state.listProducts.filter(p => p.category === "website");
        let pPhanMem = this.state.listProducts.filter(p => p.category === "phần mềm");
        let pUngdung = this.state.listProducts.filter(p => p.category === "ứng dụng");
        let pGame = this.state.listProducts.filter(p => p.category === "game");
        all.push(pWeb, pPhanMem, pUngdung, pGame)
        // console.log(all,">>>>>>>>>>>>>>.alll")
        all.map((item, index) => {
            item.sort((a, b) => b.like - a.like);
            item.splice(4);
        })
        this.setState({
            listUD: pUngdung,
            listPM: pPhanMem,
            listWeb: pWeb,
            listGame: pGame
        });

    }

    render() {
        let {listWeb, listGame, listPM, listUD} = this.state
        return (


            <>
                <section className="hero-banner">
                    <div className="container">
                        <div className="row no-gutters align-items-center pt-60px">
                            <div className="col-5 d-none d-sm-block">
                                <div className="hero-banner__img">
                                    <img className="img-fluid" src={banner} alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                                <div className="hero-banner__content">
                                    <h1>Thư Viện Source Code Đa Dạng</h1>
                                    <p>
                                        Với số lượng source code được rất nhiều thành viên chia sẻ
                                        trên ICanCode.vn, hy vọng sẽ giúp ích được nhiều cho mọi
                                        người. Nếu như có các code khác hay và chất lượng, các bạn
                                        có thể đăng lên chia sẻ trên ICanCode.vn. Vừa là có thể kiếm
                                        thêm chút thu nhập, vừa có thể tạo thêm giá trị cộng đồng.
                                    </p>
                                    <a className="button button-hero" href="#">
                                        Mua Ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="nav-inf">
                    <div className="nav-inf-list">
                        <div className="nav-inf-item">
                            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                            <div className="nav-inf-res">
                                <h4>Code phong phú</h4>
                                <p>Đầy đủ các thể loại...</p>
                            </div>
                        </div>
                        <div className="nav-inf-item">
                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                            <div className="nav-inf-res">
                                <h4>Code Chất Lượng</h4>
                                <p>Cam kết hổ trợ và liên hệ</p>
                            </div>
                        </div>
                        <div className="nav-inf-item">
                            <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                            <div className="nav-inf-res">
                                <h4>Hỗ trợ 24/7</h4>
                                <p>Giao dịch và download code</p>
                            </div>
                        </div>
                        <div className="nav-inf-item">
                            <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon>
                            <div className="nav-inf-res">
                                <h4>Thanh Toán</h4>
                                <p>Thanh toán đảm bảo</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <h2>PHẦN MỀM NỔI BẬT</h2>
                        </div>
                        <div className="row">
                            {/*BEGIN*/}
                            {listPM && listPM.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
                                            <div className="card text-center card-product">
                                                <div className="card-product__img">
                                                    <img className="card-img" src={item.image} alt=""></img>
                                                    <ul className="card-product__imgOverlay">
                                                        <li>
                                                            <Link to={`/product/${item.id}`}>
                                                                <FontAwesomeIcon
                                                                    icon={faSearch}></FontAwesomeIcon>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleAddShoppingCart(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faShoppingCart}></FontAwesomeIcon>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleLikeClick(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faHeart}></FontAwesomeIcon>
                                                            </button>
                                                            {item.like}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <p>{item.programmingLanguage}</p>
                                                    <h4 className="card-product__title">
                                                        <Link to={`/product/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </h4>
                                                    <p className="card-product__price">{item.price} VND</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <h2>WEBSITE NỔI BẬT</h2>
                        </div>
                        <div className="row">
                            {/*BEGIN*/}
                            {listWeb && listWeb.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
                                            <div className="card text-center card-product">
                                                <div className="card-product__img">
                                                    <img className="card-img" src={item.image} alt=""></img>
                                                    <ul className="card-product__imgOverlay">
                                                        <li>
                                                            <Link to={`/product/${item.id}`}>
                                                                <FontAwesomeIcon
                                                                    icon={faSearch}></FontAwesomeIcon>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleAddShoppingCart(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faShoppingCart}></FontAwesomeIcon>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleLikeClick(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faHeart}></FontAwesomeIcon>
                                                            </button>
                                                            {item.like}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <p>{item.programmingLanguage}</p>
                                                    <h4 className="card-product__title">
                                                        <Link to={`/product/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </h4>
                                                    <p className="card-product__price">{item.price} VND</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            {/*BEGIN*/}

                        </div>
                    </div>
                </section>

                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <h2>GAME NỔI BẬT</h2>
                        </div>
                        <div className="row">
                            {/*BEGIN*/}
                            {listGame && listGame.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
                                            <div className="card text-center card-product">
                                                <div className="card-product__img">
                                                    <img className="card-img" src={item.image} alt=""></img>
                                                    <ul className="card-product__imgOverlay">
                                                        <li>
                                                            <Link to={`/product/${item.id}`}>
                                                                <FontAwesomeIcon
                                                                    icon={faSearch}></FontAwesomeIcon>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleAddShoppingCart(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faShoppingCart}></FontAwesomeIcon>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleLikeClick(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faHeart}></FontAwesomeIcon>
                                                            </button>
                                                            {item.like}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <p>{item.programmingLanguage}</p>
                                                    <h4 className="card-product__title">
                                                        <Link to={`/product/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </h4>
                                                    <p className="card-product__price">{item.price} VND</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            {/*BEGIN*/}

                        </div>
                    </div>
                </section>
                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <h2>ỨNG DỤNG NỔI BẬT</h2>
                        </div>
                        <div className="row">
                            {/*BEGIN*/}
                            {listUD && listUD.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
                                            <div className="card text-center card-product">
                                                <div className="card-product__img">
                                                    <img className="card-img" src={item.image} alt=""></img>
                                                    <ul className="card-product__imgOverlay">
                                                        <li>
                                                            <Link to={`/product/${item.id}`}>
                                                                <FontAwesomeIcon
                                                                    icon={faSearch}></FontAwesomeIcon>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleAddShoppingCart(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faShoppingCart}></FontAwesomeIcon>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => this.handleLikeClick(item.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faHeart}></FontAwesomeIcon>
                                                            </button>
                                                            {item.like}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <p>{item.programmingLanguage}</p>
                                                    <h4 className="card-product__title">
                                                        <Link to={`/product/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </h4>
                                                    <p className="card-product__price">{item.price} VND</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            {/*BEGIN*/}

                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;
