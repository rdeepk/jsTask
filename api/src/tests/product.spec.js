import { expect } from 'chai'
import * as productApi from './api'
 
describe('product(asin: String!): Product', () => {
    it('returns product details', async () => {
        const expectedResult = {
            product: {
            "id": "2",
            "name": "Baby Banana Infant Training Toothbrush and Teether",
            "asin": "B002QYW8LW",
            "categoryGroup": "Baby Products",
            "subCategory": "Teethers",
            "rank": 2,
            "length": 4.3,
            "width": 0.4,
            "height": 7.9
            }
        }
    
        const result = await productApi.product({ asin: 'B002QYW8LW' });
        expect(result.data).to.eql(expectedResult)
    })
})