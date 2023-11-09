import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import reviewSlice from './reviewSlice';
import orderSlice from './orderSlice';
import categorySlice from './categorySlice';


const store =configureStore({
    reducer: {
        users : userSlice,
        auth : authSlice,
        cart: cartSlice,
        product: productSlice,
        review : reviewSlice,
        order : orderSlice,
        category : categorySlice
    }
})

export default store;