import '../../../css/StyleComponents/CardProducts.css';

const CardProducts = (DbProduct) => {
    return DbProduct.map((item, index) => {
        return (
            <div className='CardProduct' key={index.toString()}>
                <div className='Card__image'>
                    <img src={item.img} />
                </div>
                <span className='Card__NameCategories'>
                    {item.NameCategories}
                </span>
                <a href='#' className='Card__NameProduct'>
                    {item.NameProduct}
                </a>
                <span className='MoneyProduct'>
                    {item.MoneyProduct + index}đ
                </span>
            </div>
        );
    });
};

export default CardProducts;