import '../../../css/StyleComponents/InfoBox.css';
import PaymentBox from './PaymentBox';


const InfoBox = () => {
    return (
        <div className="InfoBox">
            <div className="InfoBox__header">
                <h3>Order Information</h3>
            </div>
            <div className="formGet-info">
                <h3 className='title-form'>Customer Infomation</h3>
                <input className='ip_info' type="text" placeholder="FullName *" />
                <input className='ip_info' type="text" placeholder="Phone number *" />
                <input className='ip_info' type="text" placeholder="Email *" />
                <h3>Shipping methods</h3>
                <div className='Check__ShippingMethod'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Radio" id="Radio1" defaultChecked/>
                        <label className="form-check-label" htmlFor="Radio1">
                            Nhận hàng tại cửa hàng
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Radio" id="Radio2"/>
                        <label className="form-check-label" htmlFor="Radio2">
                            Giao hàng tận nơi
                        </label>
                    </div>
                </div>
                <h3>Address Customer</h3>
                <div className="form-address-customer">
                    <div className='address-row'>
                        <select name="Tỉnh/Thành Phố" id="cars">
                            <option disabled defaultValue> Tỉnh/Thành Phố </option>
                            <option>Huế</option>
                        </select>
                        <select name="Quận/Huyện" id="cars">
                            <option disabled defaultValue>Quận/Huyện</option>
                            <option>Xuân Phú</option>
                        </select>
                    </div>
                    <div className='address-row'>
                        <select name="Phường/Xã" id="cars">
                            <option disabled defaultValue>Phường/Xã</option>
                            <option>Huế</option>
                        </select>
                        <input type="text" id="cars" className='ip_address' placeholder='Địa chỉ/Nơi ở hiện tại'/>
                    </div>
                </div>
                <h3>Payment methods</h3>
                <div className='Check__ShippingMethod'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Radio" id="Radio1" defaultChecked/>
                        <label className="form-check-label" htmlFor="Radio1">
                            Online payment
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Radio" id="Radio2"/>
                        <label className="form-check-label" htmlFor="Radio2">
                            Cash on delivery
                        </label>
                    </div>
                </div>
            </div>
            <PaymentBox pathName={'/checkout'}/>
        </div>
    );
};

export default InfoBox;