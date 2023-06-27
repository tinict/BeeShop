import '../../../css/StyleComponents/CheckOut.css';

const CheckOut = () => {
    return (
        <div className="CheckOut ScrollTop">
            <div className="CheckOut-container">
                <div className="CheckOut-header">
                    <h3>Check Out</h3>
                </div>
                <div className='CheckOut__Contact'>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>FullName:</h3>
                        <h3 className='CheckOut__info'>Jonhny Tri Nguyen</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Phone:</h3>
                        <h3 className='CheckOut__info'>0905467930</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Email:</h3>
                        <h3 className='CheckOut__info'>tin.beehexa@gmail.com</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Address:</h3>
                        <h3 className='CheckOut__info'>TTT Hue, Tp Hue, Xuan Phu, 205/4/3 Bà Triệu</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Shipping Method:</h3>
                        <h3 className='CheckOut__info'>Giao hàng nhanh</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Payment Method:</h3>
                        <h3 className='CheckOut__info'>Online Payment</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <div className='CheckOut__Product'>
                        </div>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Total:</h3>
                        <h3 className='CheckOut__info'>200000 VNĐ</h3>
                    </div>
                </div>
                <button type='button' className='btnPayment'>
                    Payment
                </button>
            </div>
        </div>
    );
};

export default CheckOut;