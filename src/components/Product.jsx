import './Product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (properties) => {

    const [qunatity, setQuantity] = useState(0);

    const add2Cart = () => {
        console.log(properties.data.title);
    };

    const onQtyChange = (qty) => {
        //create a variable that exists outside this function
        setQuantity(qty);
    };


return(
    

    <div className='product'>
        <figure>
            <img src={"/images/" + properties.data.image} alt={properties.data.title} />
            <figcaption><textarea cols="17" rows="3" value={properties.data.title} readOnly></textarea></figcaption>
        </figure>
        
        <span id="total">Total: {(properties.data.price*qunatity).toFixed(2)}</span>
        
        <span id="price">Price: {properties.data.price.toFixed(2)}</span>
        
        <div id="button-area">
        <QuantityPicker onChange={onQtyChange}></QuantityPicker>
        <button onClick={add2Cart}>🛒</button>
        </div>
    </div>
    );
}   

export default Product;
