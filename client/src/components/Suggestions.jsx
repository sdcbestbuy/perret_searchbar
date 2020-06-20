import React from 'react';

const Suggestions = ({ products }) => {
  const options = products.map((product) => {
  return <li key={product.id}>{product.product_name}</li>
  });
return <ul className="suggestions-dropdown">{options}</ul>
};

export default Suggestions;