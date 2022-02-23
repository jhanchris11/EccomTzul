import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './features/cart/Cart'
import authReducer from './features/auth/Auth'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    }
})

export default store