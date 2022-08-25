import './cart.css'
import { useState, useContext } from 'react';
import StoreContext from '../store/storeContext';


const Cart = () => {

    const cart = useContext(StoreContext).cart


    return(
        <div className="cart">
            <h1>Checkout</h1>
            <h5>We have {cart.length} items ready for yoy</h5>

            <ul>
                {cart.map((d)=>
                <li key={d._id}>{d.title}</li>)}
            </ul>
        </div>
    )
 }

 export default Cart;