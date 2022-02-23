import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const saveCart = createAsyncThunk('cart/saveCart', async (cart,{getState}) => {
    const {cart: {products}} = getState()
    const {cart: {price}} = getState()
    const {auth: {id}} = getState()
    
    const result = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({username: id, data: {products}, price: {price}}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await result.json()

    return data
})

export const getCart = createAsyncThunk('cart/getCart', async (payload,{getState}) => {
    const {auth: {id}} = getState()
    
    const response = await fetch('/api/cart/get', {
        method: 'POST',
        body: JSON.stringify({ username: id }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    return data
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        price: 0,
        loading: false,
        error: false,
        errorMessage: '',       
    },
    reducers: {
       addToCart: (state, action) => {
        const index = state.products.findIndex(product => product.id === action.payload.id)
        state.price += action.payload.price
        
        if (index !== -1) {
            state.products[index].quantity += 1
            state.products[index].price += action.payload.price
        }
        else {
            state.products.push({ ...action.payload , quantity: 1 , price: action.payload.price })
        }
       },
       removeFromCart: (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload.id)
        state.price -= action.payload.price 
       },
       emptyCart: (state, action) => {
           state.products = []
       },
       errorCart: (state, action) => {
           state.error = true
           state.errorMessage = action.payload
       }
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
            state.products = action.payload.cartProducts.products
            state.price = action.payload.currentPayment.price
        }),
        builder.addCase(getCart.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

const cartReducer = cartSlice.reducer

export default cartReducer
export const { addToCart, removeFromCart, emptyCart, errorCart } = cartSlice.actions