export default { 
  Query: { 
    product: async (parent, args, { models, db }) => await models.product.getProduct(args, { db }),
  }, 
}; 