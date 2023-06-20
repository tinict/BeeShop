import '../../../css/StyleComponents/SlideShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import CardProducts from './CardProducts';


const BestSeller = (DB, NameComponent) => {
    const DataBS = [{
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
    const ActiveSlideShow = () => {
        return {
            ActiveLeft: () => {
                const elementContainerBS = document.getElementById(NameComponent);
                elementContainerBS.scrollLeft = elementContainerBS.scrollLeft - 1200/4;
            },
            ActiveRight: () => {
                const elementContainerBS = document.getElementById(NameComponent);
                elementContainerBS.scrollLeft = elementContainerBS.scrollLeft + 1200/4;
            }
        }
    }; 
    return (
        <div className="SlideShow">
            <div className="SlideShow__Header">
                <h3 className="title">BEST SELLER</h3>
            </div>
            <div className='SlideShow__Block'>
                <div className='Container-SlideShow' id={NameComponent}>
                    {CardProducts(DataBS)}
                </div>
                <div className='SlideShow__btnLeft' onClick={ActiveSlideShow().ActiveLeft}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </div>
                <div className='SlideShow__btnRight' onClick={ActiveSlideShow().ActiveRight}>
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </div>
            </div>
        </div>
    )
};

export default BestSeller;