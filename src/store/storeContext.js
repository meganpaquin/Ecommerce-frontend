import {createContext} from 'react';

const StoreContext = createContext({
    cart: [],
    user: "",


    addToCart: () => {},
    removeFromCart: () => {},
    helloUser: () => {},
});

export default StoreContext;