import request from 'request-promise'
import cheerio from 'cheerio'
import { amazonBaseurl } from '../config'

const product = {
    getProduct: async (args, { db }) => {
        try {
            const query = `select * from ap.product where asin = '${args.asin}'`
            const response = await db.any(query)
            if(response.length) {
                console.log('Found in db')
                return response[0]
            } else {
                // get from amazon
                return await product.getProductFromAmazon(args, { db })
            }
            
        } catch(err) {
            return {
                statusCode: 'A001',
                message: 'System Error'
            }
        }
    },

    createProduct: async (args, { db }) => {
        try {
            const query = `insert into ap.product(name, asin, "categoryGroup", "subCategory", "rank", "length", "width", "height", "createdAt", "updatedAt")
            values ('${args.name}', '${args.asin}', '${args.categoryGroup}', '${args.subCategory}', '${args.rank}', '${args.length}', '${args.width}', '${args.height}' , current_timestamp, current_timestamp) RETURNING "id"` 
            const { id } = await db.one(query)
            args.id = id
            return args
        } catch(err) {
            return {
                statusCode: 'A001',
                message: 'System Error'
            }
        }
    },

    getProductFromAmazon : async (args, { db }) => {
        console.log('Fetching from Amazon')
        try {
            const uri = `${amazonBaseurl}${args.asin}`
            let values = {}
            return await request({ uri, gzip: true })
            .then( async (html) => {
                let $ = cheerio.load(html)
                const name = $('div#titleSection #title #productTitle').text().trim()
                const categoryGroup = $('div#wayfinding-breadcrumbs_container li:first-child a').text().trim()
                const subCategory = $('div#wayfinding-breadcrumbs_container li:last-child a').text().trim()
                const rank = $('ul.zg_hrsr li:last-child span.zg_hrsr_rank').text().trim().replace(/\#/g,'')
                const productDimensions = $('table tr.size-weight:nth-child(2) td.value').text()
                const splitted = productDimensions.split('x')
                const length = parseFloat(splitted[0].trim(), 10)
                const width = parseFloat(splitted[1].trim(), 10)
                const height = parseFloat(splitted[2].trim().split(' ')[0], 10)
                values = {
                    name,
                    asin: args.asin,
                    categoryGroup,
                    subCategory,
                    rank,
                    length,
                    width,
                    height,
                }
                return await product.createProduct(values, { db })
            })
            .catch(err => {
                return {
                    statusCode: 'A001',
                    message: 'System Error'
                }
            })
        } catch(err) {
            return {
                statusCode: 'A001',
                message: 'System Error'
            }
        }
    },
}

export default product