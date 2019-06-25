import * as productNetwork from 'app/product/networks/product_network'

export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'

const getProductsBegin = () => ({
  type: GET_PRODUCTS_BEGIN
})

const getProductsSuccess = (data) => ({
  type: GET_PRODUCTS_SUCCESS,
  data
})

const getProductsFailed = (error) => ({
  type: GET_PRODUCTS_SUCCESS,
  error
})

export const requestProducts = () => {
  return (dispatch) => {
    dispatch(getProductsBegin)

    productNetwork.getProducts()
      .then(response => {
        dispatch(getProductsSuccess(response.data))
      })
      .catch(error => {
        dispatch(getProductsFailed(error))
      })
  }
}
