import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./js/Views/Pages/HomePage"
import ProductPage from "./js/Views/Pages/ProductPage";
import ProductDetailPage from "./js/Views/Pages/ProductDetailPage";
import CartPage from "./js/Views/Pages/CartPage";
import PaymentInfo from "./js/Views/Pages/PaymentInfo";
import CheckOut from "./js/Views/Pages/CheckOutPage";
import './css/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/product-detail" element={<ProductDetailPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/payment-info" element={<PaymentInfo/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;