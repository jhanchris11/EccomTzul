import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        products: []
    },
    reducers:{
        addToCart: (state, action) => {
            state.products.push(action.payload); 
        },
        removeFromCart: (state, action ) => {

        }
    }
})

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart, removeFromCart } = cartSlice.actions;