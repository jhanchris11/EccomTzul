import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const saveCart = createAsyncThunk(
  'cart/saveCart',
  async (cart, { getState }) => {
    const {} = getState()
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    error: false,
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action)
      console.log(state.items)
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      console.log(index)
      if (index !== -1) {
        state.items[index].cantidad += 1
      } else {
        const newObject = { ...action.payload, cantidad: 1 }
        state.items.push(newObject)
      }
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((product) => product.id !== payload.id)
    },
    reduceFromCart: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id)
      if (index !== -1) {
        const product = state.items[index]
        product.cantidad -= 1
        if (product.cantidad === 0) {
          state.items.splice(index, 1)
        }
      }
    },
    emptyCart: (state, action) => {
      state.items = []
    }
  }
})
const cartReducer = cartSlice.reducer

export { cartReducer }
export const { addToCart, removeFromCart, reduceFromCart, emptyCart } =
  cartSlice.actions
