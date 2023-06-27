import Header from '../Components/Header';
import InfoBox from '../Components/InfoBox';
import CountData from "../../Core/CountData.js";


const PaymentInfo = () => {
    return (
        <div className='container'> 
          <Header Counter_P={CountData('CartProduct')} />
          <InfoBox />
        </div>
    )
};

export default PaymentInfo;