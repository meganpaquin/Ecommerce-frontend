import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart]= useState([]);
    const [user, setUser]= useState({});

    const addToCart = (prod) => {
        let clone = [...cart];
        let exist = false;

        for(let i=0; i < cart.length; i++){
            let item = cart[i];

            if(item._id === prod._id){
                exist = true;
                item.quantity += prod.quantity;
            }
        }

        if(!exist){
            clone.push(prod);
        }

        setCart(clone);
    };

    const removeFromCart = (prod) => {
        console.log("removing product from cart")

        //remove prod from the array
        let clone = [...cart]
        //add the loop to find the correct one to remove here
        setCart(clone)
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}


export default GlobalState;