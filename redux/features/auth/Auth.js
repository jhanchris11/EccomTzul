import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false,
        loading: false,
        id: '',
        email: '',
    },
    reducers: {
        login: (state, action) => {
            state.logged = true
            state.id = action.payload.id
            state.email = action.payload.email
        },
        logout: (state, action) => {
            state.logged = false
            state.id = ''
            state.email = ''
        }
    }
})

const authReducer = authSlice.reducer
export default authReducer

export const { login, logout } = authSlice.actions