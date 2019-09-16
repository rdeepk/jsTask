# jsTask
This application fetches amazon product details for product with ASIN 'B002QYW8LW'

GraphQL API built with node.js and postgreSQL.
Frontend uses React.js

## Common setup
```
git clone https://github.com/rdeepk/jsTask.git
cd api
yarn install
```

```
cd ..
cd frontend
yarn install
```
It uses postgreSQL 11. To install refer to https://www.postgresql.org/docs/11/tutorial-install.html  
Create a database and add credentials to api/.env

## Run application

To run API
```
cd api
yarn start
```
Open http://localhost:8000/graphql and access API.

To run frontend
```
cd frontend
yarn start
```
Open http://localhost:3000/ to access application.

## Test API

```
cd api
yarn test
```
