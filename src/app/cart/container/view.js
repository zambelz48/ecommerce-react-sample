import React, { Component, Fragment } from 'react'
import 'app/cart/styles/cart.scss'

export default class CartView extends Component {

  handleQuantityInputChange(evt) {
    const props = this.props || {}
    props.updateQuantity({
      id: parseInt(evt.target.id, 10),
      quantity: parseInt(evt.target.value, 10)
    })
  }

  removeItem(item) {
    const props = this.props || {}
    props.removeItem(item)
  }

  populateCartItems(items) {
    if (items.length === 0) {
      return (
        <tr><td className="cart-empty" colSpan="4">No product</td></tr>
      )
    }

    return items.map(item => {
      return (
        <Fragment key={item.id}>
          <tr>
            <td>
              <button className="remove-cart-button" onClick={() => this.removeItem(item)}>X</button>
              <img className="thumb-img" src={item.image} />
              <label className="product-name">{item.name}</label>
            </td>
            <td className="align-middle">
              {`${item.currency} ${item.price}`}
            </td>
            <td className="align-middle">
              <input type="number"
                className="input-quantity"
                id={item.id}
                value={item.quantity}
                onChange={this.handleQuantityInputChange.bind(this)} />
            </td>
            <td className="align-middle">
              {`${item.currency} ${item.subtotal}`}
            </td>
          </tr>
        </Fragment>
      )
    })
  }

  render() {
    const props = this.props || {}

    return (
      <div className="container cart-container">
        <div className="text-center">
          <h4>SHOPPING CART - {props.items.length} items</h4>
        </div>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {this.populateCartItems(props.items)}
          </tbody>
          <tbody>
            <tr>
              <td></td><td></td><td></td>
              <td className="align-middle">{`${props.currency} ${props.totalPrice}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
