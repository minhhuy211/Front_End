import React, {ChangeEvent} from "react";
import product2 from "../img/product/product2.png"
import {Link} from 'react-router-dom';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faShoppingCart,
    faUser,
    faHeart
} from "@fortawesome/free-solid-svg-icons";

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
    like:number;
    comments:string;
}

interface State {
    listProducts: Product[];
    listProductsCurrent: Product[];
    listCategory: string[];
    txt: string;
    sizeOfCategory: number[];
    categoryCurrent: string;
    listprogrammingLanguage: string[];
    programmingLanguageCurrent: string;
    perPage: number;
    numPage: number;
    listBeginPage: number[];
    pageCurrent: number;
    listProductsPage: Product[];
}

class Products extends React.Component<{}, State> {

    state: State = {
        listProducts: [],//danh sách tất cả sp có trong API
        listProductsCurrent: [],//danh sách sp load lên menu
        listCategory: ["website", "phần mềm", "ứng dụng", "game"],
        txt: "",//kí tự search cho menu
        sizeOfCategory: [],//số lượng sản phẩm của mỗi category theo đúng thứ tự của listCategory
        categoryCurrent: "",//mục category đang được chọn (phân loại theo Danh Mục)
        listprogrammingLanguage: ['Android', 'IOS', 'Visual C#', 'Visual C++', 'Visual Basic', 'WordPress', 'Java/JSP', 'VueJS', 'ReactJS', 'HTML/CSS'],
        programmingLanguageCurrent: "",
        perPage: 9,//số sản phẩm mỗi trang
        numPage: 0,//số trang
        listBeginPage: [],//chuỗi các index đầu
        pageCurrent: 1,//index trang hiện tại
        listProductsPage: []
    };
    //truy cập API gọi dữ liệu
    getData = async (url: string) => {
        try {
            let response = await axios.get(url);
            return response;
        } catch (error) {
            console.error('lỗi lấy dữ liệu api:', error);
        }
    }
    //hàm gắn giá trị txt theo giá trị nhập vào ô Search
    handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState(prevState => (
            {
                txt: e.target.value
            }))
    }
    //hàm gắn tham số khi click vào ngôn ngữ
    handleCategory = (item: string) => {
        this.setState(prevState => (
            {
                categoryCurrent: item
            }))
    }
    //hàm gán giá trị khi nhấn lọc theo ngôn ngữ
    handleLanguage = (item: string) => {
        this.setState(prevState => ({
            programmingLanguageCurrent: item
        }))
    }
    //hàm gán trang hiện tại (pageCurrent)
    handlePageClick = (item: number) => {
        this.setState({
            pageCurrent: item
        })

    }
    //select
    handleSelectPerPage=(e:ChangeEvent<HTMLSelectElement>)=>{
        this.setState(prevState => ({
            perPage:+e.target.value
        }))
    }
    //sự kiện thêm giỏ hàng
    handleAddShoppingCart=async (id:number)=>{
        await axios.post("http://localhost:4000/shoppingcart/"+id);
        // let response = await axios.get("http://localhost:4000/shoppingcarts");
        // console.log(response.data)
    }

    //sự kiện yêu thích (like) sản phẩm
    handleLikeClick = async (id: number) => {
        try {
            // Gửi yêu cầu PUT để cập nhật số lượng like của sản phẩm với id
            await axios.put(`http://localhost:4000/products/like/${id}`);

            // Cập nhật lại state của React sau khi cập nhật thành công
            this.setState(prevState => ({
                listProducts: prevState.listProducts.map(product => {
                    if (product.id === id) {
                        // Cập nhật lại số lượng like của sản phẩm có id tương ứng
                        return { ...product, like: product.like + 1 };
                    }
                    return product; // Trả về sản phẩm không thay đổi nếu không phải sản phẩm cần cập nhật
                })
            }));

        } catch (error) {
            console.error('Error updating product with like:', error);
        }
    };
    //loadMenu trang
    loadMenu = () => {
        this.setState(prevState => ({
            listProductsCurrent: prevState.listProducts.filter(product =>
                (product.name.toLowerCase().includes(this.state.txt) ||
                    product.category.toLowerCase().includes(this.state.txt) ||
                    product.programmingLanguage.toLowerCase().includes(this.state.txt) ||
                    product.code.toLowerCase().includes(this.state.txt)) &&
                (this.state.categoryCurrent ? product.category === this.state.categoryCurrent : true) &&
                (this.state.programmingLanguageCurrent ? product.programmingLanguage === this.state.programmingLanguageCurrent : true)
            )
        }), () => {
            // Sau khi lọc dữ liệu, gọi hàm getP để phân trang
            this.initForPage();
        });
    }

