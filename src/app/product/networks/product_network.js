import HttpHandler from 'utils/http_handler'

const url = 'http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json'

export const getProducts = () => {
  return HttpHandler('GET', url)
}
