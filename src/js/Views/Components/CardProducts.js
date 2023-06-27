import { Link } from 'react-router-dom';
import '../../../css/StyleComponents/CardProducts.css';
import { useState } from 'react';

const CardProducts = (DbProduct) => {
    const [Data, setData] = useState(DbProduct);
    // CLick detail product 
    const handle_DP = (index) => {
        setData(DbProduct[index]);
    };
    
    return DbProduct.map((item, index) => {
        return (
            <div className='CardProduct' key={index.toString()}>
                <div className='Card__image'>
                    <img src={item.img} />
                </div>
                <span className='Card__NameCategories'>
                    {item.NameCategories}
                </span>
                <Link to='/product-detail' onClick={() => handle_DP(index)} state={{data: item}} className='Card__NameProduct'>
                    {item.NameProduct}
                </Link>
                <span className='MoneyProduct'>
                    {item.MoneyProduct + index}đ
                </span>
            </div>
        );
    });
};

export default CardProducts;