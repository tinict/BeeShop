import SlideShowGallery from "./SlideShowGallery";
import SlideShow from "./SlideShow";
import '../../../css/StyleComponents/Content.css';

const Centent = () => {
    return (
        <div className="Content ScrollTop">
            <SlideShowGallery />
            {SlideShow('DB_BestSeller', 'BestSeller')}
            {SlideShow('DB_NewProduct', 'NewProduct')}
        </div>
    );
};

export default Centent;