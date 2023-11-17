import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import reviewSlice from './reviewSlice';
import orderSlice from './orderSlice';
import categorySlice from './categorySlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    users: userSlice,
    auth: authSlice,
    cart: cartSlice,
    product: productSlice,
    review: reviewSlice,
    order: orderSlice,
    category: categorySlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export const persistor = persistStore(store)