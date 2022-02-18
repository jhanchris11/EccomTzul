import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const saveCart = createAsyncThunk('cart/saveCart', async (cart,{getState}) => {
    const {cart:{products}} = getState()
    
    const result = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        body: JSON.stringify({username: 'Gonzalo', data: {products}}),
        headers: {
            'Content-Type': 'applictaion/json'
        }
    })

    const data = await result.json()

    return data
})

export const getCart = createAsyncThunk('cart/getCart', async () => {
    const response = await fetch('http://localhost:3000/api/cart/get', {
        method: 'POST',
        body: JSON.stringify({ username: 'Gonzalo' }),
        headers: {
            'Content-Type': 'applictaion/json'
        }
    })

    const data = await response.json()

    return data
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        loading: false,
        error: false,       
    },
    reducers: {
       addToCart: (state, action) => {
        state.products.push(action.payload)
       },
       removeFromCart: (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload.id)
        console.log(state.products)
       },
    },
    extraReducers(builder) {
        builder.addCase(saveCart.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(saveCart.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
        }),
        builder.addCase(saveCart.rejected, (state,action) => {
            state.loading = false
            state.error = true
        }),
        builder.addCase(getCart.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.products = action.payload.products
        }),
        builder.addCase(getCart.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

const cartReducer = cartSlice.reducer

export default cartReducer
export const { addToCart, removeFromCart } = cartSlice.actions