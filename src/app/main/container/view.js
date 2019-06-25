import React, { Component } from 'react'
import ProductContainer from 'app/product/container'
import CartContainer from 'app/cart/container'
import 'app/main/styles/main-app.scss'

export default class AppView extends Component {
  render() {
    return (
      <div className='container-fluid main-container'>
        <ProductContainer>
        </ProductContainer>
        <div className="main-border"></div>
        <CartContainer>
        </CartContainer>
      </div>
    )
  }
}
