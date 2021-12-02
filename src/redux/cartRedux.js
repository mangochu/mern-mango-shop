import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'



const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.products.findIndex(item => item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size)
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += action.payload.cartQuantity
        state.total += action.payload.price * action.payload.cartQuantity
        toast.info(`Increased ${state.products[itemIndex].title} cart quantity`, { position: 'bottom-left' })
      } else {
        state.quantity += 1
        state.products.push(action.payload)
        state.total += action.payload.price * action.payload.cartQuantity
        toast.success(`${action.payload.title} to cart`, { position: 'bottom-left' })
      }
    },
    addToCart: (state, action) => {
      const itemIndex = state.products.findIndex(item => item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size)
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1
        state.total += action.payload.price
        toast.info(`Increased ${state.products[itemIndex].title} cart quantity`, { position: 'bottom-left' })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.products.push(tempProduct)
        state.total += action.payload.price
        toast.success(`${action.payload.title} to cart`, { position: 'bottom-left' })
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.products.filter(
        item => item._id !== action.payload._id || item.color !== action.payload.color || item.size !== action.payload.size
      )
      state.products = nextCartItems
      state.total -= action.payload.price * action.payload.cartQuantity
      state.quantity -= 1
      toast.success(`${action.payload.title} remove from cart`, { position: 'bottom-left' })
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(item => item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size)
      if (state.products[itemIndex].cartQuantity > 1) {
        state.products[itemIndex].cartQuantity -= 1
        toast.success(`Decreased ${action.payload.title} cart quantity`, { position: 'bottom-left' })
        state.total -= action.payload.price
      } else {
        const nextCartItems = state.products.filter(
          item => item._id !== action.payload._id
        )
        state.products = nextCartItems
        state.total -= action.payload.price * action.payload.cartQuantity
        state.quantity -= 1
        toast.success(`${action.payload.title} remove from cart`, { position: 'bottom-left' })
      }
    },
    clearCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
      toast.error("Cart cleared", { position: "bottom-left" })
    }
  }
})

export const { addProduct, addToCart, removeFromCart, decreaseCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
