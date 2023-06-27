import { Link } from 'react-router-dom';
import '../../../css/StyleComponents/PaymentBox.css';

const PaymentBox = ({total, pathName}) => {
    console.log(pathName);
    return (
        <div className='totalBoxPay'>
            <div className='header-boxpay'>
                <h3>Total money:</h3>
                <h3>{total}đ</h3>
            </div>
            <div className='btnGroup-boxPay'>
                <button type='button' className='btn_go-next'>
                    <Link to={pathName}>Next Step</Link>
                </button>
                <button type='button' className='btn_add-product'>
                    <Link to='/product'>Add Product</Link>
                </button>
             </div>
        </div>
    );
};

export default PaymentBox;