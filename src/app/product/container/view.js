import React, { Component, Fragment } from 'react'
import 'app/product/styles/product.scss'

export default class ProductView extends Component {

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts() {
    const props = this.props
    if (props) {
      props.fetchProducts()
    }
  }

  addToCart(product) {
    const props = this.props || {}
    props.addToCart(product)
  }

  productContainer(product) {
    return (
      <div className="product-container">
        <div className="row">
          <div className="col">
            <img className="img-fluid img-box" src={product.image} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="product-name">{product.name}</p>
            <p>{`${product.currency} ${product.price}`}</p>
          </div>
          <div className="col my-auto">
            <button onClick={() => this.addToCart(product)} className="float-right cart-button">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    )
  }

  sideProducts(products) {
    return (
      products.map(product => (
        <Fragment key={product.name}>
          <div className="row">
            <div className="col">
              {this.productContainer(product)}
            </div>
          </div>
        </Fragment>
      ))
    )
  }

  render() {
    const props = this.props || {}

    if (props.loading === true) {
      return (<div></div>)
    }

    if (props.error) {
      return (<div>{props.error}</div>)
    }

    return (
      <div className="row">

        <div className="col">
          {this.sideProducts(props.leftProducts)}
        </div>

        <div className="col-5">
          {this.productContainer(props.mainProduct)}
        </div>

        <div className="col">
          {this.sideProducts(props.rightProducts)}
        </div>

      </div>
    )
  }
}
