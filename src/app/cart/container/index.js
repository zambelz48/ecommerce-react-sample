import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { updateQuantity, removeFromCart } from 'app/cart/actions/cart_action'
import CartView from './view'

const mapStateToProps = (state) => {
  return state.cartReducer
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (product) => {
      dispatch(updateQuantity(product))
    },
    removeItem: (product) => {
      dispatch(removeFromCart(product))
    }
  }
}

const view = hot(module)(CartView)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(view)
