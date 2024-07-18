import React from "react";
import product2 from "../img/product/product2.png"
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faShoppingCart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
interface Product {
    id: number;
    name: string;
    code:string;
    description:string;
    price: string;
    originalPrice: string;
    image: string;
    category:string;
    programmingLanguage:string;
    version:string;
    requirements:string;



}
interface State {
    listProducts: Product[];
    listProductsCurrent: Product[];
    listCategory:string[];
    txt:string
    sizeOfCategory:number[]
}
    class Products extends React.Component<{},State> {

        state: State = {
            listProducts: [],
            listProductsCurrent:[],
            listCategory:["website","phần mềm","ứng dụng","game"],
            txt:"",
            sizeOfCategory:[]
        };
        getData = async (url: string) => {
            try {
                let response = await axios.get(url);
                return response;
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        //hàm gắn giá trị txt theo giá trị nhập vào ô Search
        handleSearch =(e: React.ChangeEvent<HTMLInputElement>) => {

            this.setState(prevState=>(
                {
                txt:e.target.value,
                listProductsCurrent:prevState.listProducts.filter(product=>product.name.toLowerCase().includes(this.state.txt)||product.category.toLowerCase().includes(this.state.txt)
                || product.programmingLanguage.toLowerCase().includes(this.state.txt)||product.code.toLowerCase().includes(this.state.txt)
                )
            }))


    }
    async componentDidMount() {
        try {
            //lấy danh sách product
            let listProduct =await this.getData("http://localhost:4000/products");
            for (let category of this.state.listCategory) {
                try {
                    const response = await this.getData("http://localhost:4000/products/category/" + category);
                    const length = response?.data?.length ?? 0;
                    console.log(response,"dddddddddddddddd")
                    this.setState(prevState => ({
                        sizeOfCategory: [...prevState.sizeOfCategory, length]
                    }));
                } catch (error) {
                    console.error('Error fetching data for category', category, ':', error);
                    // Nếu có lỗi, thêm 0 vào mảng sizeOfCategory
                    this.setState(prevState => ({
                        sizeOfCategory: [...prevState.sizeOfCategory, 0]
                    }));

                }
            }
            console.log(this.state.sizeOfCategory,"dddddddddddddddd")



            this.setState({
                listProducts:listProduct&& listProduct.data?listProduct.data:[],
                listProductsCurrent:listProduct&& listProduct.data?listProduct.data:[]
            })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        let { listProducts,listCategory,txt,listProductsCurrent } = this.state;
        return (<>
                <section className="section-margin--small mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="sidebar-categories">
                                    <div className="head">Danh Mục</div>
                                    <ul className="main-categories">
                                        <li className="common-filter">
                                            <form action="#">
                                                <ul>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="men"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="men">
                                                            Men<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="women"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="women">
                                                            Women<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="accessories"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="accessories">
                                                            Accessories<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="footwear"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="footwear">
                                                            Footwear<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="bayItem"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="bayItem">
                                                            Bay item<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="electronics"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="electronics">
                                                            Electronics<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                    <li className="filter-list">
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id="food"
                                                            name="brand"
                                                        />
                                                        <label htmlFor="food">
                                                            Food<span> (3600)</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-filter">
                                    <div className="top-filter-head">Product Filters</div>
                                    <div className="common-filter">
                                        <div className="head">Brands</div>
                                        <form action="#">
                                            <ul>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="apple"
                                                        name="brand"
                                                    />
                                                    <label htmlFor="apple">
                                                        Apple<span>(29)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="asus"
                                                        name="brand"
                                                    />
                                                    <label htmlFor="asus">
                                                        Asus<span>(29)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="gionee"
                                                        name="brand"
                                                    />
                                                    <label htmlFor="gionee">
                                                        Gionee<span>(19)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="micromax"
                                                        name="brand"
                                                    />
                                                    <label htmlFor="micromax">
                                                        Micromax<span>(19)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="samsung"
                                                        name="brand"
                                                    />
                                                    <label htmlFor="samsung">
                                                        Samsung<span>(19)</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                    <div className="common-filter">
                                        <div className="head">Color</div>
                                        <form action="#">
                                            <ul>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="black"
                                                        name="color"
                                                    />
                                                    <label htmlFor="black">
                                                        Black<span>(29)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="balckleather"
                                                        name="color"
                                                    />
                                                    <label htmlFor="balckleather">
                                                        Black Leather<span>(29)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="blackred"
                                                        name="color"
                                                    />
                                                    <label htmlFor="blackred">
                                                        Black with red<span>(19)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="gold"
                                                        name="color"
                                                    />
                                                    <label htmlFor="gold">
                                                        Gold<span>(19)</span>
                                                    </label>
                                                </li>
                                                <li className="filter-list">
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="spacegrey"
                                                        name="color"
                                                    />
                                                    <label htmlFor="spacegrey">
                                                        Spacegrey<span>(19)</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                    <div className="common-filter">
                                        <div className="head">Price</div>
                                        <div className="price-range-area">
                                            <div id="price-range"/>
                                            <div className="value-wrapper d-flex">
                                                <div className="price">Price:</div>
                                                <span>$</span>
                                                <div id="lower-value"/>
                                                <div className="to">to</div>
                                                <span>$</span>
                                                <div id="upper-value"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                {/* Start Filter Bar */}
                                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                                    <h2 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
                                        Source Code Tham Khảo
                                    </h2>
                                    {/*<h1 className="display-5">Common Pest Control Services</h1>*/}
                                </div>
                                <div className="filter-bar d-flex flex-wrap align-items-center">

                                    <div className="sorting">
                                        <select>
                                            <option value={1}>Default sorting</option>
                                            <option value={1}>Default sorting</option>
                                            <option value={1}>Default sorting</option>
                                        </select>
                                    </div>
                                    <div className="sorting mr-auto">
                                        <select>
                                            <option value={1}>Show 12</option>
                                            <option value={1}>Show 12</option>
                                            <option value={1}>Show 12</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div className="input-group filter-bar-search">
                                            <input type="text" placeholder="Search" onChange={this.handleSearch}/>
                                            <div className="input-group-append">
                                                <button type="button">
                                                    <i className="ti-search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Filter Bar */}
                                {/* Start Menu*/}
                                <section className="lattest-product-area pb-40 category-list">
                                    <div className="row">
                                        {/*Từng sản phẩm*/}
                                        {listProductsCurrent&&listProductsCurrent.length>0&& listProductsCurrent.map((item,index)=>{
                                            return (
                                                <div className="col-md-6 col-lg-4" key={item.id}>
                                                    <div className="card text-center card-product">
                                                        <div className="card-product__img">
                                                            <img
                                                                className="card-img"
                                                                src={item.image}
                                                                alt=""
                                                            />
                                                            <ul className="card-product__imgOverlay">
                                                                <li>
                                                                    <button>
                                                                        {/*<i className="ti-search"></i>*/}
                                                                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button>
                                                                        {/*<i className="ti-shopping-cart"/>*/}
                                                                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                                                    </button>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div className="card-body">
                                                            <p>{item.programmingLanguage}</p>
                                                            <h4 className="card-product__title">
                                                                <a href="#">{item.name}</a>
                                                            </h4>
                                                            <p className="card-product__price">{item.price} VND</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        {/*jjjjjjjjjjjj*/}
                                    </div>
                                </section>
                                {/* End Best Seller */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* ================ category section end ================= */}
                {/* ================ top product area start ================= */}
                <section className="related-product-area">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <p>Sản phẩm tiêu biểu</p>
                            <h2>
                                Top <span className="section-intro__style">Product</span>
                            </h2>
                        </div>
                        <div className="row mt-30">
                            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                                {/*llllllll*/}
                                <div className="single-search-product-wrapper">
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src={product2} alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    {/*lllllll*/}
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-2.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-3.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                                <div className="single-search-product-wrapper">
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-4.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-5.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-6.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                                <div className="single-search-product-wrapper">
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-7.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-8.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-9.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                                <div className="single-search-product-wrapper">
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-1.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-2.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                    <div className="single-search-product d-flex">
                                        <a href="#">
                                            <img src="img/product/product-sm-3.png" alt=""/>
                                        </a>
                                        <div className="desc">
                                            <a href="#" className="title">
                                                Gray Coffee Cup
                                            </a>
                                            <div className="price">$170.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ================ top product area end ================= */}

            </>

        );
    }
}

// @ts-ignore
export default Products;