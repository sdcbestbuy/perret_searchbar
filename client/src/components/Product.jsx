import React from 'react';

const Product = ({ product }) => {
  return(
    <div>
      <p>{ product.name }</p>
    </div>    
  );
};

export default Product;