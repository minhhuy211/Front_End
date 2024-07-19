import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import banner from "../assets/nu.png";

// Định nghĩa interface cho Product
interface Product {
    id: number;
    name: string;
    code: string;
    description: string;
    detailDescription: string;
    guide: string;
    price: string;
    originalPrice: string;
    image: string;
    category: string;
    programmingLanguage: string;
    version: string;
    requirements: string;
    features?: { name: string; value: string }[];
    comments: { name: string; date: string; comment: string }[];
}

// Định nghĩa State cho Component
interface ProductDetailProps {
    id: string;
}

const ProductDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>(); // Sử dụng useParams để lấy id từ route params
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
//sự kiện thêm giỏ hàng
    let handleAddShoppingCart=async (id:number)=>{
        await axios.post("http://localhost:4000/shoppingcart/"+id);
        // let response = await axios.get("http://localhost:4000/shoppingcarts");
        // console.log(response.data)
    }
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                setError('Product not found');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); // Đưa `id` vào dependencies của useEffect để fetch dữ liệu khi `id` thay đổi

    
    function replaceNewlinesWithBr(text: string): string {
        return text.replace(/\n/g, '<br>').replace(/\t/g, '&emsp;');
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (<>
            <section className="blog-banner-area" id="detail">
                <div className="container h-100">
                    <div className="blog-banner">
                        <div className="text-center">
                            <h1>Chi tiết sản phẩm</h1>
                            <nav aria-label="breadcrumb" className="banner-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Trang Chủ</a>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        <a href="#">Code Tham Khảo</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Chi tiết sản phẩm
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ end banner area ================= */}
            {/*================Single Product Area =================*/}
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <div className="owl-carousel owl-theme s_Product_carousel">
                                <div className="single-prd-item">
                                    <img className="img-fluid" src={product?.image} alt={product?.name}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{product?.name}</h3>
                                <h2>{product?.price} VND</h2>
                                <ul className="list">
                                    <li><a className="active" href="#"><span>Category</span> : {product?.category}
                                    </a></li>
                                    <li><a href="#"><span>Language</span> : {product?.programmingLanguage}</a></li>
                                </ul>
                                <p>{product?.description}</p>
                                <div className="product_count">
                                    <button onClick={() => {
                                        const result = document.getElementById('sst') as HTMLInputElement;
                                        let sst = parseInt(result.value);
                                        if (!isNaN(sst)) result.value = (sst + 1).toString();
                                    }} className="increase items-count" type="button"><i
                                        className="ti-angle-left"></i></button>
                                    <button onClick={() => {
                                        const result = document.getElementById('sst') as HTMLInputElement;
                                        let sst = parseInt(result.value);
                                        if (!isNaN(sst) && sst > 0) result.value = (sst - 1).toString();
                                    }} className="reduced items-count" type="button"><i
                                        className="ti-angle-right"></i></button>
                                    <a className="button primary-btn" href="#" >Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================End Single Product Area =================*/}

            {/*================Product Description Area =================*/}
            <section className="product_description_area">
                <div className="container">
                    <div className="section-intro pb-60px">
                        <h2><span className="section-intro__style">Mô Tả Chi Tiết</span></h2>
                    </div>
                    <div className="product_info">
                        <p dangerouslySetInnerHTML={{__html: replaceNewlinesWithBr(product?.detailDescription ?? '')}}></p>
                    </div>
                    <div className="section-intro pb-60px">
                        <h2><span className="section-intro__style">Hướng Dẫn Sử Dụng</span></h2>
                    </div>
                    <div className="product_guide">
                        <p dangerouslySetInnerHTML={{__html: replaceNewlinesWithBr(product?.guide ?? '')}}></p>
                    </div>
                    <div className="section-intro pb-60px">
                        <h2><span className="section-intro__style">Bình Luận</span></h2>
                    </div>
                    <div className="comment_list">
                        {product?.comments.map((comment, index) => (
                            <div className="review_item" key={index}>
                                <div className="media">
                                    <div className="media-body">
                                        <h4>{comment.name}</h4>
                                        <h5>{comment.date}</h5>
                                    </div>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*================End Product Description Area =================*/}
        </>

    );
};

export default ProductDetail;