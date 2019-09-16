import React, { useState } from 'react'
import Product from './Product'
import { fetchProduct } from '../services/Product'
import './style.css'

function App() {

  const defaultAsin = "B002QYW8LW"
  const [productDetails, setProductDetails] = useState({})

  const getProduct = async () => {
    const vals = await fetchProduct(defaultAsin)
    setProductDetails(vals)
  }

  return (
    <div className="app">
     <div className="app-header">
       <h5>Get the product details of ASIN <strong>{defaultAsin}</strong> from Amazon</h5>
      <button onClick={getProduct}>Fetch Now</button>
     </div>
     <Product data={productDetails} />
    </div>
  );
}

export default App;
