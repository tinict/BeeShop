import '../../../css/StyleComponents/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Header = ({Counter_P}) => {
    let key = JSON.parse(window.localStorage.getItem('CartProduct'));
    console.log(key);
    const total = () => {
        let total = 0;
        if (key === null)
            return 0;
        else {
            return key.length;
        }
    };
    // const [total, setTotal] = useState(() => {
    //     let key = JSON.parse(window.localStorage.getItem('CartProduct'));
    //     return key.length;
    // });

    // useEffect(() => {
    //     updateTotal();
    // }, []);
  
    // const updateTotal = () => {
    //     let key = JSON.parse(window.localStorage.getItem('CartProduct'));
    //     setTotal(key.length);
    // };
    
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
                            <span className='TotalProduct'>{Counter_P}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;