import { Outlet, Link } from "react-router-dom";
import "../../../css/StyleComponents/Breadcrumb.css";
import { RxSlash } from 'react-icons/rx';


const Breadcrumb = () => {
    return (
        <nav className="breadcrumb">
          <ol>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <RxSlash />
            <li className="breadcrumb-item active" aria-current="page">Product</li>
          </ol>
        </nav>
    )
};

export default Breadcrumb; 