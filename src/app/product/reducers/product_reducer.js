import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED
} from 'app/product/actions/product_action'

let initialState = {
  loading: true,
  error: null,
  mainProduct: {},
  leftProducts: [],
  rightProducts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        mainProduct: {},
        leftProducts: [],
        rightProducts: [],
        error: null
      }

    case GET_PRODUCTS_SUCCESS:
      const products = action.data.map((data, index) => {
        return Object.assign({
          id: (index + 1)
        }, data)
      })

      return {
        ...state,
        loading: false,
        mainProduct: products[0],
        leftProducts: products.filter((_, index) => index > 0 && index < 3),
        rightProducts: products.filter((_, index) => index > 2),
        error: null
      }

    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        mainProduct: {},
        leftProducts: [],
        rightProducts: [],
        error: 'Some error occurred'
      }

    default:
      return state
  }
}
