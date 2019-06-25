
export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product
})

export const updateQuantity = (product) => ({
  type: UPDATE_QUANTITY,
  product
})

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  product
})
