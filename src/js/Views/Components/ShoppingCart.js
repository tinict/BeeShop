import '../../../css/StyleComponents/ShoppingCart.css';
import { AiOutlineShoppingCart, AiFillMinusSquare } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { useState } from 'react';
import PaymentBox from './PaymentBox';
import Header from './Header';
import CountData from '../../Core/CountData.js';

const ShoppingCart = () => {

    //local storage
    let key = JSON.parse(window.localStorage.getItem('CartProduct'));
    if (key != null) var DbProduct = [...key];
    else  var DbProduct = [];
    
    const [products, setDbProduct] = useState(DbProduct);
    
    const totalMoney = ([...arr]) => {
        return arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.Total;
        }, 0);
    };
    
    const handleIncrease = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].Counter += 1;
        updatedProducts[index].Total = updatedProducts[index].Cost * updatedProducts[index].Counter;
        setDbProduct(updatedProducts);
    };
    
    const handleDecrease = (index) => {
        const updatedProducts = [...products];
        if(updatedProducts[index].Counter > 1) {
            updatedProducts[index].Counter -= 1;
            setDbProduct(updatedProducts);
        }
        else {
            handleRomveProduct(index);
        }
    };
    
    const [counter_P, setCounter_P] = useState(CountData('CartProduct'));
    
    const handleRomveProduct = (index) => {
        const updateProducts = [...products], temp = [...products];
        if (index === 0) {
            window.localStorage.clear();
            window.localStorage.setItem('CartProduct', JSON.stringify(updateProducts.slice(index + 1, products.length)));
            setDbProduct(updateProducts.slice(index + 1, products.length));
        }
        else if (index === products.length - 1) {
            setDbProduct(updateProducts.slice(0, products.length - 1));
            window.localStorage.clear();
            window.localStorage.setItem('CartProduct', JSON.stringify(updateProducts.slice(0, products.length - 1)));
            if (products.length === 2) {
                setDbProduct(updateProducts.slice(index - 1, products.length - 1));
                window.localStorage.clear();
                window.localStorage.setItem('CartProduct', JSON.stringify(updateProducts.slice(index - 1, products.length - 1)));
            }
        }
        else {
            setDbProduct((updateProducts.slice(0, index)).concat(temp.slice(index + 1, products.length)));
            window.localStorage.clear();
            window.localStorage.setItem('CartProduct', JSON.stringify(updateProducts.slice(index - 1, products.length - 1)));
        }
        setCounter_P(CountData('CartProduct'));
    };
    
    const CardProducts = ({products}) => {
        return products.map((item, index) => {
            return (
                <div className='cart' id={item.id} key={index}>
                    <div className="Cart__left">
                        <div className="Cart__imgProduct">
                            <img src={item.image} alt=''/>
                        </div>
                    </div>
                    <div className="Cart__right">
                        <div className='headerCart'>
                            <h1 className='nameProduct'>{item.NameProduct}</h1>
                            <FaRegTrashAlt onClick={() => handleRomveProduct(index)} className='btnTrash' />
                        </div>
                        <div className='CartAdd'>
                            <h3 className='Cart__Cost'>{item.Cost} VNĐ</h3>
                            <div className='Cart__btnGroup'>
                                <AiFillMinusSquare onClick={() => handleDecrease(index)} className='styleGroup'/>
                                <span className='styleGroup count'>{item.Counter}</span>
                                <MdAddBox onClick={() => handleIncrease(index)} className='styleGroup'/>
                            </div>
                        </div>
                    </div> 
                </div>
            );
        });
    };
    
    console.log(counter_P);
    
    return (
        <div className='container'>
            <Header Counter_P={counter_P} />
            <div>
                <div>
                    <div className="ShoppingCart ScrollTop">
                        <div className="ShoppingCart__header">
                            <AiOutlineShoppingCart className='icon-ShoppingCart'/>
                            <h3>Cart Product</h3>
                        </div>
                        <div className="Cart-container">
                            <CardProducts products={products} />
                        </div>
                        <PaymentBox total={totalMoney(products)} pathName={'/payment-info'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;