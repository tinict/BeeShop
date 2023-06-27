import ShoppingCart from "./ShoppingCart";
import { useLocation } from "react-router-dom";

const CartProduct = () => {
    return (
        <div className="CartProduct">
            <div className="Container-cartProduct">
                <ShoppingCart />
            </div>
        </div>
    );
};

export default  CartProduct;