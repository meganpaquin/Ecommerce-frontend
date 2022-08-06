import './Product.css'
import './quantityPicker'
import QuantityPicker from './quantityPicker';

const Product = (properties) => {

return(
    

    <div className='product'>
        <figure>
        <img src={"/images/" + properties.data.image} alt={properties.data.title} />
        <figcaption><textarea cols="17" rows="3">{properties.data.title}</textarea></figcaption>
        </figure>
        <span id="total">Total: {properties.data.price.toFixed(2)}</span>
        <span id="price">Price: {properties.data.price.toFixed(2)}</span>
        <QuantityPicker></QuantityPicker>
    </div>
    );
}   

export default Product;
