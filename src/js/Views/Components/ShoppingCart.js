import '../../../css/StyleComponents/ShoppingCart.css';
import { AiOutlineShoppingCart, AiFillMinusSquare } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { useState } from 'react';
import PaymentBox from './PaymentBox'

const ShoppingCart = () => {

    const DbProduct = [
        {
            id: '1',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
            NameProduct: 'dien-thoai-Samsung-Galaxy-S10',
            Counter: 1,
            Cost: 200000,
        },
        {
            id: '2',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
            NameProduct: 'dien-thoai-Samsung-Galaxy-S10',
            Counter: 1,
            Cost: 200000,
        },
        {
            id: '3',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
            NameProduct: 'dien-thoai-Samsung-Galaxy-S10',
            Counter: 1,
            Cost: 200000,
        },
        {
            id: '4',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
            NameProduct: 'dien-thoai-Samsung-Galaxy-S10',
            Counter: 1,
            Cost: 200000,
        },
        {
            id: '5',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
            NameProduct: 'dien-thoai-Samsung-Galaxy-S10',
            Counter: 1,
            Cost: 200000,
        },
    ];

    const [products, setDbProduct] = useState(DbProduct);
    
    const handleIncrease = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].Counter += 1;
        setDbProduct(updatedProducts);
    };
    
    const handleDecrease = (index) => {
        const updatedProducts = [...products];
        if(updatedProducts[index].Counter > 1) {
            updatedProducts[index].Counter -= 1;
            setDbProduct(updatedProducts);
        }
    };
    
    const handleRomveProduct = () => {
        const updateProducts = [...products];
        console.log(updateProducts);
    };
    
    const CardProducts = ({products}) => {
        return products.map((item, index) => {
            return (
                <div className='cart' id={item.id} key={index}>
                    <div className="Cart__left">
                        <div className="Cart__imgProduct">
                            <img src={item.image} />
                        </div>
                    </div>
                    <div className="Cart__right">
                        <div className='headerCart'>
                            <h1 className='nameProduct'>{item.NameProduct}</h1>
                            <FaRegTrashAlt className='btnTrash' />
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
    
    return (
        <div className="ShoppingCart ScrollTop">
            <div className="ShoppingCart__header">
                <AiOutlineShoppingCart className='icon-ShoppingCart'/>
                <h3>Cart Product</h3>
            </div>
            <div className="Cart-container">
                <CardProducts products={products} />
            </div>
            <PaymentBox />
        </div>    
    );
};

export default ShoppingCart;