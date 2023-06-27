import CategoryProduct from './CategoryProduct';
import Pagination from './Pagination';
import { Link } from "react-router-dom";
import '../../../css/StyleComponents/Product.css';
import { useState } from 'react';

const Product = () => {
    const DataP = [
        {
            id: 1,
            image: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
            NameCategories: 'Name Categories',
            NameProduct: 'Name0 Product',
            Counter: 1,
            Cost: 200000,
            Total: 200000
        },
        {
            id: 2,
            image: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
            NameCategories: 'Name Categories',
            NameProduct: 'Name0 Product',
            Counter: 1,
            Cost: 200001,
            Total: 200001
        },
        {
            id: 3,
            image: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
            NameCategories: 'Name Categories',
            NameProduct: 'Name0 Product',
            Counter: 1,
            Cost: 200002,
            Total: 200002
        },
        {
            id: 4,
            image: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
            NameCategories: 'Name Categories',
            NameProduct: 'Name0 Product',
            Counter: 1,
            Cost: 200003,
            Total: 200003
        },
        {
            id: 5,
            image: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
            NameCategories: 'Name Categories',
            NameProduct: 'Name0 Product',
            Counter: 1,
            Cost: 200004,
            Total: 200004
        },
        {
            id: 6,
            image: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
            NameCategories: 'Name Categories',
            NameProduct: 'Name0 Product',
            Counter: 1,
            Cost: 200005,
            Total: 200005
        },
    ];
    
    const Products = ({Data}) => {
        const [DataProduct, setDataProduct] = useState(DataP);
        const handle_DP = (index) => {
            setDataProduct(DataP[index]);
        };
        return Data.map((item, index) => {
            return (
                <div className='itemProduct' key={index.toString()}>
                    <div className='itemProduct__image'>
                        <img src={item.image} />
                    </div>
                    <span className='itemProduct__NameCategories'>
                        {item.NameCategories}
                    </span>
                    <Link to='/product-detail' onClick={() => handle_DP(index)} state={{data: item}} className='itemProduct__NameProduct'>
                        {item.NameProduct}
                    </Link>
                    <span className='MoneyProduct'>
                        {item.Cost}đ
                    </span>
                </div>
            );
        });
    };
    return (
        <div className="Container-Product">
            <div className="col-LeftProduct">
                <CategoryProduct />
            </div>
            <div className="col-RightProduct">
                <div className='BlockProduct'>
                    <Products Data={DataP} />
                </div>
                <Pagination />
            </div>
        </div>
    )
}; 

export default Product;