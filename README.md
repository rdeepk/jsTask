# jsTask
This application fetches amazon product details for the product with ASIN 'B002QYW8LW'

This includes a GraphQL API built with node.js and postgreSQL.
It uses React.js for frontend.

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
Install postgreSQL 11 for database. To install refer to https://www.postgresql.org/docs/11/tutorial-install.html  
Create a database and add credentials to api/.env

Run the migrations/setup.sql to create table structure.

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
