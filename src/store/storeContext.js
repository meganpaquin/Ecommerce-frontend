import {createContext} from 'react';

const StoreContext = createContext({
    cart: [],
    user: {},
    

    addToCart: () => {},
    removeFromCart: () => {},

});

export default StoreContext;