//Hàm phân trang
    initForPage = () => {
        const {listProductsCurrent, perPage, pageCurrent} = this.state;
        const total = listProductsCurrent.length;
        const numPage = Math.ceil(total / perPage);

        let listt: Product[] = [];
        const begin = (pageCurrent - 1) * perPage;
        for (let i = begin; i < Math.min(begin + perPage, total); i++) {
            listt.push(listProductsCurrent[i]);
        }

        this.setState({
            listProductsCurrent: listt,
            numPage: numPage
        });
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any) {
        if ((prevState.txt !== this.state.txt) || (prevState.categoryCurrent !== this.state.categoryCurrent) || (prevState.programmingLanguageCurrent !== this.state.programmingLanguageCurrent)
            || (prevState.pageCurrent !== this.state.pageCurrent)||(prevState.perPage!==this.state.perPage)||(prevState.listProducts!==this.state.listProducts)
        ) {
            this.loadMenu();
        }
    }

    async componentDidMount() {
        try {
            // Lấy danh sách sản phẩm
            let listProduct = await this.getData("http://localhost:4000/products");
            if (!listProduct || !listProduct.data || listProduct.data.length === 0) {
                console.log("No products found.");
                return;
            }
            // lây kích thước mỗi category
            const sizeOfCategoryPromises = this.state.listCategory.map(async (item) => {
                try {
                    let response = await this.getData("http://localhost:4000/products/category/" + item);
                    let data = response && response.data;
                    return data.length;
                } catch (error) {
                    console.error("Lỗi khi load dữ liêu categry: ", item, error);
                    return 0;
                }
            });

            // Chờ tất cả các promise hoàn thành và gắn tất cả cacs length cho biến sizeOfCategory
            const sizeOfCategory = await Promise.all(sizeOfCategoryPromises);
            let total = listProduct && listProduct.data.length > 0 ? listProduct.data.length : 0;
            let beginList = [0];
            let numPage = Math.ceil(total / this.state.perPage)
            console.log(numPage, ">>>>>numpage")
            let listt: Product[] = [];
            let begin = (this.state.pageCurrent - 1) * this.state.perPage;
            for (let i = begin; i < Math.min(begin + this.state.perPage, total); i++) {
                console.log(i, ">>>>>>>>>>>>>i")
                listt.push(listProduct.data[i]);
            }
            console.log(listt)

            // Cập nhật state
            this.setState({
                sizeOfCategory: sizeOfCategory,
                listProducts: listProduct?.data ?? [],
                listProductsCurrent: listt,
                numPage: numPage
            });

        } catch (error) {
            console.error("Error", error);
        }

    }

    render() {
        let {
            listProducts,
            listCategory,
            txt,
            listProductsCurrent,
            sizeOfCategory,
            listprogrammingLanguage,
            numPage,
            pageCurrent
        } = this.state;
        // / console.log(' sizeOfCategory:', sizeOfCategory);

        return (<>
                <section className="section-margin--small mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="sidebar-categories">
                                    <div className="head">Danh Mục</div>
                                    <ul className="main-categories">
                                        <li className="common-filter">
                                            <ul>
                                                <li className="filter-list" key={""}
                                                    onClick={() => this.handleCategory("")}>
                                                    <input
                                                        className="pixel-radio"
                                                        type="radio"
                                                        id="all"
                                                        name="brand"
                                                    />
                                                    <label htmlFor="all">
                                                        Tất cả<span> ({listProducts.length})</span>
                                                    </label>
                                                </li>
                                                {listCategory && listCategory.length > 0 && listCategory.map((item, index) => {
                                                    return (<>
                                                            {/*Mỗi phần tử trong danh mục*/}
                                                            <li className="filter-list" key={item}
                                                                onClick={() => this.handleCategory(item)}>
                                                                <input
                                                                    className="pixel-radio"
                                                                    type="radio"
                                                                    id={item}
                                                                    name="brand"
                                                                />
                                                                <label htmlFor={item}>

                                                                    {item}<span> ({sizeOfCategory[index]})</span>
                                                                </label>

                                                            </li>
                                                            {/*kết thúc phần tử trong danh mục*/}
                                                        </>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-filter">
                                    <div className="top-filter-head">Công nghệ và Ngôn ngữ</div>
                                    <div className="common-filter">
                                        <ul>
                                            <li className="filter-list" key="all"
                                                onClick={() => this.handleLanguage("")}>
                                                <input
                                                    className="pixel-radio"
                                                    type="radio"
                                                    id="all"
                                                    name="language"
                                                />
                                                <label htmlFor="all">
                                                    Tất cả
                                                </label>
                                            </li>
                                            {listprogrammingLanguage && listprogrammingLanguage.length > 0 && listprogrammingLanguage.map((item, index) => {
                                                return (
                                                    // ngôn ngữ
                                                    <li className="filter-list" key={item}
                                                        onClick={() => this.handleLanguage(item)}>
                                                        <input
                                                            className="pixel-radio"
                                                            type="radio"
                                                            id={item}
                                                            name="language"
                                                        />
                                                        <label htmlFor={item}>
                                                            {item}
                                                        </label>
                                                    </li>
                                                    // {/* kêt thuc 1ngôn ngữ*/}
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                {/* Start Filter Bar */}
                                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                                    <h2 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
                                        Source Code Tham Khảo
                                    </h2>
                                </div>
                                <div className="filter-bar d-flex flex-wrap align-items-center">
                                    <div className="sorting mr-auto">
                                        <select id="selectPerPage" onChange={this.handleSelectPerPage}>
                                            <option value="9">9</option>
                                            <option value="12">12</option>
                                            <option value="15">15</option>
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
                                        {listProductsCurrent && listProductsCurrent.length > 0 && listProductsCurrent.map((item, index) => {
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
                                                                        <Link to={`/product/${item.id}`}>
                                                                            <FontAwesomeIcon
                                                                                icon={faSearch}></FontAwesomeIcon>
                                                                        </Link>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        onClick={() => this.handleAddShoppingCart(item.id)}>
                                                                        <FontAwesomeIcon
                                                                            icon={faShoppingCart}></FontAwesomeIcon>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button onClick={()=>this.handleLikeClick(item.id)}>
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
                        <div >
                            {Array.from({length: numPage}, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={`button-page ${this.state.pageCurrent === index + 1 ? "active" : ""}`}
                                    onClick={() => this.handlePageClick(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ================ category section end ================= */}
            </>
        );
    }
}

export default Products;