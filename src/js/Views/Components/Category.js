import Breadcrumb from "./Breadcrumb";
import '../../../css/StyleComponents/Category.css';
import Product from './Product';
import FilterDropDown from "./FilterDropDown";

const Category = () => {
    return (
        <div className="Category ScrollTop">
            <div className="Container--Category">
                <div className="Category__tile">
                    <h3 className="tile">Category Product</h3>
                </div>
                <div className="Category__SubHeader">
                    <Breadcrumb />
                    <FilterDropDown />    
                </div>
                <Product />
            </div> 
        </div>
    )
};

export default Category;