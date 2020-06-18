import React from 'react';

const ProductList = ({ products }) => {
  console.log(products);
  return(
    <div>
      {products.map( product => {
        return <div key={product.id}>{product.name}</div>
      })}
    </div>
  );
};

export default ProductList;