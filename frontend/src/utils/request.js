import { GraphQLClient } from 'graphql-request'
import AppConfig from '../config'

const { graphql } = AppConfig.api
const graphqlApiClient = new GraphQLClient(graphql, {
  mode: 'cors',
})

const fetch = async ({ query }) => {
  const client = graphqlApiClient
    try {
      return await client.request(query)
    }      
    catch(error) {
      console.log('Fetch error', error)
      throw new Error(error)
    }
}

export default async function requestGraphql(
  options
) {
  let requestResponse = {}
      try {
        const response = await fetch(options)
        requestResponse = {
          success: true,
          ...response
        }
      } catch (error) {
        return {
          message: 'Error Fetching Data',
          statusCode: ''
        }
      }
  return requestResponse
}
