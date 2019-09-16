import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    product(asin: ID!): Product!
  }

  type Product {
    id: ID!
    asin: String!
    name: String!
    categoryGroup: String
    subCategory: String
    rank: Int
    length: Float
    width: Float
    height: Float
    statusCode: String
    message: String
  }
`;