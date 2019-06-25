import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { requestProducts } from 'app/product/actions/product_action'
import { addToCart } from 'app/cart/actions/cart_action'
import ProductView from './view'

const mapStateToProps = (state) => {
  return state.productReducer
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(requestProducts())
    },
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}

const view = hot(module)(ProductView)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(view)
