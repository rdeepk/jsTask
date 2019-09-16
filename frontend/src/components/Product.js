import React from 'react'

function Product(props) {
    const {
        name,
        asin,
        categoryGroup,
        subCategory,
        rank,
        length,
        width,
        height
    } = props.data
  return (
    <div>
        {name && <hr />}
        {name && <p><strong>Product:</strong> {name}</p>}
        {asin && <p><strong>Asin:</strong> {asin}</p>}
        {categoryGroup && <p><strong>Category Group:</strong> {categoryGroup}</p>}
        {subCategory && <p><strong>Sub Category:</strong> {subCategory}</p>}
        {rank && <p><strong>Rank:</strong> #{rank}</p>}
        {length && <p><strong>Product Dimensions:</strong> {length} x {width} x {height} inches</p>}
    </div>
  );
}

export default Product
