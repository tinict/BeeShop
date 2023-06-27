import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Category from "../Components/Category";
import CountData from "../../Core/CountData.js";

const ProductPage = () => {
    return (
        <div className='container'>
          <Header Counter_P={CountData('CartProduct')} />
          <Category />
          <Footer />
        </div> 
    )
};

export default ProductPage;