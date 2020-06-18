import React, { useState } from 'react';
import SearchForm from './components/SearchForm.jsx';
import ProductList from './components/ProductList.jsx';
import { productsData, linksData, iconsData } from './dummy-data.js';
import LinkList from './components/LinkList.jsx';
import LogoContainer from './components/LogoContainer.jsx';

const Header = () => {
  const [products] = useState(productsData);
  const [links] = useState(linksData);
  const [icons] = useState(iconsData);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(products);
  return(
    <div className="header">
      <LogoContainer/>
      <LinkList 
        links={links}
        className="link-list"
      />
      <SearchForm 
        onChange={() => console.log('hi')}
        className="search-form"
      />
      {/* Only want to show thos when input is onfocus */}
      <ProductList products={products}/>
    </div>
  );
};

export default Header;