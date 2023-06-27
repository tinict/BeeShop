import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import CountData from "../../Core/CountData.js";

const HomePage = () => {
    return (
        <div className='container'>
          <Header Counter_P={CountData('CartProduct')} />
          <Content />
          <Footer />
        </div>
    )
};

export default HomePage;