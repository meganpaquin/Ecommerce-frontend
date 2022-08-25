import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart]= useState([]);
    const [user, setUser]= useState({});

    const addToCart = (prod) => {
        console.log("adding product to cart")

        //add prod to the array
        let clone = [...cart];
        clone.push(prod);
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