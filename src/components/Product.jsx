import './Product.css'
import './quantityPicker'
import QuantityPicker from './quantityPicker';

const Product = () => {

return(
    <div className='product'>
        <figure>
        <img src="https://picsum.photos/150" alt="a random picture" />
        <figcaption>An elegant caption that extends too far</figcaption>
        </figure>
        <QuantityPicker></QuantityPicker>
    </div>
    );
}   

export default Product;
