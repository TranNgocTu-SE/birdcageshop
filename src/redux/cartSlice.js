import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex((item) => item.productId === action.payload.productId);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
            }else{
                const tempProduct = {...action.payload,cartQuantity: 1}
                state.cartItems.push(tempProduct);
            }
            
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        removeFromCart(state,action){
            const nextCartItems = state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId);
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex((item) => item.productId === action.payload.productId);
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId);
            state.cartItems = nextCartItems;
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

        },
        clearCart(state,action){
            state.cartItems = [];
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        getTotal(state,action){
            let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem) => {
                const {price,cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            },
            {
                total:0,
                quantity:0,
            }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
});

export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotal} = cartSlice.actions;
export default cartSlice.reducer;