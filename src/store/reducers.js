import { combineReducers } from 'redux'

import productReducers from 'app/product/reducers'

let appReducers = Object.assign({},
  productReducers
)

export default combineReducers(appReducers)
