import '../../../css/StyleComponents/CategoryProduct.css';
import { Link } from 'react-router-dom';

const CategoryProduct = () => {
    return (
        <div className="CategoryProduct">
            <div className="category-header">
                <h3>Category Product</h3>
            </div>
            <div className="CategoryBlock"> 
                <ul>
                    <li className='item-CategoryProduct'>
                        <a className='CategoryProduct__Name' href='#'>Áo CSGO</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default CategoryProduct;