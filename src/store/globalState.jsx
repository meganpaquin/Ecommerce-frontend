import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart]= useState([]);
    const [user, setUser]= useState([]);

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
        let clone = [...cart];

        for(let i=0; i < clone.length; i++){
            let clone_id = clone[i]._id;
            let prod_id = prod._id;

            if(clone_id === prod_id){
                clone.splice(i, 1);
                i--
            }
        }
        setCart(clone);
    };

    const helloUser = (input) => {
        console.log('Setting up your user experience...')
        setUser(input)
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            helloUser: helloUser,
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}


export default GlobalState;