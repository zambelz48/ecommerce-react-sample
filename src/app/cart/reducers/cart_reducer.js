import {
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART
} from 'app/cart/actions/cart_action'

let initialState = {
  items: [],
  currency: '',
  totalPrice: 0
}

export default (state = initialState, action) => {
  const product = action.product || {}
  const pIndex = state.items.findIndex(item => item.id === product.id)

  switch (action.type) {
    case ADD_TO_CART:
      if (pIndex >= 0) {
        state.items[pIndex].quantity += 1
        state.items[pIndex].subtotal = state.items[pIndex].quantity * parseFloat(product.price)
      } else {
        state.items.push(Object.assign({
          quantity: 1,
          subtotal: product.price
        }, product))
      }

      state.totalPrice = state.items.reduce((prevValue, current) => parseFloat(prevValue) + parseFloat(current.subtotal), 0)

      return {
        items: [...state.items],
        currency: state.items[0].currency,
        totalPrice: state.totalPrice
      }

    case UPDATE_QUANTITY:
      if (isNaN(product.quantity)) {
        return state
      }
      state.items[pIndex].quantity = product.quantity
      state.items[pIndex].subtotal = product.quantity * parseFloat(state.items[pIndex].price)
      state.totalPrice = state.items.reduce((prevValue, current) => parseFloat(prevValue) + parseFloat(current.subtotal), 0)

      return {
        items: [...state.items],
        currency: state.items[0].currency,
        totalPrice: state.totalPrice
      }

    case REMOVE_FROM_CART:
      state.items = state.items.filter(item => item.id !== product.id)
      state.totalPrice = state.items.reduce((prevValue, current) => parseFloat(prevValue) + parseFloat(current.subtotal), 0)

      return {
        items: [...state.items],
        currency: state.items.length > 0 ? state.items[0].currency : '',
        totalPrice: state.totalPrice
      }

    default:
      return state
  }
}
