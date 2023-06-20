import CategoryProduct from './CategoryProduct';
import Pagination from './Pagination';
import { Link } from "react-router-dom";
import '../../../css/StyleComponents/Product.css';

const Product = () => {
    const DataP = [{
        img: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        NameCategories: 'Name Categories',
        NameProduct: 'Name0 Product',
        MoneyProduct: 200000
    },
    {
        img: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        NameCategories: 'Name Categories',
        NameProduct: 'Name1 Product',
        MoneyProduct: 200000
    },
    {
        img: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        NameCategories: 'Name Categories',
        NameProduct: 'Name2 Product',
        MoneyProduct: 200000
    },
    {
        img: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        NameCategories: 'Name Categories',
        NameProduct: 'Name3 Product',
        MoneyProduct: 200000
    },
    {
        img: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        NameCategories: 'Name Categories',
        NameProduct: 'Name4 Product',
        MoneyProduct: 200000
    },
    {
        img: 'https://th.bing.com/th/id/OIP.LeJOeIPyaSgiKqaCKEQxQwHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        NameCategories: 'Name Categories',
        NameProduct: 'Name5 Product',
        MoneyProduct: 200000
    }];
    const Products = (DbProduct) => {
        return DbProduct.map((item, index) => {
            return (
                <div className='itemProduct' key={index.toString()}>
                    <div className='itemProduct__image'>
                        <img src={item.img} />
                    </div>
                    <span className='itemProduct__NameCategories'>
                        {item.NameCategories}
                    </span>
                    <Link to='/product-detail' className='itemProduct__NameProduct'>
                        {item.NameProduct}
                    </Link>
                    <span className='MoneyProduct'>
                        {item.MoneyProduct + index}đ
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
                    {Products(DataP)}
                </div>
                <Pagination />
            </div>
        </div>
    )
}; 

export default Product;