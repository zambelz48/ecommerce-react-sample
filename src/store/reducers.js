import { combineReducers } from 'redux'

import productReducers from 'app/product/reducers'
import cartReducers from 'app/cart/reducers'

let appReducers = Object.assign({},
  productReducers,
  cartReducers
)

export default combineReducers(appReducers)
