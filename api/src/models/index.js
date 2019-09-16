import 'dotenv/config'
import pgPromise from 'pg-promise'
import product from './product'

const cn = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  }

const pgp = pgPromise({})
const db = pgp(cn)
const models = {
    product
}
module.exports = { models, db }