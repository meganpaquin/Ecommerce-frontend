import './cart.css'
import StoreContext from '../store/storeContext';
import ProductInCart from './productInCart'

const Cart = () => {

    const cart = useContext(StoreContext).cart
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
                    (<ProductInCart key={d._id} data={d}></ProductInCart>)
                )}

                <span className='total_price'>Total Cost: <span className='the_price'>${totalCost()}</span></span>
            </div>
        </div>
    )
 }

 export default Cart;