import React, { useState } from 'react'
import Product from './Product'
import { fetchProduct } from '../services/Product'
import './style.css'

function App() {

  const defaultAsin = "B002QYW8LW"
  const [asin, setAsin] = useState(defaultAsin)
  const [productDetails, setProductDetails] = useState({})

  const handleChange = (e) => {
    setAsin(e.target.value)
  }

  const getProduct = async () => {
    const vals = await fetchProduct(asin)
    setProductDetails(vals)
  }

  return (
    <div className="app">
     <div className="app-header">
      <label type="text" name="asin" value={asin} disabled={true} onChange={handleChange} />
      <button onClick={getProduct}>Fetch Product</button>
     </div>
     <Product data={productDetails} />
    </div>
  );
}

export default App;
