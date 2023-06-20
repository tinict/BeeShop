import Breadcrumb from "./Breadcrumb";
import '../../../css/StyleComponents/ProductDetail.css';

const ProductDetail = () => {
    return (
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
                            <h3>370.000đ</h3>
                        </div>
                        <div className="col-state">
                            <h3>Còn hàng</h3>
                            <button type="button" className="btnCategory">Add Category</button>
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
                        <div className="ShareSocial">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
