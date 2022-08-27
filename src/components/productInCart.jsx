import './productInCart.css'
import {useState} from 'react';

const ProductInCart = (properties) => {

    return(
        <div className="productincart">
            <div className='information'>
                <img src={"/images/" + properties.data.image} alt={properties.data.title} />

                <div className='flexbox_title'>
                    <span className='titles'>Title</span>
                    <span>{properties.data.title}</span>
                </div>

                <div className='flexbox'>
                    <span className='titles numbers'>Qty</span>
                    <span className='numbers'>{properties.data.quantity}</span>
                </div>

                <div className='flexbox'>
                    <span className='titles numbers'>Cost</span>
                    <span className='numbers'>{properties.data.quantity*properties.data.price}</span>
                </div>

                <span className="trash btn btn-danger">🗑️</span>
            </div>
        </div>

    );
}
export default ProductInCart;