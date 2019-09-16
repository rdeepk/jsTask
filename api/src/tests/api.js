import axios from 'axios'
 
const API_URL = 'http://localhost:8000/graphql'
 
export const product = async ({ asin }) => {
        const query =  `query{
            product(asin: "${asin}") {
              id
              name
              asin
              categoryGroup
              subCategory
              rank
              length
              width
              height
            }
        }
        `
        const res = await axios.post(API_URL, {
            query
        })
    return res.data
}