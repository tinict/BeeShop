import '../../../css/StyleComponents/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='navbar'>
                <div className='navbar__left'>
                    <div className='navbar__logo'>
                        <Link to='/'>
                            <img className='logo' src={require('../../../assets/image/img__logo.png')} alt='logo-shop'/>
                        </Link>
                    </div>
                    <div className='navbar__center'>
                        <div className='btnSearch'>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <ul className='Menu'>
                            <li className='Menu-item'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='Menu-item'>
                                <Link to='/product'>Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='navbar__right'>
                    <Link to='/cart' className='btnCart'>
                        <span className='titleCart'>Cart</span>
                        <div className='CartIcon'>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </Link>
                    <a className='Account' href='#'>
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Header;