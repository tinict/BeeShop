import Header from "../Components/Header";
import CountData from "../../Core/CountData.js";
import CheckOut from '../Components/CheckOut'

const CheckOutPage = () => {
    return (
        <>
            <div className="container">
                <Header Counter_P={CountData('CartProduct')} />
                <CheckOut />
            </div>
        </>
    );
};

export default CheckOutPage;