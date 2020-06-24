import React from 'react';

const Suggestions = ({ products }) => {

  const options = products.map((product) => {
  return <div key={product.id} className="test" >{product.product_name}</div>
  });

  return (
    <div className="suggestions-dropdown">
      {options}
      <div></div>
    </div>
  );
};

export default Suggestions;