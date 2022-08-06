import './quantityPicker.css'
import { useState } from 'react';

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(0);
    const increase = () => {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const decrease = () => {
        if(quantity != 0){
            let newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    }


    return (
    <div className='quantitypicker'>
        <button onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button onClick={increase}>+</button>
    </div>
    );

}
export default QuantityPicker;