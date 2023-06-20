import '../../../css/StyleComponents/SlideShowGallery.css';

const SlideShow = () => {
    return (
        <div className="Banner">
            <div className='BlockBanner'>
                <div className='BlockLeft'>
                    <img className='itemBanner' src='https://th.bing.com/th/id/R.38ed19cf8bf70f78438bc4f7fdfb5e6d?rik=I2fmGPDr44nkSQ&pid=ImgRaw&r=0' />
                </div>
                <div className='BlockRight'>
                    <img className='itemBanner__right' src='https://th.bing.com/th/id/OIP.8--DNj_7AFDeJMy1ZQQXagHaDv?pid=ImgDet&w=657&h=332&rs=1' />
                    <img className='itemBanner__right' src='https://i.pinimg.com/originals/c7/d7/95/c7d7958f9100f35c217f847c15f0a8eb.jpg' />
                </div>
            </div>
        </div>
    )
};

export default SlideShow;