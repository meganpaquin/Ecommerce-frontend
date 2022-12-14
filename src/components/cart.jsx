import './cart.css'
import { useContext } from 'react';
import StoreContext from '../store/storeContext';
import ProductInCart from './productInCart'
import Checkout from "./checkout.jsx"

const Cart = () => {

    const cart = useContext(StoreContext).cart;
    const del = useContext(StoreContext).removeFromCart;


    const getNumItems = () => {
        let sum = 0;

        for(let i=0; i< cart.length; i++){
            let item = cart[i];
            sum += item.quantity;
        }

        return sum;
    }

    const totalCost = () => {
        let total = 0;
        
        for(let i=0; i< cart.length; i++){
            let item = cart[i];
            let price = item.price;
            let qty = item.quantity;

            total += price*qty;
        }

        return total.toFixed(2);
    }

    return(
        <div className="cart">
            <h1>Checkout</h1>

            <div className='content'>
                <h5>We have {getNumItems()} items ready for you</h5>

                {cart.map((d)=>
                    (<ProductInCart onClick={del} key={d._id} data={d}></ProductInCart>)
                )}

                <div className="checkout-box container">
                    <span className='total_price'>Total Cost:</span>
                    <span className='the_price'>${totalCost()} </span>
                    <Checkout/>
                </div>
            </div>
        </div>
    )
 }

 export default Cart;