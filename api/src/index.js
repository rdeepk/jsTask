import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema' 
import resolvers from './resolvers'
import { models, db } from './models'
import cors from 'cors'
 
const app = express()
app.use(cors())
 
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async() => ({ models, db })
});
 
server.applyMiddleware({ app, path: '/graphql' })
 
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql')
});