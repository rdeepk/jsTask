const ProductQueries = {
    getProduct: (asin) => {
      return `query{
        product(asin:"${asin}") {
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
      }`
    },
}

export default ProductQueries