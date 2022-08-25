import './Product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import StoreContext from '../store/storeContext';


const Product = (properties) => {

    const [qunatity, setQuantity] = useState(0);
    const addToCart = useContext(StoreContext).addToCart;

    const handleAddClicked = () => {
        console.log(properties.data.title);
        addToCart(properties.data);
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
        <button onClick={handleAddClicked}>🛒</button>
        </div>
    </div>
    );
}   

export default Product;
