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
                <h3>Shipping method</h3>
                <div className='Check__ShippingMethod'>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="Radio" id="Radio1" checked/>
                        <label className="form-check-label" for="Radio1">
                            Nhận hàng tại cửa hàng
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="Radio" id="Radio2"/>
                        <label className="form-check-label" for="Radio2">
                            Giao hàng tận nơi
                        </label>
                    </div>
                </div>
                <h3>Address Customer</h3>
                <div className="form-address-customer">
                    <select name="Tỉnh/Thành Phố" id="cars">
                        <option value="" selected disabled>Tỉnh/Thành Phố</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="Tỉnh/Thành Phố" id="cars">
                        <option value="" selected disabled>Quận/Huyện</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
            <PaymentBox />
        </div>
    );
};

export default InfoBox;