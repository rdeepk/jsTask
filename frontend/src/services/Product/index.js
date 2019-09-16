import requestGraphql from '../../utils/request'
import ProductQueries from './queries'

export const fetchProduct = async (asin) => {
    const Response = await requestGraphql({
      query: ProductQueries.getProduct(asin)
    })
    return Response.product
  }