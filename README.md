# jsTask
This application fetches amazon product details for the product with ASIN 'B002QYW8LW'

It includes a GraphQL API built with node.js and postgreSQL for the backend and React.js for the frontend.

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
To install postgreSQL 11 for database refer to https://www.postgresql.org/docs/11/tutorial-install.html  
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
<img src="https://github.com/rdeepk/jsTask/blob/master/frontend/public/interface.png" width="600">

## Test API

```
cd api
yarn test
```
