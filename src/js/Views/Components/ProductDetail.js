import Breadcrumb from "./Breadcrumb";
import '../../../css/StyleComponents/ProductDetail.css';
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CountData from "../../Core/CountData.js";


const ProductDetail = () => {
    const location = useLocation();
    const data = location.state.data;
    console.log(data);
    
    // var Cart = [];
    // var key = JSON.parse(window.localStorage.getItem('Cart'));
    const [Counter, setCounter] = useState(CountData('CartProduct'));
    const handleAddItemCart = (db) => {
        let key = JSON.parse(window.localStorage.getItem('CartProduct'));
        if (key === null)
            var New_DB = [];
        else
            var New_DB = [...key];
        New_DB.push(db);
        window.localStorage.clear();
        window.localStorage.setItem('CartProduct', JSON.stringify(New_DB));
        const total = () => {
            let key = JSON.parse(window.localStorage.getItem('CartProduct'));
            console.log(key);
            let total = 0;
            if (key === null)
                return 0;
            else {
                return key.length;
            }
        }
        setCounter(total());
    }; 
    
    return (
        <div className="container">
            <Header Counter_P={Counter} />
            <div className="PoductDetail ScrollTop">
                <div className="Container-ProductDetail">
                    <Breadcrumb />
                    <div className="BlockDetail">
                        <div className="col-left-detail">
                            <div className="view-product">
                                <img src='https://th.bing.com/th/id/R.87a0cae1ed2740bfec4eeb7bffb80db5?rik=abkWkh4MYwYBYw&pid=ImgRaw&r=0' />
                            </div>
                            <div className="container-img">
                                <div className="img-product">
                                    <img src='https://th.bing.com/th/id/R.1c38e39450284502b6cb4a04998348ec?rik=1RjjHOnNS3BkFQ&riu=http%3a%2f%2fbrickexplorer.com%2fwp-content%2fuploads%2f2020%2f04%2fplazanorte.jpg&ehk=cakdnMnKAjFd%2fmtz8Sloi9hZgO3Ha5e2C%2buf4LqE46I%3d&risl=&pid=ImgRaw&r=0' />
                                </div>
                                <div className="img-product">
                                    <img src='https://th.bing.com/th/id/R.87a0cae1ed2740bfec4eeb7bffb80db5?rik=abkWkh4MYwYBYw&pid=ImgRaw&r=0' />
                                </div>
                                <div className="img-product">
                                    <img src='https://th.bing.com/th/id/R.87a0cae1ed2740bfec4eeb7bffb80db5?rik=abkWkh4MYwYBYw&pid=ImgRaw&r=0' />
                                </div>
                                <div className="img-product">
                                    <img src='https://th.bing.com/th/id/R.87a0cae1ed2740bfec4eeb7bffb80db5?rik=abkWkh4MYwYBYw&pid=ImgRaw&r=0' />
                                </div>
                            </div>
                        </div>
                        <div className="col-right-detail">
                            <div className="col-title-product">
                                <h3>Bộ sản phẩm đang thử nghiệm thử</h3>
                            </div>
                            <div className="col-subtitle-product">
                                <span>(10 đánh giá của khách hàng)</span>
                            </div>
                            <div className="col-money">
                                <h3>{data.Cost}đ</h3>
                            </div>
                            <div className="col-state">
                                <h3>Còn hàng</h3>
                                <button type="button" className="btnCategory" onClick={() => handleAddItemCart(data)}>Add Category</button>
                            </div>
                            <div className="col-nameCategory">
                                <ul> 
                                    <li>
                                        <span>Danh mục:</span>
                                        <a href='#'>Đồ lưu niệm BeeShop</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-nameCategory">
                                <div className="content-product">
                                    <h3>Mô tả sản phâm:</h3>
                                    <p className="pragraph-product"></p>
                                </div>
                            </div>
                            <div className="ShareSocial"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
