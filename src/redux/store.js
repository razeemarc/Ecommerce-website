import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/cart'
import wishlistReducer from "./reducer/wishlist";
export default configureStore({
    reducer:{
        cart: cartReducer,
        wish: wishlistReducer
    }
})

